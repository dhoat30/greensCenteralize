const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        url: "https://data.greensnz.com"
      },
      reactStrictMode: true,
      images: {
        domains: ['data.greensnz.com']
      }
    }
  }
  return {
    env: {
      url: "https://data.greensnz.com"
    },
    reactStrictMode: true,
    images: {
      domains: ['data.greensnz.com']
    }
  }
}
