const localeSupport = require('./src/constants/locales')
const path = require('path')

module.exports = {
  i18n: {
    defaultNS: 'common',
    defaultLocale: 'en',
    locales: localeSupport.all,
    returnEmptyString: false,
    localePath: path.resolve('./public/locales'),
  },
}
