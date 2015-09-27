module.exports = {
  development: {
    isProduction: false,
    apiPort: 5050,
    db_url: 'mongodb://localhost/gsd-dev',
  },
  production: {
    isProduction: true,
    apiPort: 5050,
    db_url: 'mongodb://localhost/gsd',
  }
}[process.env.NODE_ENV || 'development'];
