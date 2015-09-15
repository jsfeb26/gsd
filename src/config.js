module.exports = {
  development: {
    isProduction: false,
    port: 5000,
    apiPort: 5050,
    db_url: 'mongodb://localhost/gsd-dev',
    app: {
      name: 'GSD Application Development'
    }
  },
  production: {
    isProduction: true,
    port: process.env.PORT,
    apiPort: 5050,
    db_url: 'mongodb://localhost/gsd',
    app: {
      name: 'GSD Application'
    }
  },
  test: {
    url: 'mongodb://localhost/gsd-test'
  },
}[process.env.NODE_ENV || 'development'];
