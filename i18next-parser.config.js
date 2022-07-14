// eslint-disable-next-line @typescript-eslint/no-var-requires
const localeSupport = require('./src/constants/locales')

module.exports = {
  createOldCatalogs: false,
  locales: localeSupport.all,
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  lexers: {
    js: ['JsxLexer'],
  },
  input: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}', '!src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  sort: true,
  i18nextOptions: {
    compatibilityJSON: 'v3',
  },
  failOnWarnings: true,
  defaultNamespace: 'common',
  skipDefaultValues: (locale) => {
    if (locale !== 'en') return true
  },
}
