const COURSE_WEEKS = [
  { week: 1, title: 'Introduction to Journalistic Translation', titleAr: 'مقدمة في الترجمة الصحفية', objectives: ['Define journalistic translation and its communicative purposes', 'Identify linguistic and cultural challenges in news translation', 'Distinguish journalistic register from other text types'], estimatedTime: '3–4 hours' },
  { week: 2, title: 'Language and Style of Political and Economic News', titleAr: 'لغة وأسلوب الأخبار السياسية والاقتصادية', objectives: ['Analyze objectivity and evaluative language in news', 'Recognize nominalization and passive constructions', 'Identify ideological framing devices'], estimatedTime: '3–4 hours' },
  { week: 3, title: 'Translating Headlines, Leads, and News Structure', titleAr: 'ترجمة العناوين والمقدمات وبنية الخبر', objectives: ['Apply compression strategies for headlines', 'Preserve informational hierarchy in leads', 'Handle tense and aspect shifts'], estimatedTime: '3–4 hours' },
  { week: 4, title: 'Political Terminology and Diplomatic Discourse', titleAr: 'المصطلحات السياسية والخطاب الدبلوماسي', objectives: ['Master core diplomatic terminology', 'Translate official statements accurately', 'Handle sensitive political concepts'], estimatedTime: '4 hours' },
  { week: 5, title: 'Elections, Governments, and International Relations', titleAr: 'الانتخابات والحكومات والعلاقات الدولية', objectives: ['Translate election and parliamentary language', 'Handle government formation terminology', 'Analyze bilateral and multilateral discourse'], estimatedTime: '4 hours' },
  { week: 6, title: 'Conflict Reporting, Ideology, and Media Framing', titleAr: 'تقارير النزاع والأيديولوجيا والتأطير الإعلامي', objectives: ['Identify framing devices in conflict reporting', 'Preserve attribution and modality', 'Avoid introducing translator bias'], estimatedTime: '4 hours' },
  { week: 7, title: 'Comparative Analysis of Published Political News Translations', titleAr: 'التحليل المقارن لترجمات الأخبار السياسية المنشورة', objectives: ['Compare English and Arabic published versions', 'Identify systematic translation choices', 'Evaluate fidelity and readability'], estimatedTime: '4 hours' },
  { week: 8, title: 'Introduction to Economic News Translation', titleAr: 'مقدمة في ترجمة الأخبار الاقتصادية', objectives: ['Identify features of economic news discourse', 'Handle numerical information precisely', 'Recognize economic causality language'], estimatedTime: '3–4 hours' },
  { week: 9, title: 'Inflation, Interest Rates, and Monetary Policy', titleAr: 'التضخم وأسعار الفائدة والسياسة النقدية', objectives: ['Translate inflation and rate terminology accurately', 'Distinguish percentage and percentage points', 'Render central-bank decisions correctly'], estimatedTime: '4 hours' },
  { week: 10, title: 'Financial Markets, Banking, and Exchange Rates', titleAr: 'الأسواق المالية والمصارف وأسعار الصرف', objectives: ['Translate market and banking terms', 'Handle exchange-rate language', 'Preserve numerical precision'], estimatedTime: '4 hours' },
  { week: 11, title: 'International Trade, Investment, and Economic Indicators', titleAr: 'التجارة الدولية والاستثمار والمؤشرات الاقتصادية', objectives: ['Translate trade and investment terminology', 'Handle FDI and current-account language', 'Interpret economic indicators'], estimatedTime: '4 hours' },
  { week: 12, title: 'Translating Economic Statistics and Financial Reports', titleAr: 'ترجمة الإحصاءات الاقتصادية والتقارير المالية', objectives: ['Translate large numbers and currencies accurately', 'Distinguish nominal and real values', 'Handle forecasts versus actual results'], estimatedTime: '4 hours' },
  { week: 13, title: 'Translation Editing, Quality Assessment, and Professional Ethics', titleAr: 'تحرير الترجمة وتقييم الجودة وأخلاقيات المهنة', objectives: ['Apply quality criteria to translations', 'Edit for journalistic register', 'Reflect on ethical responsibilities'], estimatedTime: '3–4 hours' },
  { week: 14, title: 'Integrated Translation Workshop and Final Project', titleAr: 'ورشة ترجمة متكاملة والمشروع النهائي', objectives: ['Integrate political and economic translation skills', 'Complete an independent translation project', 'Present and justify translation decisions'], estimatedTime: '6–8 hours' }
];

