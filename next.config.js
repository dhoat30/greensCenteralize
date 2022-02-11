const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        url: "http://data.greensrobotics.co.nz"
      },
      reactStrictMode: true,
      images: {
        domains: ['data.greensrobotics.co.nz']
      }
    }
  }
  return {
    env: {
      url: "http://data.greensrobotics.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['data.greensrobotics.co.nz']
    }
  }
}
