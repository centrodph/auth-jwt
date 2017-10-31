const Signup = require('../controllers/signup');
const passportConfig = require('../services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function(app) {
  //Home Public
  app.get('/', function(req, res) {
    res.send({ hello: 'word' });
  });

  //Require TOKEN
  app.get('/secret', requireAuth, function(req, res) {
    res.send({ private: 'message' });
  });

  //SIGNUP
  app.post('/signup', Signup);
};