const CASE_STUDIES = [
  {
    id: 'cs-pol-01',
    category: 'political',
    topic: 'Diplomatic Relations',
    difficulty: 'intermediate',
    englishHeadline: 'Regional Leaders Agree to Strengthen Bilateral Cooperation',
    arabicHeadline: 'قادة المنطقة يتفقون على تعزيز التعاون الثنائي',
    englishPublisher: 'Instructor-created teaching text',
    arabicPublisher: 'Instructor-produced translation',
    englishDate: '2024-01-15',
    arabicDate: '2024-01-15',
    englishUrl: '',
    arabicUrl: '',
    relationship: 'instructor_produced',
    englishExcerpt: 'Foreign ministers from several neighboring countries met in the capital on Tuesday and agreed to strengthen bilateral cooperation in trade, security, and cultural exchange. In a joint statement, the ministers reaffirmed their commitment to peaceful dialogue and non-interference in internal affairs. They also called for renewed efforts to resolve outstanding regional disputes through mediation and confidence-building measures.',
    arabicExcerpt: 'التقى وزراء خارجية من عدة دول مجاورة في العاصمة يوم الثلاثاء واتفقوا على تعزيز التعاون الثنائي في مجالات التجارة والأمن والتبادل الثقافي. وفي بيان مشترك، أكد الوزراء مجدداً التزامهم بالحوار السلمي وعدم التدخل في الشؤون الداخلية. كما دعوا إلى تجديد الجهود لحل النزاعات الإقليمية العالقة من خلال الوساطة وإجراءات بناء الثقة.',
    terminologyNotes: ['bilateral cooperation → التعاون الثنائي', 'non-interference → عدم التدخل', 'confidence-building measures → إجراءات بناء الثقة', 'mediation → الوساطة'],
    strategyAnnotations: [
      { strategy: 'Literal / Communicative', explanation: 'Standard diplomatic phrasing retained with natural Arabic journalistic style.', en: 'strengthen bilateral cooperation', ar: 'تعزيز التعاون الثنائي' },
      { strategy: 'Explicitation', explanation: 'Added "مجالات" for clarity in Arabic.', en: 'in trade, security, and cultural exchange', ar: 'في مجالات التجارة والأمن والتبادل الثقافي' }
    ],
    criticalAnalysis: 'The translation preserves the formal diplomatic register. Key terms are rendered with established Arabic equivalents. The structure follows Arabic news convention of placing the action early. No ideological shift is introduced; attribution remains collective ("the ministers").',
    discussionQuestions: [
      'Why is "bilateral" rendered as "ثنائي" rather than a longer paraphrase?',
      'How does the Arabic version handle the list of cooperation areas?',
      'Does the translation maintain the neutral tone of the original?'
    ],
    instructorCommentary: 'This is an instructor-produced pair designed to illustrate core diplomatic terminology and register. It is not a published translation pair.'
  },
  {
    id: 'cs-pol-02',
    category: 'political',
    topic: 'Elections',
    difficulty: 'intermediate',
    englishHeadline: 'Opposition Wins Narrow Majority in Parliamentary Elections',
    arabicHeadline: 'المعارضة تحصد أغلبية ضئيلة في الانتخابات البرلمانية',
    englishPublisher: 'Instructor-created teaching text',
    arabicPublisher: 'Instructor-produced translation',
    englishDate: '2024-03-20',
    arabicDate: '2024-03-20',
    englishUrl: '',
    arabicUrl: '',
    relationship: 'instructor_produced',
    englishExcerpt: 'The main opposition alliance secured a narrow parliamentary majority after final results were announced late Wednesday. With 52 percent of seats, the alliance is expected to form a coalition government within the next two weeks. Voter turnout reached 67 percent, the highest in a decade. The outgoing prime minister congratulated the winners and pledged a smooth transfer of power.',
    arabicExcerpt: 'حصد التحالف المعارض الرئيسي أغلبية برلمانية ضئيلة بعد إعلان النتائج النهائية في وقت متأخر من مساء الأربعاء. وبحصوله على 52 في المئة من المقاعد، يُتوقع أن يشكل التحالف حكومة ائتلافية خلال الأسبوعين المقبلين. وبلغت نسبة مشاركة الناخبين 67 في المئة، وهي الأعلى منذ عقد. وهنأ رئيس الوزراء المنتهية ولايته الفائزين وتعهد بنقل سلس للسلطة.',
    terminologyNotes: ['parliamentary majority → أغلبية برلمانية', 'coalition government → حكومة ائتلافية', 'voter turnout → نسبة مشاركة الناخبين', 'transfer of power → نقل السلطة'],
    strategyAnnotations: [
      { strategy: 'Modulation', explanation: '"Wins" rendered as "تحصد" (harvests/secures) – common in Arabic political journalism.', en: 'wins', ar: 'تحصد' },
      { strategy: 'Transposition', explanation: 'Noun phrase restructured for natural Arabic flow.', en: 'a smooth transfer of power', ar: 'نقل سلس للسلطة' }
    ],
    criticalAnalysis: 'The translation uses idiomatic Arabic political journalistic style. "Narrow majority" becomes "أغلبية ضئيلة" which conveys the slim margin. Numerical information is preserved exactly. The tone remains factual.',
    discussionQuestions: [
      'Is "تحصد" an appropriate modulation for "wins" in this context?',
      'How is the percentage expressed in Arabic news style?',
      'What alternative headlines would be acceptable?'
    ],
    instructorCommentary: 'Instructor-produced example focusing on election terminology and numerical precision.'
  },
  {
    id: 'cs-eco-01',
    category: 'economic',
    topic: 'Monetary Policy',
    difficulty: 'intermediate',
    englishHeadline: 'Central Bank Raises Interest Rate by 25 Basis Points to Curb Inflation',
    arabicHeadline: 'البنك المركزي يرفع سعر الفائدة 25 نقطة أساس لكبح التضخم',
    englishPublisher: 'Instructor-created teaching text',
    arabicPublisher: 'Instructor-produced translation',
    englishDate: '2024-06-12',
    arabicDate: '2024-06-12',
    englishUrl: '',
    arabicUrl: '',
    relationship: 'instructor_produced',
    englishExcerpt: 'The central bank raised its key interest rate by 25 basis points on Thursday, bringing it to 5.75 percent, in a move aimed at curbing persistent inflation. Annual inflation stood at 4.8 percent in May, above the bank’s 2 percent target. In a statement, the monetary policy committee said further tightening remained possible if price pressures continued. Markets had widely anticipated the decision.',
    arabicExcerpt: 'رفع البنك المركزي سعر فائدته الرئيسي بمقدار 25 نقطة أساس يوم الخميس، ليصل إلى 5.75 في المئة، في خطوة تهدف إلى كبح التضخم المستمر. وبلغ التضخم السنوي 4.8 في المئة في أيار/مايو، فوق هدف البنك البالغ 2 في المئة. وفي بيان، قالت لجنة السياسة النقدية إن مزيداً من التشديد يظل ممكناً إذا استمرت ضغوط الأسعار. وكانت الأسواق قد توقعت القرار على نطاق واسع.',
    terminologyNotes: ['basis points → نقطة أساس', 'key interest rate → سعر الفائدة الرئيسي', 'curb inflation → كبح التضخم', 'monetary policy committee → لجنة السياسة النقدية', 'tightening → تشديد'],
    strategyAnnotations: [
      { strategy: 'Literal + Established Equivalent', explanation: 'Basis point is always "نقطة أساس"; never omit or approximate.', en: '25 basis points', ar: '25 نقطة أساس' },
      { strategy: 'Explicitation', explanation: 'Month name given in dual form common in Arabic news.', en: 'May', ar: 'أيار/مايو' }
    ],
    criticalAnalysis: 'Numerical precision is critical. The translation preserves exact figures and the conditional modality ("remained possible"). Journalistic Arabic prefers "في المئة" over the symbol in formal news. The causal link is clear.',
    discussionQuestions: [
      'Why must "basis points" never be translated simply as "points"?',
      'How does Arabic news typically render month names?',
      'Does the translation preserve the degree of certainty in the committee’s statement?'
    ],
    instructorCommentary: 'Instructor-produced model focusing on monetary-policy terminology and numerical accuracy. No published source is claimed.'
  },
  {
    id: 'cs-eco-02',
    category: 'economic',
    topic: 'Trade',
    difficulty: 'advanced',
    englishHeadline: 'Trade Deficit Widens as Imports Surge and Exports Slow',
    arabicHeadline: 'اتساع العجز التجاري مع ارتفاع الواردات وتباطؤ الصادرات',
    englishPublisher: 'Instructor-created teaching text',
    arabicPublisher: 'Instructor-produced translation',
    englishDate: '2024-09-05',
    arabicDate: '2024-09-05',
    englishUrl: '',
    arabicUrl: '',
    relationship: 'instructor_produced',
    englishExcerpt: 'The country’s trade deficit widened to $12.4 billion in the second quarter, up from $9.8 billion a year earlier, as imports of energy and capital goods surged while export growth slowed. Officials attributed the rise in imports to higher domestic demand and supply-chain normalization. The current-account deficit is now projected at 3.2 percent of GDP for the full year.',
    arabicExcerpt: 'اتسع العجز التجاري للبلاد إلى 12.4 مليار دولار في الربع الثاني، مرتفعاً من 9.8 مليار دولار قبل عام، مع ارتفاع واردات الطاقة والسلع الرأسمالية وتباطؤ نمو الصادرات. وعزا المسؤولون ارتفاع الواردات إلى زيادة الطلب المحلي وتطبيع سلاسل التوريد. ويُتوقع الآن أن يبلغ عجز الحساب الجاري 3.2 في المئة من الناتج المحلي الإجمالي للعام بأكمله.',
    terminologyNotes: ['trade deficit → العجز التجاري', 'current-account deficit → عجز الحساب الجاري', 'capital goods → السلع الرأسمالية', 'supply-chain → سلاسل التوريد', 'GDP → الناتج المحلي الإجمالي'],
    strategyAnnotations: [
      { strategy: 'Transposition', explanation: 'Verbal structure preferred in Arabic headline.', en: 'Trade Deficit Widens', ar: 'اتساع العجز التجاري' },
      { strategy: 'Established Equivalent', explanation: 'Standard Arabic economic terms used consistently.', en: 'current-account deficit', ar: 'عجز الحساب الجاري' }
    ],
    criticalAnalysis: 'All figures are preserved exactly. The causal relationship is maintained. Arabic economic journalism frequently uses verbal nouns in headlines for concision. The projection language ("is now projected") is rendered with appropriate modality.',
    discussionQuestions: [
      'How does the Arabic headline restructure the English information?',
      'Why is consistency in rendering "deficit" important across a text?',
      'What alternative would you propose for "supply-chain normalization"?'
    ],
    instructorCommentary: 'Instructor-produced advanced example emphasizing numerical fidelity and economic terminology.'
  },
  {
    id: 'cs-pol-03',
    category: 'political',
    topic: 'International Organizations',
    difficulty: 'beginner',
    englishHeadline: 'UN Security Council Adopts Resolution on Humanitarian Access',
    arabicHeadline: 'مجلس الأمن يتبنى قراراً بشأن الوصول الإنساني',
    englishPublisher: 'Instructor-created teaching text',
    arabicPublisher: 'Instructor-produced translation',
    englishDate: '2024-02-10',
    arabicDate: '2024-02-10',
    englishUrl: '',
    arabicUrl: '',
    relationship: 'instructor_produced',
    englishExcerpt: 'The United Nations Security Council on Friday adopted a resolution calling for immediate and unimpeded humanitarian access to conflict-affected areas. The resolution, which passed with 14 votes in favour and one abstention, urges all parties to protect civilians and facilitate the delivery of aid. The Secretary-General welcomed the decision and called for its full implementation.',
    arabicExcerpt: 'تبنى مجلس الأمن التابع للأمم المتحدة يوم الجمعة قراراً يدعو إلى وصول إنساني فوري ودون عوائق إلى المناطق المتضررة من النزاع. وقد مرّ القرار بـ14 صوتاً مؤيداً وامتناع واحد، ويحث جميع الأطراف على حماية المدنيين وتيسير إيصال المساعدات. ورحب الأمين العام بالقرار ودعا إلى تنفيذه الكامل.',
    terminologyNotes: ['Security Council → مجلس الأمن', 'resolution → قرار', 'humanitarian access → وصول إنساني', 'abstention → امتناع', 'Secretary-General → الأمين العام'],
    strategyAnnotations: [
      { strategy: 'Established Equivalent', explanation: 'UN terminology follows established Arabic usage.', en: 'unimpeded humanitarian access', ar: 'وصول إنساني فوري ودون عوائق' }
    ],
    criticalAnalysis: 'Core UN terminology is standardized. The vote tally is preserved. The translation maintains the formal institutional register.',
    discussionQuestions: ['How is the voting result expressed naturally in Arabic?', 'Why is "adopted" rendered as "تبنى"?'],
    instructorCommentary: 'Beginner-level instructor-produced text focusing on institutional terminology.'
  }
];

