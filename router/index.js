const Signup = require('../controllers/signup');
const Signin = require('../controllers/signin');
const passportConfig = require('../services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireAuthLocal = passport.authenticate('local', { session: false });
module.exports = function(app) {
  //Home Public
  app.get('/', function(req, res) {
    res.send({
      api: {
        '/secret': 'requireAuth TOKEN',
        '/signin': 'requireAuthLocal email and password',
        '/signup': 'create a user with email and password'
      }
    });
  });

  //Require TOKEN
  app.get('/secret', requireAuth, function(req, res) {
    res.send({ private: 'message' });
  });

  //Require email & pass
  app.post('/signin', requireAuthLocal, Signin);

  //SIGNUP
  app.post('/signup', Signup);
};
