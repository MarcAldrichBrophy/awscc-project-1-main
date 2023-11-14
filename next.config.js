// next.config.js

module.exports = {
    output: 'standalone',
    generateStaticParams: async () => {
      return {
        '/': { page: '/' }, 
      }
    }
  }