const EXERCISES = [
  {
    id: 'ex-pol-01',
    title: 'Diplomatic Statement Translation',
    titleAr: 'ترجمة بيان دبلوماسي',
    category: 'political',
    difficulty: 'beginner',
    objective: 'Translate a short diplomatic statement using accurate terminology and formal register.',
    sourceText: 'The Ministry of Foreign Affairs expresses its deep concern over the recent developments and calls on all parties to exercise restraint and return to the path of dialogue. The Ministry reaffirms its commitment to the principles of international law and the peaceful settlement of disputes.',
    context: 'Official statement style; formal, measured tone required.',
    instructions: 'Produce a professional Arabic version suitable for publication by an official news agency. Preserve modality and formality.',
    modelTranslation: 'تعرب وزارة الخارجية عن قلقها العميق إزاء التطورات الأخيرة وتدعو جميع الأطراف إلى ممارسة ضبط النفس والعودة إلى مسار الحوار. وتؤكد الوزارة مجدداً التزامها بمبادئ القانون الدولي والتسوية السلمية للنزاعات.',
    terminology: [{ en: 'deep concern', ar: 'قلق عميق' }, { en: 'exercise restraint', ar: 'ممارسة ضبط النفس' }, { en: 'peaceful settlement of disputes', ar: 'التسوية السلمية للنزاعات' }],
    difficulties: ['Maintaining formal register', 'Accurate rendering of "calls on"'],
    strategies: ['Communicative translation', 'Established diplomatic equivalents']
  },
  {
    id: 'ex-pol-02',
    title: 'Election Results Lead',
    titleAr: 'مقدمة نتائج انتخابات',
    category: 'political',
    difficulty: 'intermediate',
    objective: 'Translate an election lead while preserving numerical accuracy and journalistic structure.',
    sourceText: 'Preliminary results indicate that the ruling party has secured 48 percent of the vote, falling short of an absolute majority. Opposition parties, which together obtained 45 percent, have called for a recount in three contested districts. Final official results are expected within 72 hours.',
    context: 'News lead; concise, factual, immediate.',
    instructions: 'Translate into natural Arabic journalistic style. Keep all figures exact.',
    modelTranslation: 'تشير النتائج الأولية إلى أن الحزب الحاكم حصل على 48 في المئة من الأصوات، دون أن يحقق الأغلبية المطلقة. وقد دعت أحزاب المعارضة، التي حصلت مجتمعة على 45 في المئة، إلى إعادة فرز الأصوات في ثلاث دوائر متنازع عليها. ويُتوقع صدور النتائج الرسمية النهائية خلال 72 ساعة.',
    terminology: [{ en: 'absolute majority', ar: 'الأغلبية المطلقة' }, { en: 'recount', ar: 'إعادة فرز الأصوات' }, { en: 'contested districts', ar: 'دوائر متنازع عليها' }],
    difficulties: ['Percentage expression', 'Concision in Arabic'],
    strategies: ['Literal for numbers', 'Communicative for structure']
  },
  {
    id: 'ex-eco-01',
    title: 'Inflation Report Excerpt',
    titleAr: 'مقتطف من تقرير التضخم',
    category: 'economic',
    difficulty: 'intermediate',
    objective: 'Translate economic statistics with absolute numerical fidelity.',
    sourceText: 'Consumer prices rose 0.4 percent month-on-month in June, bringing the annual inflation rate to 3.6 percent. Core inflation, which excludes food and energy, stood at 3.1 percent. The central bank’s target remains 2 percent. Analysts expect a further 25-basis-point rate cut if the downward trend continues.',
    context: 'Economic data release; precision is non-negotiable.',
    instructions: 'Translate accurately. Distinguish "percent" and any rate changes carefully. Use standard Arabic economic terminology.',
    modelTranslation: 'ارتفعت أسعار المستهلك بنسبة 0.4 في المئة على أساس شهري في حزيران/يونيو، ليرتفع معدل التضخم السنوي إلى 3.6 في المئة. وبلغ التضخم الأساسي، الذي يستثني الغذاء والطاقة، 3.1 في المئة. ويظل هدف البنك المركزي عند 2 في المئة. ويتوقع المحللون خفضاً إضافياً لسعر الفائدة بمقدار 25 نقطة أساس إذا استمر الاتجاه الهبوطي.',
    terminology: [{ en: 'month-on-month', ar: 'على أساس شهري' }, { en: 'core inflation', ar: 'التضخم الأساسي' }, { en: 'basis-point', ar: 'نقطة أساس' }],
    difficulties: ['Percent vs percentage points', 'Month dual naming'],
    strategies: ['Literal for figures', 'Established equivalents']
  },
  {
    id: 'ex-eco-02',
    title: 'Trade and Investment Brief',
    titleAr: 'موجز التجارة والاستثمار',
    category: 'economic',
    difficulty: 'advanced',
    objective: 'Handle complex economic relationships and terminology.',
    sourceText: 'Foreign direct investment inflows increased by 18 percent year-on-year to $7.2 billion in the first half of the year, driven by investments in renewable energy and technology. However, the trade deficit widened to 4.1 percent of GDP as imports of capital goods rose sharply. The government aims to attract $15 billion in FDI over the next three years through a new incentive package.',
    context: 'Economic analysis brief.',
    instructions: 'Produce a fluent, accurate Arabic version suitable for a financial news outlet. Preserve all quantitative relationships.',
    modelTranslation: 'ارتفعت تدفقات الاستثمار الأجنبي المباشر بنسبة 18 في المئة على أساس سنوي لتصل إلى 7.2 مليار دولار في النصف الأول من العام، مدفوعة باستثمارات في الطاقة المتجددة والتكنولوجيا. غير أن العجز التجاري اتسع إلى 4.1 في المئة من الناتج المحلي الإجمالي مع ارتفاع حاد في واردات السلع الرأسمالية. وتهدف الحكومة إلى جذب 15 مليار دولار من الاستثمار الأجنبي المباشر خلال السنوات الثلاث المقبلة من خلال حزمة حوافز جديدة.',
    terminology: [{ en: 'foreign direct investment (FDI)', ar: 'الاستثمار الأجنبي المباشر' }, { en: 'year-on-year', ar: 'على أساس سنوي' }, { en: 'capital goods', ar: 'السلع الرأسمالية' }, { en: 'incentive package', ar: 'حزمة حوافز' }],
    difficulties: ['Causal links', 'Large numbers and percentages'],
    strategies: ['Communicative', 'Terminological consistency']
  },
  {
    id: 'ex-pol-03',
    title: 'Conflict Reporting Caution',
    titleAr: 'الحذر في تقارير النزاع',
    category: 'political',
    difficulty: 'advanced',
    objective: 'Practice attribution and neutral framing in sensitive reporting.',
    sourceText: 'According to local officials, at least 12 civilians were killed in overnight shelling. A military spokesperson said the strikes targeted "terrorist infrastructure" and denied civilian casualties. Independent verification of the claims has not been possible. Humanitarian organizations have called for an immediate ceasefire and the opening of safe corridors.',
    context: 'Conflict reporting; attribution and modality are critical.',
    instructions: 'Translate while carefully preserving all attribution and degrees of certainty. Do not introduce evaluative language not present in the source.',
    modelTranslation: 'وفقاً لمسؤولين محليين، قُتل ما لا يقل عن 12 مدنياً في قصف ليلي. وقال متحدث عسكري إن الضربات استهدفت "بنية تحتية إرهابية" ونفى وقوع ضحايا مدنيين. ولم يتسن التحقق المستقل من الادعاءات. ودعت منظمات إنسانية إلى وقف فوري لإطلاق النار وفتح ممرات آمنة.',
    terminology: [{ en: 'shelling', ar: 'قصف' }, { en: 'ceasefire', ar: 'وقف إطلاق النار' }, { en: 'safe corridors', ar: 'ممرات آمنة' }],
    difficulties: ['Preserving attribution', 'Quotation handling', 'Neutral modality'],
    strategies: ['Literal for attribution', 'Careful modulation']
  }
];

