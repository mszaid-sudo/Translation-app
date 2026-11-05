const Storage = {
  key: 'jtl_progress_v1',
  get() {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || {
        completedLessons: [],
        completedExercises: [],
        quizScores: {},
        favorites: [],
        savedTranslations: {},
        lastVisited: '',
        lang: 'en',
        darkMode: false
      };
    } catch { return { completedLessons: [], completedExercises: [], quizScores: {}, favorites: [], savedTranslations: {}, lastVisited: '', lang: 'en', darkMode: false }; }
  },
  set(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },
  update(partial) {
    const current = this.get();
    this.set({ ...current, ...partial });
  },
  saveTranslation(id, text) {
    const p = this.get();
    p.savedTranslations[id] = text;
    this.set(p);
  },
  toggleFavorite(id) {
    const p = this.get();
    if (p.favorites.includes(id)) p.favorites = p.favorites.filter(x => x !== id);
    else p.favorites.push(id);
    this.set(p);
    return p.favorites.includes(id);
  },
  markComplete(type, id) {
    const p = this.get();
    if (type === 'lesson' && !p.completedLessons.includes(id)) p.completedLessons.push(id);
    if (type === 'exercise' && !p.completedExercises.includes(id)) p.completedExercises.push(id);
    this.set(p);
  },
  export() {
    return JSON.stringify(this.get(), null, 2);
  },
  import(json) {
    try {
      const data = JSON.parse(json);
      this.set(data);
      return true;
    } catch { return false; }
  },
  reset() {
    localStorage.removeItem(this.key);
  }
};
