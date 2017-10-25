const Signup = require('../controllers/signup');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.send({ hello: 'word' });
  });
  app.post('/signup', Signup);
};