const GLOSSARY = [
  { id: 'g1', en: 'bilateral relations', ar: 'علاقات ثنائية', cat: 'diplomatic', defEn: 'Relations between two countries.', defAr: 'العلاقات بين دولتين.', exEn: 'They agreed to strengthen bilateral relations.', exAr: 'اتفقا على تعزيز العلاقات الثنائية.' },
  { id: 'g2', en: 'ceasefire', ar: 'وقف إطلاق النار', cat: 'political', defEn: 'Temporary suspension of fighting.', defAr: 'تعليق مؤقت للقتال.', exEn: 'A 72-hour ceasefire was agreed.', exAr: 'اتُفق على وقف إطلاق النار لمدة 72 ساعة.' },
  { id: 'g3', en: 'sanctions', ar: 'عقوبات', cat: 'diplomatic', defEn: 'Restrictive measures against a state.', defAr: 'تدابير تقييدية ضد دولة.', exEn: 'Economic sanctions were imposed.', exAr: 'فُرضت عقوبات اقتصادية.' },
  { id: 'g4', en: 'resolution', ar: 'قرار', cat: 'diplomatic', defEn: 'Formal decision of an official body.', defAr: 'قرار رسمي لهيئة رسمية.', exEn: 'The Council adopted a resolution.', exAr: 'تبنى المجلس قراراً.' },
  { id: 'g5', en: 'inflation', ar: 'تضخم', cat: 'economic', defEn: 'Sustained rise in general price level.', defAr: 'ارتفاع مستمر في المستوى العام للأسعار.', exEn: 'Inflation rose to 5.4%.', exAr: 'ارتفع التضخم إلى 5.4 في المئة.' },
  { id: 'g6', en: 'interest rate', ar: 'سعر الفائدة', cat: 'financial', defEn: 'Cost of borrowing money.', defAr: 'تكلفة اقتراض المال.', exEn: 'The bank raised the interest rate.', exAr: 'رفع البنك سعر الفائدة.' },
  { id: 'g7', en: 'basis point', ar: 'نقطة أساس', cat: 'financial', defEn: '0.01 percent.', defAr: '0.01 في المئة.', exEn: 'Rates rose 25 basis points.', exAr: 'ارتفعت الأسعار 25 نقطة أساس.' },
  { id: 'g8', en: 'GDP', ar: 'الناتج المحلي الإجمالي', cat: 'economic', defEn: 'Total value of goods and services produced.', defAr: 'إجمالي قيمة السلع والخدمات المنتجة.', exEn: 'GDP growth slowed.', exAr: 'تباطأ نمو الناتج المحلي الإجمالي.' },
  { id: 'g9', en: 'trade deficit', ar: 'عجز تجاري', cat: 'economic', defEn: 'Imports exceed exports.', defAr: 'الواردات تتجاوز الصادرات.', exEn: 'The trade deficit widened.', exAr: 'اتسع العجز التجاري.' },
  { id: 'g10', en: 'foreign direct investment', ar: 'الاستثمار الأجنبي المباشر', cat: 'economic', defEn: 'Investment in business interests in another country.', defAr: 'استثمار في مصالح تجارية في بلد آخر.', exEn: 'FDI inflows increased.', exAr: 'ارتفعت تدفقات الاستثمار الأجنبي المباشر.' },
  { id: 'g11', en: 'sovereignty', ar: 'سيادة', cat: 'diplomatic', defEn: 'Supreme authority within a territory.', defAr: 'السلطة العليا داخل إقليم.', exEn: 'Respect for sovereignty.', exAr: 'احترام السيادة.' },
  { id: 'g12', en: 'coalition government', ar: 'حكومة ائتلافية', cat: 'political', defEn: 'Government formed by multiple parties.', defAr: 'حكومة تتشكل من أحزاب متعددة.', exEn: 'A coalition government was formed.', exAr: 'تشكلت حكومة ائتلافية.' },
  { id: 'g13', en: 'percentage point', ar: 'نقطة مئوية', cat: 'economic', defEn: 'Arithmetic difference between percentages.', defAr: 'الفرق الحسابي بين نسب مئوية.', exEn: 'Rose by 2 percentage points.', exAr: 'ارتفع بمقدار نقطتين مئويتين.' },
  { id: 'g14', en: 'monetary policy', ar: 'السياسة النقدية', cat: 'financial', defEn: 'Central bank actions on money supply and rates.', defAr: 'إجراءات البنك المركزي بشأن عرض النقود والأسعار.', exEn: 'Monetary policy remained unchanged.', exAr: 'بقيت السياسة النقدية دون تغيير.' },
  { id: 'g15', en: 'humanitarian corridor', ar: 'ممر إنساني', cat: 'political', defEn: 'Safe passage for aid or civilians.', defAr: 'ممر آمن للمساعدات أو المدنيين.', exEn: 'A humanitarian corridor was opened.', exAr: 'فُتح ممر إنساني.' }
];

