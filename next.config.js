const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        url: "https://data.greensnz.com",
        SITE_URL: "http://localhost:3000"
      },
      reactStrictMode: true,
      images: {
        domains: ['data.greensnz.com']
      }
    }
  }

  return {
    env: {
      url: "https://data.greensnz.com",
      SITE_URL: "https://greensnz.com"
    },
    reactStrictMode: true,
    images: {
      domains: ['data.greensnz.com']
    },

  }

}