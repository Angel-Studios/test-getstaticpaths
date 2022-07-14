const publicLocales = ['en']
const beta = ['pt']
const alpha = ['es', 'de', 'fr']

const display = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
}

module.exports = {
  public: publicLocales,
  beta,
  alpha,
  all: [...new Set([...publicLocales, ...beta, ...alpha])],
  display,
}