const QUIZZES = [
  {
    id: 'q1',
    question: 'What is the preferred Arabic equivalent for "basis point" in financial journalism?',
    options: ['نقطة', 'نقطة أساس', 'نقطة مئوية', 'وحدة'],
    correct: 1,
    explanation: '"نقطة أساس" is the established term for 0.01%. Using "نقطة" alone is incorrect and can cause serious misunderstanding.'
  },
  {
    id: 'q2',
    question: 'In conflict reporting, why is attribution especially important in translation?',
    options: ['To make the text longer', 'To avoid introducing or removing responsibility claims', 'To improve style only', 'It is not important'],
    correct: 1,
    explanation: 'Translators must preserve who said what and the degree of certainty to avoid introducing bias or factual distortion.'
  },
  {
    id: 'q3',
    question: 'How should "rose by 2 percentage points from 3% to 5%" be distinguished from "rose by 2 percent"?',
    options: ['They mean the same', 'Percentage points measure absolute difference; percent measures relative change', 'Only style differs', 'Arabic does not distinguish them'],
    correct: 1,
    explanation: 'This distinction is critical in economic translation. 2 percentage points from 3% is 5%; 2 percent of 3% is 3.06%.'
  },
  {
    id: 'q4',
    question: 'Which strategy best describes rendering "wins an election" as "تحصد" in Arabic political news?',
    options: ['Omission', 'Borrowing', 'Modulation', 'Calque'],
    correct: 2,
    explanation: 'Modulation changes the point of view or figurative expression while preserving meaning; "تحصد" is a conventional metaphorical choice in Arabic journalism.'
  },
  {
    id: 'q5',
    question: 'What is the standard Arabic term for "foreign direct investment"?',
    options: ['استثمار أجنبي', 'الاستثمار الأجنبي المباشر', 'رأس مال أجنبي', 'تمويل خارجي'],
    correct: 1,
    explanation: 'The full established term is "الاستثمار الأجنبي المباشر" (FDI).'
  }
];

const HEADLINES = [
  { en: 'Central Bank Holds Rates Steady Amid Inflation Concerns', ar: 'البنك المركزي يبقي أسعار الفائدة ثابتة وسط مخاوف التضخم', note: 'Verbal structure preferred in Arabic.' },
  { en: 'Opposition Calls for Early Elections After Corruption Scandal', ar: 'المعارضة تدعو إلى انتخابات مبكرة بعد فضيحة فساد', note: 'Keep agency clear.' },
  { en: 'Trade Deal Talks Resume After Six-Month Stalemate', ar: 'استئناف محادثات الاتفاق التجاري بعد جمود استمر ستة أشهر', note: 'Nominalization common in Arabic headlines.' },
  { en: 'UN Urges Immediate Ceasefire in Conflict Zone', ar: 'الأمم المتحدة تدعو إلى وقف فوري لإطلاق النار في منطقة النزاع', note: 'Institutional subject first.' },
  { en: 'Unemployment Falls to Lowest Level in a Decade', ar: 'البطالة تنخفض إلى أدنى مستوى منذ عقد', note: 'Concise numerical claim.' }
];
