if (process.env.NODE_ENV == 'production') {
  module.exports = {
    mongoURI: process.env.MONGO_URI,
    secret: process.env.SECRET_TOKEN
  };
} else {
  module.exports = require('./dev');
}
