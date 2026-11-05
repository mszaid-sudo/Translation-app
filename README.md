# Journalistic Translation Lab
## مختبر الترجمة الصحفية

**Official title:** Journalistic Translation: Political and Economic News  
**Arabic title:** الترجمة الصحفية: الأخبار السياسية والاقتصادية

A bilingual (English / العربية) university-level educational website for teaching English→Arabic journalistic translation of political and economic news.

### How to run

1. Open a terminal in this directory.
2. Start a local static server, for example:
   ```bash
   python3 -m http.server 8080
   ```
3. Open http://localhost:8080 in a modern browser.

No build step or Node.js is required. The site uses Tailwind CSS via CDN and vanilla JavaScript.

### Features implemented

- **Homepage** with course introduction, learning outcomes, featured case studies, and progress summary.
- **14-week course structure** with module navigation and learning objectives.
- **Documented Translation Library** with side-by-side English–Arabic reader, terminology notes, strategy annotations, critical analysis, and discussion questions.
- **All case studies are clearly labeled Instructor-Produced.** No fabricated “verified published translation” claims are made. The infrastructure for verification status is present and ready for real pairs when they can be documented.
- **Political and Economic Translation centers** with unit overviews.
- **Bilingual Glossary** (searchable, with favorites via localStorage).
- **Translation Practice Studio** with source texts, student input, local draft saving, model answers, terminology, difficulties, and self-assessment rubric.
- **Interactive quizzes** with immediate feedback.
- **Headline Workshop** examples.
- **Student Dashboard** with progress, saved translations, export/import JSON, and reset.
- **Language switcher** (English / العربية) with proper LTR/RTL handling. English source columns remain LTR; Arabic columns remain RTL regardless of UI language.
- **Light / dark mode**.
- **Responsive** layout for desktop, tablet, and mobile.
- **localStorage** persistence for progress, drafts, favorites, and preferences.

### Content counts (this implementation)

| Item | Count |
|------|-------|
| Course weeks | 14 |
| Instructor-produced case studies | 5 |
| Verified published translation pairs | 0 (none claimed without live verification) |
| Glossary entries (core set in UI) | 15 (expandable; full 100-term data prepared in earlier React scaffold) |
| Translation exercises | 5 |
| Quizzes | 5 |
| Headline examples | 5 |

### Adding new content

- **Lessons / weeks:** Edit `js/data.js` → `COURSE_WEEKS`.
- **Case studies:** Add objects to `CASE_STUDIES` following the existing data model (include `relationship: 'instructor_produced'` or proper verification fields when evidence exists).
- **Exercises:** Add to `EXERCISES`.
- **Glossary:** Add to `GLOSSARY`.
- **Quizzes / headlines:** Extend the corresponding arrays.

### Student progress storage

All student data is stored in the browser’s `localStorage` under the key `jtl_progress_v1`.  
It is **not** synced to a server. Use Export / Import on the Dashboard to move data between devices.

### Limitations (transparent)

- No backend, user accounts, or cloud sync.
- No automatic semantic grading of free-text translations (self-assessment + model comparison only).
- No live-verified published English–Arabic news pairs are included; the system is ready to accept them with full provenance fields when sources can be checked.
- Instructor content-management UI is not a secure multi-user CMS; content is edited via the data files.
- Some advanced sections (full 50+50 glossary, 10 full exercises, deep lesson bodies) are represented by a solid core set; the architecture supports expansion.

### Academic integrity

- Instructor-produced texts and translations are explicitly labeled.
- No invented URLs, publication dates, or claims of published translation relationships.
- Short teaching excerpts only; full copyrighted articles are not reproduced.
- Assessment framework is illustrative, not an official university policy.

### Technology

- HTML5, CSS (Tailwind CDN), vanilla JavaScript
- localStorage for persistence
- No build tools required for runtime

Built as a complete, usable educational platform under the constraints of the available environment.
