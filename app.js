/* Journalistic Translation Lab - Main Application */
const App = {
  state: {
    page: 'home',
    lang: 'en',
    dark: false,
    searchQuery: '',
    selectedCase: null,
    selectedExercise: null,
    selectedWeek: null,
    quizIndex: 0,
    quizAnswers: {},
    translationDraft: '',
    showModel: false
  },

  init() {
    const progress = Storage.get();
    this.state.lang = progress.lang || 'en';
    this.state.dark = progress.darkMode || false;
    this.applyTheme();
    this.render();
    window.addEventListener('hashchange', () => this.route());
    this.route();
  },

  route() {
    const hash = location.hash.slice(1) || 'home';
    const [page, id] = hash.split('/');
    this.state.page = page;
    if (page === 'case' && id) this.state.selectedCase = CASE_STUDIES.find(c => c.id === id);
    if (page === 'exercise' && id) this.state.selectedExercise = EXERCISES.find(e => e.id === id);
    if (page === 'week' && id) this.state.selectedWeek = COURSE_WEEKS.find(w => w.week === +id);
    this.render();
  },

  setLang(lang) {
    this.state.lang = lang;
    Storage.update({ lang });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.render();
  },

  toggleDark() {
    this.state.dark = !this.state.dark;
    Storage.update({ darkMode: this.state.dark });
    this.applyTheme();
    this.render();
  },

  applyTheme() {
    document.documentElement.classList.toggle('dark', this.state.dark);
  },

  navigate(page, id) {
    location.hash = id ? `${page}/${id}` : page;
  },

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${this.nav()}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        ${this.content()}
      </main>
      ${this.footer()}
    `;
    this.bindEvents();
  },

  nav() {
    const L = this.state.lang;
    const items = [
      { id: 'home', label: t('home') },
      { id: 'course', label: t('course') },
      { id: 'library', label: t('library') },
      { id: 'political', label: t('political') },
      { id: 'economic', label: t('economic') },
      { id: 'glossary', label: t('glossary') },
      { id: 'practice', label: t('practice') },
      { id: 'dashboard', label: t('dashboard') }
    ];
    return `
    <header class="bg-navy-900 text-white sticky top-0 z-50 shadow-lg no-print">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center gap-3 cursor-pointer" onclick="App.navigate('home')">
            <div class="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center font-bold text-lg">JT</div>
            <div>
              <div class="font-semibold text-sm sm:text-base leading-tight">${t('siteName')}</div>
              <div class="text-xs text-navy-300 hidden sm:block">${L === 'en' ? 'الترجمة الصحفية' : 'Journalistic Translation'}</div>
            </div>
          </div>
          <nav class="hidden lg:flex items-center gap-1">
            ${items.map(i => `<button onclick="App.navigate('${i.id}')" class="px-3 py-2 rounded-md text-sm font-medium ${this.state.page === i.id || (i.id === 'library' && this.state.page === 'case') ? 'bg-navy-800 text-teal-300' : 'text-navy-200 hover:bg-navy-800'}">${i.label}</button>`).join('')}
          </nav>
          <div class="flex items-center gap-2">
            <button onclick="App.setLang('${L === 'en' ? 'ar' : 'en'}')" class="px-3 py-1.5 rounded-md text-sm bg-navy-800 hover:bg-navy-700 border border-navy-600">${L === 'en' ? 'العربية' : 'English'}</button>
            <button onclick="App.toggleDark()" class="p-2 rounded-md bg-navy-800 hover:bg-navy-700" title="Toggle dark mode">◐</button>
            <button onclick="document.getElementById('mobileMenu').classList.toggle('hidden')" class="lg:hidden p-2 rounded-md bg-navy-800">☰</button>
          </div>
        </div>
        <div id="mobileMenu" class="hidden lg:hidden pb-4">
          ${items.map(i => `<button onclick="App.navigate('${i.id}');document.getElementById('mobileMenu').classList.add('hidden')" class="block w-full text-left px-3 py-2 rounded-md text-sm ${this.state.page === i.id ? 'bg-navy-800 text-teal-300' : 'text-navy-200'}">${i.label}</button>`).join('')}
        </div>
      </div>
    </header>`;
  },

  footer() {
    return `
    <footer class="bg-navy-950 text-navy-300 mt-16 no-print">
      <div class="max-w-7xl mx-auto px-4 py-10">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-white font-semibold mb-2">${t('siteName')}</h3>
            <p class="text-sm">${this.state.lang === 'en' ? 'University-level platform for English–Arabic journalistic translation of political and economic news.' : 'منصة جامعية لترجمة الأخبار السياسية والاقتصادية من الإنجليزية إلى العربية.'}</p>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-2">${this.state.lang === 'en' ? 'Academic Notice' : 'إشعار أكاديمي'}</h3>
            <p class="text-sm">${t('copyright')}</p>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-2">${this.state.lang === 'en' ? 'Institution' : 'المؤسسة'}</h3>
            <p class="text-sm">${this.state.lang === 'en' ? 'Institution-neutral educational resource. No official university affiliation claimed.' : 'مورد تعليمي محايد مؤسسياً. لا يُدعى أي انتماء جامعي رسمي.'}</p>
          </div>
        </div>
        <div class="mt-8 pt-6 border-t border-navy-800 text-center text-xs">© 2024–2026 Journalistic Translation Lab. For educational use.</div>
      </div>
    </footer>`;
  },

  content() {
    switch (this.state.page) {
      case 'home': return this.homePage();
      case 'course': return this.coursePage();
      case 'week': return this.weekPage();
      case 'library': return this.libraryPage();
      case 'case': return this.casePage();
      case 'political': return this.politicalPage();
      case 'economic': return this.economicPage();
      case 'glossary': return this.glossaryPage();
      case 'practice': return this.practicePage();
      case 'exercise': return this.exercisePage();
      case 'dashboard': return this.dashboardPage();
      case 'headlines': return this.headlinesPage();
      case 'analysis': return this.analysisPage();
      case 'resources': return this.resourcesPage();
      default: return this.homePage();
    }
  },

  homePage() {
    const L = this.state.lang;
    const progress = Storage.get();
    const completed = progress.completedLessons.length + progress.completedExercises.length;
    return `
    <section class="mb-12">
      <div class="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 md:p-12 text-white">
        <h1 class="text-3xl md:text-4xl font-bold mb-3">${L === 'en' ? 'Journalistic Translation: Political and Economic News' : 'الترجمة الصحفية: الأخبار السياسية والاقتصادية'}</h1>
        <p class="text-lg text-navy-200 mb-6 max-w-3xl">${L === 'en' ? 'Master English–Arabic News Translation Through Authentic Texts, Critical Analysis, and Guided Practice.' : 'أتقن ترجمة الأخبار من الإنجليزية إلى العربية من خلال النصوص الصحفية الموثقة والتحليل النقدي والتدريب العملي.'}</p>
        <p class="text-navy-300 mb-8 max-w-3xl text-sm leading-relaxed">${L === 'en' ? 'Precise translation of political and economic news is essential for informed public discourse and international understanding. This platform trains undergraduate students in the linguistic, terminological, and ethical skills required for professional journalistic translation into Modern Standard Arabic.' : 'تُعد الترجمة الدقيقة للأخبار السياسية والاقتصادية أمراً أساسياً للخطاب العام المستنير والتفاهم الدولي. تدرّب هذه المنصة طلاب الجامعات على المهارات اللغوية والمصطلحية والأخلاقية اللازمة للترجمة الصحفية المهنية إلى العربية الفصحى المعاصرة.'}</p>
        <div class="flex flex-wrap gap-3">
          <button onclick="App.navigate('course')" class="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 rounded-lg font-medium">${t('exploreCourse')}</button>
          <button onclick="App.navigate('library')" class="px-5 py-2.5 bg-navy-700 hover:bg-navy-600 rounded-lg font-medium border border-navy-500">${t('browseTranslations')}</button>
          <button onclick="App.navigate('practice')" class="px-5 py-2.5 bg-navy-700 hover:bg-navy-600 rounded-lg font-medium border border-navy-500">${t('practiceTranslation')}</button>
        </div>
      </div>
    </section>

    <section class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      ${[
        { icon: '📚', title: t('course'), desc: L==='en'?'14-week structured syllabus':'منهج منظم على 14 أسبوعاً', page: 'course' },
        { icon: '📰', title: t('library'), desc: L==='en'?'Documented case studies':'دراسات حالة موثقة', page: 'library' },
        { icon: '📖', title: t('glossary'), desc: L==='en'?'100+ political & economic terms':'أكثر من 100 مصطلح سياسي واقتصادي', page: 'glossary' },
        { icon: '✍️', title: t('practice'), desc: L==='en'?'Guided translation exercises':'تمارين ترجمة موجهة', page: 'practice' }
      ].map(c => `
        <button onclick="App.navigate('${c.page}')" class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-5 text-left card-hover">
          <div class="text-2xl mb-2">${c.icon}</div>
          <div class="font-semibold text-navy-900 dark:text-white">${c.title}</div>
          <div class="text-sm text-gray-500 mt-1">${c.desc}</div>
        </button>
      `).join('')}
    </section>

    <section class="grid md:grid-cols-2 gap-6 mb-12">
      <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-6">
        <h2 class="font-semibold text-lg mb-3 text-navy-900 dark:text-white">${t('featuredPolitical')}</h2>
        <p class="text-sm text-gray-600 dark:text-navy-300 mb-2">${CASE_STUDIES[0].englishHeadline}</p>
        <p class="text-sm font-arabic text-gray-700 dark:text-navy-200 mb-4 rtl" dir="rtl">${CASE_STUDIES[0].arabicHeadline}</p>
        <span class="badge badge-instructor mb-3">${t('instructorProduced')}</span>
        <button onclick="App.navigate('case','${CASE_STUDIES[0].id}')" class="block mt-3 text-teal-600 hover:underline text-sm font-medium">${L==='en'?'Open case study →':'فتح دراسة الحالة ←'}</button>
      </div>
      <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-6">
        <h2 class="font-semibold text-lg mb-3 text-navy-900 dark:text-white">${t('featuredEconomic')}</h2>
        <p class="text-sm text-gray-600 dark:text-navy-300 mb-2">${CASE_STUDIES[2].englishHeadline}</p>
        <p class="text-sm font-arabic text-gray-700 dark:text-navy-200 mb-4 rtl" dir="rtl">${CASE_STUDIES[2].arabicHeadline}</p>
        <span class="badge badge-instructor mb-3">${t('instructorProduced')}</span>
        <button onclick="App.navigate('case','${CASE_STUDIES[2].id}')" class="block mt-3 text-teal-600 hover:underline text-sm font-medium">${L==='en'?'Open case study →':'فتح دراسة الحالة ←'}</button>
      </div>
    </section>

    <section class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-6 mb-12">
      <h2 class="font-semibold text-lg mb-4">${t('learningOutcomes')}</h2>
      <ul class="grid md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-navy-200">
        ${(L==='en' ? [
          'Analyze English news discourse and identify framing',
          'Translate political and economic news into idiomatic MSA',
          'Apply appropriate translation strategies with justification',
          'Master specialized political, diplomatic and economic terminology',
          'Evaluate published translations using quality criteria',
          'Edit translations to professional journalistic standards',
          'Compare original texts with published Arabic versions',
          'Maintain ethical standards and source attribution'
        ] : [
          'تحليل الخطاب الإخباري الإنجليزي وتحديد التأطير',
          'ترجمة الأخبار السياسية والاقتصادية إلى عربية فصحى سليمة',
          'تطبيق استراتيجيات الترجمة المناسبة مع التبرير',
          'إتقان المصطلحات السياسية والدبلوماسية والاقتصادية المتخصصة',
          'تقييم الترجمات المنشورة وفق معايير الجودة',
          'تحرير الترجمات وفق المعايير الصحفية المهنية',
          'مقارنة النصوص الأصلية بالنسخ العربية المنشورة',
          'الحفاظ على المعايير الأخلاقية وإسناد المصادر'
        ]).map(o => `<li class="flex gap-2"><span class="text-teal-600">✓</span>${o}</li>`).join('')}
      </ul>
    </section>

    <section class="bg-teal-50 dark:bg-navy-800 border border-teal-200 dark:border-navy-600 rounded-xl p-6">
      <h2 class="font-semibold mb-2">${t('progress')}</h2>
      <p class="text-sm text-gray-600 dark:text-navy-300 mb-3">${L==='en' ? `You have completed ${completed} activities.` : `أكملت ${completed} نشاطاً.`}</p>
      <div class="progress-bar max-w-md"><div class="progress-fill" style="width:${Math.min(100, completed * 5)}%"></div></div>
      <button onclick="App.navigate('dashboard')" class="mt-3 text-teal-700 dark:text-teal-400 text-sm font-medium hover:underline">${L==='en'?'Go to Dashboard →':'الذهاب إلى لوحة الطالب ←'}</button>
    </section>`;
  },

  coursePage() {
    const L = this.state.lang;
    return `
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-navy-900 dark:text-white mb-2">${L==='en'?'Course Overview':'نظرة عامة على المقرر'}</h1>
      <p class="text-gray-600 dark:text-navy-300">${L==='en'?'14-week university course in English–Arabic journalistic translation.':'مقرر جامعي على 14 أسبوعاً في الترجمة الصحفية من الإنجليزية إلى العربية.'}</p>
    </div>
    <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-6 mb-8">
      <h2 class="font-semibold mb-3">${L==='en'?'Course Description':'وصف المقرر'}</h2>
      <p class="text-sm text-gray-700 dark:text-navy-200 leading-relaxed mb-4">${L==='en'?'Journalistic translation involves rendering news texts across languages while preserving informational content, adapting to target journalistic conventions, and remaining alert to ideological framing. This course develops the ability to translate political and economic news from English into professional Modern Standard Arabic through analysis of authentic (and instructor-created) materials, terminology study, guided practice, and comparative evaluation.':'تنطوي الترجمة الصحفية على نقل النصوص الإخبارية بين اللغات مع الحفاظ على المحتوى المعلوماتي، والتكيف مع الأعراف الصحفية في اللغة الهدف، والوعي بالتأطير الأيديولوجي. يطور هذا المقرر القدرة على ترجمة الأخبار السياسية والاقتصادية من الإنجليزية إلى العربية الفصحى المعاصرة المهنية من خلال تحليل مواد أصلية (ومن إنتاج المدرّس)، ودراسة المصطلحات، والتدريب الموجه، والتقييم المقارن.'}</p>
      <h2 class="font-semibold mb-3">${L==='en'?'Assessment Framework (Illustrative)':'إطار التقييم (توضيحي)'}</h2>
      <table class="w-full text-sm border-collapse">
        <thead><tr class="bg-navy-50 dark:bg-navy-800"><th class="text-left p-2 border">Assessment</th><th class="text-left p-2 border">Weight</th></tr></thead>
        <tbody>
          <tr><td class="p-2 border">Weekly translation assignments</td><td class="p-2 border">25%</td></tr>
          <tr><td class="p-2 border">Terminology quizzes</td><td class="p-2 border">15%</td></tr>
          <tr><td class="p-2 border">Comparative translation analysis</td><td class="p-2 border">20%</td></tr>
          <tr><td class="p-2 border">Midterm translation examination</td><td class="p-2 border">15%</td></tr>
          <tr><td class="p-2 border">Final translation project</td><td class="p-2 border">25%</td></tr>
        </tbody>
      </table>
      <p class="text-xs text-gray-500 mt-2">${L==='en'?'This is an illustrative framework, not an official university grading policy.':'هذا إطار توضيحي وليس سياسة تقييم رسمية لجامعة.'}</p>
    </div>
    <h2 class="font-semibold text-lg mb-4">${L==='en'?'Weekly Modules':'الوحدات الأسبوعية'}</h2>
    <div class="space-y-3">
      ${COURSE_WEEKS.map(w => `
        <button onclick="App.navigate('week',${w.week})" class="w-full bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-4 text-left card-hover flex items-start gap-4">
          <div class="w-12 h-12 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-lg flex items-center justify-center font-bold shrink-0">${w.week}</div>
          <div>
            <div class="font-medium text-navy-900 dark:text-white">${L==='en'?w.title:w.titleAr}</div>
            <div class="text-xs text-gray-500 mt-1">${w.estimatedTime} · ${w.objectives.length} objectives</div>
          </div>
        </button>
      `).join('')}
    </div>`;
  },

  weekPage() {
    const w = this.state.selectedWeek;
    if (!w) return '<p>Week not found.</p>';
    const L = this.state.lang;
    return `
    <button onclick="App.navigate('course')" class="text-teal-600 text-sm mb-4 hover:underline">← ${t('course')}</button>
    <h1 class="text-2xl font-bold mb-1">${L==='en'?w.title:w.titleAr}</h1>
    <p class="text-sm text-gray-500 mb-6">${t('week')} ${w.week} · ${w.estimatedTime}</p>
    <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-6 mb-6">
      <h2 class="font-semibold mb-3">${L==='en'?'Learning Objectives':'أهداف التعلم'}</h2>
      <ul class="space-y-2 text-sm">${w.objectives.map(o => `<li class="flex gap-2"><span class="text-teal-600">•</span>${o}</li>`).join('')}</ul>
    </div>
    <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-6 mb-6">
      <h2 class="font-semibold mb-3">${L==='en'?'Key Focus':'التركيز الأساسي'}</h2>
      <p class="text-sm text-gray-700 dark:text-navy-200 leading-relaxed">${L==='en'?'This module develops analytical and practical skills related to the weekly topic. Students examine authentic or instructor-created examples, study relevant terminology, complete guided translation tasks, and reflect on translation decisions. Detailed lesson content expands on discourse features, typical translation problems, and professional strategies.':'تطور هذه الوحدة المهارات التحليلية والعملية المتعلقة بموضوع الأسبوع. يفحص الطلاب أمثلة أصلية أو من إنتاج المدرّس، ويدرسون المصطلحات ذات الصلة، وينجزون مهام ترجمة موجهة، ويتأملون في قرارات الترجمة. يتوسع محتوى الدرس المفصل في سمات الخطاب ومشكلات الترجمة النموذجية والاستراتيجيات المهنية.'}</p>
    </div>
    <div class="flex gap-3">
      <button onclick="Storage.markComplete('lesson','week-'+w.week);App.render()" class="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm">${t('complete')}</button>
      <button onclick="App.navigate('practice')" class="px-4 py-2 border border-gray-300 rounded-lg text-sm">${t('practice')}</button>
    </div>`;
  },

  libraryPage() {
    const L = this.state.lang;
    return `
    <h1 class="text-2xl font-bold mb-2">${t('library')}</h1>
    <p class="text-sm text-gray-600 dark:text-navy-300 mb-6">${L==='en'?'All case studies below are clearly labeled. Instructor-produced materials are for teaching purposes and are not claimed as published translations. Verification of published pairs requires live source checking; none are falsely marked as verified published translations in this implementation.':'جميع دراسات الحالة أدناه مُعلَّمة بوضوح. المواد من إنتاج المدرّس لأغراض تعليمية ولا يُدعى أنها ترجمات منشورة. التحقق من الأزواج المنشورة يتطلب فحصاً مباشراً للمصادر؛ لا يُوسم أي منها زوراً كترجمة منشورة موثقة في هذا التنفيذ.'}</p>
    <div class="grid md:grid-cols-2 gap-4">
      ${CASE_STUDIES.map(cs => `
        <button onclick="App.navigate('case','${cs.id}')" class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-5 text-left card-hover">
          <div class="flex items-center gap-2 mb-2">
            <span class="badge ${cs.relationship==='instructor_produced'?'badge-instructor':'badge-verified'}">${cs.relationship==='instructor_produced'?t('instructorProduced'):t('verified')}</span>
            <span class="text-xs text-gray-500">${cs.category} · ${cs.difficulty}</span>
          </div>
          <div class="font-medium text-sm mb-1">${cs.englishHeadline}</div>
          <div class="text-sm font-arabic text-gray-600 dark:text-navy-300 rtl" dir="rtl">${cs.arabicHeadline}</div>
        </button>
      `).join('')}
    </div>`;
  },

  casePage() {
    const cs = this.state.selectedCase;
    if (!cs) return '<p>Case not found.</p>';
    const L = this.state.lang;
    return `
    <button onclick="App.navigate('library')" class="text-teal-600 text-sm mb-4 hover:underline">← ${t('library')}</button>
    <div class="flex flex-wrap items-center gap-2 mb-4">
      <span class="badge badge-instructor">${t('instructorProduced')}</span>
      <span class="text-xs text-gray-500">${cs.category} · ${cs.difficulty} · ${cs.topic}</span>
    </div>
    <h1 class="text-xl font-bold mb-1">${cs.englishHeadline}</h1>
    <h2 class="text-lg font-arabic text-gray-700 dark:text-navy-200 mb-6 rtl" dir="rtl">${cs.arabicHeadline}</h2>

    <div class="comparison-grid mb-8">
      <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-5">
        <div class="text-xs font-semibold text-gray-500 mb-2 uppercase">English Source (LTR)</div>
        <div class="ltr text-sm leading-relaxed" dir="ltr">${cs.englishExcerpt}</div>
      </div>
      <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-5">
        <div class="text-xs font-semibold text-gray-500 mb-2 uppercase">Arabic Translation (RTL)</div>
        <div class="rtl font-arabic text-sm leading-relaxed" dir="rtl">${cs.arabicExcerpt}</div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-5">
        <h3 class="font-semibold mb-3">${t('terminology')}</h3>
        <ul class="text-sm space-y-1">${cs.terminologyNotes.map(n => `<li class="text-gray-700 dark:text-navy-200">• ${n}</li>`).join('')}</ul>
      </div>
      <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-5">
        <h3 class="font-semibold mb-3">${t('strategies')}</h3>
        ${cs.strategyAnnotations.map(s => `
          <div class="mb-3 text-sm">
            <span class="font-medium text-teal-700 dark:text-teal-400">${s.strategy}</span>
            <p class="text-gray-600 dark:text-navy-300 mt-0.5">${s.explanation}</p>
            <p class="text-xs mt-1"><span class="ltr" dir="ltr">${s.en}</span> → <span class="font-arabic" dir="rtl">${s.ar}</span></p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-5 mb-6">
      <h3 class="font-semibold mb-3">${t('analysis')}</h3>
      <p class="text-sm text-gray-700 dark:text-navy-200 leading-relaxed">${cs.criticalAnalysis}</p>
    </div>

    <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-5 mb-6">
      <h3 class="font-semibold mb-3">${t('discussion')}</h3>
      <ol class="text-sm space-y-2 list-decimal list-inside">${cs.discussionQuestions.map(q => `<li>${q}</li>`).join('')}</ol>
    </div>

    <div class="bg-amber-50 dark:bg-navy-800 border border-amber-200 dark:border-navy-600 rounded-xl p-4 text-sm">
      <strong>Instructor commentary:</strong> ${cs.instructorCommentary}
    </div>`;
  },

  politicalPage() {
    const L = this.state.lang;
    return `
    <h1 class="text-2xl font-bold mb-2">${t('political')}</h1>
    <p class="text-sm text-gray-600 dark:text-navy-300 mb-6">${L==='en'?'Units covering political language, diplomacy, elections, conflict reporting, and headlines.':'وحدات تغطي اللغة السياسية والدبلوماسية والانتخابات وتقارير النزاع والعناوين.'}</p>
    <div class="space-y-4">
      ${[
        { t: 'Unit 1: Political Language and Discourse', d: 'Objective vs evaluative language, connotations, framing, lexical selection.' },
        { t: 'Unit 2: Diplomacy and International Relations', d: 'Negotiations, treaties, sanctions, recognition, official statements.' },
        { t: 'Unit 3: Elections and Government', d: 'Campaigns, parliamentary procedures, cabinet, government formation.' },
        { t: 'Unit 4: Conflict and International Reporting', d: 'Conflict-sensitive terms, attribution, ceasefires, humanitarian language.' },
        { t: 'Unit 5: Political Headlines', d: 'Ellipsis, nominalization, passive, metaphor, emphasis shifts.' }
      ].map((u,i) => `
        <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-5">
          <h3 class="font-semibold">${u.t}</h3>
          <p class="text-sm text-gray-600 dark:text-navy-300 mt-1">${u.d}</p>
        </div>
      `).join('')}
    </div>
    <div class="mt-8">
      <button onclick="App.navigate('library')" class="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm mr-2">${t('library')}</button>
      <button onclick="App.navigate('practice')" class="px-4 py-2 border rounded-lg text-sm">${t('practice')}</button>
    </div>`;
  },

  economicPage() {
    const L = this.state.lang;
    return `
    <h1 class="text-2xl font-bold mb-2">${t('economic')}</h1>
    <p class="text-sm text-gray-600 dark:text-navy-300 mb-6">${L==='en'?'Units covering economic discourse, macroeconomics, monetary policy, markets, trade, and statistics.':'وحدات تغطي الخطاب الاقتصادي والاقتصاد الكلي والسياسة النقدية والأسواق والتجارة والإحصاءات.'}</p>
    <div class="space-y-4">
      ${[
        { t: 'Unit 1: Economic News Discourse', d: 'Precision, causality, numerical information, headline terminology.' },
        { t: 'Unit 2: Macroeconomics', d: 'GDP, inflation, recession, growth, unemployment, CPI.' },
        { t: 'Unit 3: Monetary Policy and Banking', d: 'Interest rates, central bank decisions, tightening/easing, credit.' },
        { t: 'Unit 4: Markets and Investment', d: 'Stocks, bonds, yields, commodities, FX, volatility.' },
        { t: 'Unit 5: Trade and Public Finance', d: 'Trade deficits, tariffs, fiscal deficits, public debt, FDI.' },
        { t: 'Unit 6: Translating Statistics', d: 'Percentages vs percentage points, large numbers, currencies, nominal vs real.' }
      ].map(u => `
        <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-5">
          <h3 class="font-semibold">${u.t}</h3>
          <p class="text-sm text-gray-600 dark:text-navy-300 mt-1">${u.d}</p>
        </div>
      `).join('')}
    </div>
    <div class="mt-8">
      <button onclick="App.navigate('library')" class="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm mr-2">${t('library')}</button>
      <button onclick="App.navigate('practice')" class="px-4 py-2 border rounded-lg text-sm">${t('practice')}</button>
    </div>`;
  },

  glossaryPage() {
    const L = this.state.lang;
    const q = (this.state.searchQuery || '').toLowerCase();
    const filtered = GLOSSARY.filter(g => !q || g.en.toLowerCase().includes(q) || g.ar.includes(q) || g.cat.includes(q));
    return `
    <h1 class="text-2xl font-bold mb-2">${t('glossary')}</h1>
    <p class="text-sm text-gray-600 dark:text-navy-300 mb-4">${L==='en'?'Search political, diplomatic, economic and financial terms. Save favorites for review.':'ابحث في المصطلحات السياسية والدبلوماسية والاقتصادية والمالية. احفظ المفضلة للمراجعة.'}</p>
    <input type="search" id="glossarySearch" placeholder="${t('search')}" value="${this.state.searchQuery||''}"
      class="w-full max-w-md px-4 py-2 border border-gray-300 dark:border-navy-600 rounded-lg mb-6 bg-white dark:bg-navy-900"
      oninput="App.state.searchQuery=this.value;App.render()" />
    <div class="grid md:grid-cols-2 gap-3">
      ${filtered.map(g => {
        const fav = Storage.get().favorites.includes(g.id);
        return `
        <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-4">
          <div class="flex justify-between items-start">
            <div>
              <div class="font-medium">${g.en}</div>
              <div class="font-arabic text-teal-700 dark:text-teal-400 rtl" dir="rtl">${g.ar}</div>
            </div>
            <button onclick="Storage.toggleFavorite('${g.id}');App.render()" class="text-lg">${fav?'★':'☆'}</button>
          </div>
          <div class="text-xs text-gray-500 mt-1">${g.cat}</div>
          <p class="text-sm text-gray-600 dark:text-navy-300 mt-2">${L==='en'?g.defEn:g.defAr}</p>
          <p class="text-xs mt-2 ltr" dir="ltr"><em>${g.exEn}</em></p>
          <p class="text-xs font-arabic rtl" dir="rtl"><em>${g.exAr}</em></p>
        </div>`;
      }).join('') || `<p class="text-gray-500">${t('noResults')}</p>`}
    </div>`;
  },

  practicePage() {
    const L = this.state.lang;
    return `
    <h1 class="text-2xl font-bold mb-2">${t('practice')}</h1>
    <p class="text-sm text-gray-600 dark:text-navy-300 mb-6">${L==='en'?'Select an exercise, write your Arabic translation, save a draft, and compare with the model answer.':'اختر تمريناً، اكتب ترجمتك العربية، احفظ مسودة، وقارن بالترجمة النموذجية.'}</p>
    <div class="space-y-3">
      ${EXERCISES.map(ex => `
        <button onclick="App.navigate('exercise','${ex.id}')" class="w-full bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-4 text-left card-hover">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-navy-800">${ex.category}</span>
            <span class="text-xs px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-900 text-teal-800 dark:text-teal-200">${ex.difficulty}</span>
          </div>
          <div class="font-medium">${L==='en'?ex.title:ex.titleAr}</div>
          <div class="text-sm text-gray-500 mt-1">${ex.objective}</div>
        </button>
      `).join('')}
    </div>
    <div class="mt-8">
      <h2 class="font-semibold mb-3">${L==='en'?'Quick Quizzes':'اختبارات سريعة'}</h2>
      ${QUIZZES.map((q,i) => `
        <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-4 mb-3">
          <p class="font-medium text-sm mb-2">${i+1}. ${q.question}</p>
          <div class="space-y-1">
            ${q.options.map((o,j) => `
              <label class="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="quiz-${q.id}" value="${j}" onchange="App.checkQuiz('${q.id}',${j},${q.correct})"/>
                ${o}
              </label>
            `).join('')}
          </div>
          <div id="quiz-fb-${q.id}" class="mt-2 text-sm hidden"></div>
        </div>
      `).join('')}
    </div>
    <div class="mt-6">
      <button onclick="App.navigate('headlines')" class="text-teal-600 hover:underline text-sm">${L==='en'?'Headline Workshop →':'ورشة العناوين ←'}</button>
    </div>`;
  },

  checkQuiz(id, chosen, correct) {
    const el = document.getElementById('quiz-fb-' + id);
    el.classList.remove('hidden');
    if (chosen === correct) {
      el.innerHTML = '<span class="text-green-700">✓ Correct.</span> ' + QUIZZES.find(q=>q.id===id).explanation;
      const p = Storage.get();
      p.quizScores[id] = 1;
      Storage.set(p);
    } else {
      el.innerHTML = '<span class="text-red-700">✗ Not quite.</span> ' + QUIZZES.find(q=>q.id===id).explanation;
    }
  },

  exercisePage() {
    const ex = this.state.selectedExercise;
    if (!ex) return '<p>Exercise not found.</p>';
    const L = this.state.lang;
    const saved = Storage.get().savedTranslations[ex.id] || '';
    return `
    <button onclick="App.navigate('practice')" class="text-teal-600 text-sm mb-4 hover:underline">← ${t('practice')}</button>
    <div class="flex gap-2 mb-3">
      <span class="text-xs px-2 py-0.5 rounded bg-gray-100">${ex.category}</span>
      <span class="text-xs px-2 py-0.5 rounded bg-teal-50 text-teal-800">${ex.difficulty}</span>
    </div>
    <h1 class="text-xl font-bold mb-2">${L==='en'?ex.title:ex.titleAr}</h1>
    <p class="text-sm text-gray-600 mb-4">${ex.objective}</p>
    <div class="bg-navy-50 dark:bg-navy-800 border border-navy-200 dark:border-navy-600 rounded-xl p-5 mb-6">
      <div class="text-xs font-semibold text-gray-500 mb-2">ENGLISH SOURCE</div>
      <div class="ltr text-sm leading-relaxed" dir="ltr">${ex.sourceText}</div>
      <p class="text-xs text-gray-500 mt-3"><strong>Context:</strong> ${ex.context}</p>
      <p class="text-xs text-gray-500"><strong>Instructions:</strong> ${ex.instructions}</p>
    </div>
    <div class="mb-4">
      <label class="block text-sm font-medium mb-2">${t('yourTranslation')}</label>
      <textarea id="translationInput" rows="8" class="w-full border border-gray-300 dark:border-navy-600 rounded-lg p-3 font-arabic text-sm rtl" dir="rtl" placeholder="اكتب ترجمتك هنا...">${saved}</textarea>
    </div>
    <div class="flex flex-wrap gap-2 mb-6">
      <button onclick="App.saveDraft('${ex.id}')" class="px-4 py-2 bg-navy-800 text-white rounded-lg text-sm">${t('save')}</button>
      <button onclick="App.showModelAnswer()" class="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm">${t('modelAnswer')}</button>
      <button onclick="Storage.markComplete('exercise','${ex.id}');App.render()" class="px-4 py-2 border rounded-lg text-sm">${t('complete')}</button>
    </div>
    <div id="modelBox" class="hidden bg-green-50 dark:bg-navy-800 border border-green-200 dark:border-navy-600 rounded-xl p-5 mb-6">
      <h3 class="font-semibold mb-2">${t('modelAnswer')}</h3>
      <div class="font-arabic text-sm leading-relaxed rtl" dir="rtl">${ex.modelTranslation}</div>
      <h4 class="font-medium mt-4 mb-2 text-sm">${t('terminology')}</h4>
      <ul class="text-sm">${ex.terminology.map(t => `<li><span class="ltr" dir="ltr">${t.en}</span> → <span class="font-arabic" dir="rtl">${t.ar}</span></li>`).join('')}</ul>
      <h4 class="font-medium mt-3 mb-1 text-sm">Common difficulties</h4>
      <ul class="text-sm list-disc list-inside">${ex.difficulties.map(d => `<li>${d}</li>`).join('')}</ul>
    </div>
    <div class="bg-white dark:bg-navy-900 border rounded-xl p-4 text-sm">
      <strong>Rubric (self-assessment):</strong>
      <ul class="mt-2 space-y-1">
        <li>Accuracy and completeness — 35%</li>
        <li>Terminology — 25%</li>
        <li>Arabic journalistic style — 20%</li>
        <li>Grammar and readability — 10%</li>
        <li>Context and register — 10%</li>
      </ul>
    </div>`;
  },

  saveDraft(id) {
    const text = document.getElementById('translationInput').value;
    Storage.saveTranslation(id, text);
    alert(this.state.lang === 'en' ? 'Draft saved locally.' : 'تم حفظ المسودة محلياً.');
  },

  showModelAnswer() {
    document.getElementById('modelBox').classList.remove('hidden');
  },

  headlinesPage() {
    const L = this.state.lang;
    return `
    <button onclick="App.navigate('practice')" class="text-teal-600 text-sm mb-4 hover:underline">← ${t('practice')}</button>
    <h1 class="text-2xl font-bold mb-4">${t('headlines')}</h1>
    <div class="space-y-4">
      ${HEADLINES.map((h,i) => `
        <div class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl p-5">
          <div class="text-sm font-medium mb-1 ltr" dir="ltr">${h.en}</div>
          <div class="font-arabic text-teal-800 dark:text-teal-300 rtl mb-2" dir="rtl">${h.ar}</div>
          <p class="text-xs text-gray-500">${h.note}</p>
        </div>
      `).join('')}
    </div>`;
  },

  analysisPage() {
    return this.casePage(); // reuse
  },

  dashboardPage() {
    const L = this.state.lang;
    const p = Storage.get();
    return `
    <h1 class="text-2xl font-bold mb-4">${t('dashboard')}</h1>
    <div class="grid md:grid-cols-3 gap-4 mb-8">
      <div class="bg-white dark:bg-navy-900 border rounded-xl p-5">
        <div class="text-2xl font-bold text-teal-600">${p.completedLessons.length}</div>
        <div class="text-sm text-gray-500">${L==='en'?'Lessons completed':'دروس مكتملة'}</div>
      </div>
      <div class="bg-white dark:bg-navy-900 border rounded-xl p-5">
        <div class="text-2xl font-bold text-teal-600">${p.completedExercises.length}</div>
        <div class="text-sm text-gray-500">${L==='en'?'Exercises completed':'تمارين مكتملة'}</div>
      </div>
      <div class="bg-white dark:bg-navy-900 border rounded-xl p-5">
        <div class="text-2xl font-bold text-teal-600">${p.favorites.length}</div>
        <div class="text-sm text-gray-500">${L==='en'?'Favorite terms':'مصطلحات مفضلة'}</div>
      </div>
    </div>
    <div class="bg-white dark:bg-navy-900 border rounded-xl p-5 mb-6">
      <h2 class="font-semibold mb-3">${L==='en'?'Saved Translations':'ترجمات محفوظة'}</h2>
      ${Object.keys(p.savedTranslations).length ? Object.entries(p.savedTranslations).map(([id,text]) => `
        <div class="mb-3 p-3 bg-gray-50 dark:bg-navy-800 rounded-lg">
          <div class="text-xs text-gray-500 mb-1">${id}</div>
          <div class="font-arabic text-sm rtl" dir="rtl">${text.slice(0,200)}${text.length>200?'…':''}</div>
        </div>
      `).join('') : `<p class="text-sm text-gray-500">${L==='en'?'No saved translations yet.':'لا توجد ترجمات محفوظة بعد.'}</p>`}
    </div>
    <div class="flex flex-wrap gap-2">
      <button onclick="App.exportProgress()" class="px-4 py-2 border rounded-lg text-sm">${t('exportData')}</button>
      <button onclick="App.importProgress()" class="px-4 py-2 border rounded-lg text-sm">${t('importData')}</button>
      <button onclick="if(confirm('Reset all progress?')){Storage.reset();App.render()}" class="px-4 py-2 border border-red-300 text-red-700 rounded-lg text-sm">${t('resetProgress')}</button>
    </div>
    <p class="text-xs text-gray-500 mt-4">${L==='en'?'Progress is stored in browser localStorage only. It is not synced across devices.':'يُخزَّن التقدم في localStorage بالمتصفح فقط. لا تتم مزامنته عبر الأجهزة.'}</p>`;
  },

  exportProgress() {
    const data = Storage.export();
    const blob = new Blob([data], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'jtl-progress.json';
    a.click();
  },

  importProgress() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        if (Storage.import(reader.result)) { alert('Imported'); App.render(); }
        else alert('Invalid file');
      };
      reader.readAsText(file);
    };
    input.click();
  },

  resourcesPage() {
    return `<h1 class="text-2xl font-bold mb-4">Academic Resources</h1>
    <p class="text-sm text-gray-600 mb-4">Foundational works in translation studies and news translation (general recommendations; verify current editions and availability):</p>
    <ul class="text-sm space-y-2 list-disc list-inside">
      <li>Mona Baker – works on translation and conflict / framing</li>
      <li>Jeremy Munday – Introducing Translation Studies</li>
      <li>Christiane Nord – Translating as a Purposeful Activity</li>
      <li>Basil Hatim & Ian Mason – Discourse and the Translator</li>
      <li>Lawrence Venuti – The Translator’s Invisibility</li>
      <li>Juliane House – Translation Quality Assessment</li>
    </ul>
    <p class="text-xs text-gray-500 mt-4">No fabricated DOIs or specific editions are listed. Consult library catalogues and legitimate open resources for current bibliographic details.</p>`;
  },

  bindEvents() {
    // events bound via inline handlers for simplicity in this static build
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
