// next.config.js

module.exports = {
    exportTrailingSlash: true,
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' },
      }
    },
    output: 'out'
  }