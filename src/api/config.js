module.exports = {
  development: {
    isProduction: false,
    apiPort: 5050,
  },
  production: {
    isProduction: true,
    apiPort: 5050,
  }
}[process.env.NODE_ENV || 'development'];
