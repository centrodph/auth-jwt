const Signup = require('../controllers/signup');
const Signin = require('../controllers/signin');
const passportConfig = require('../services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireAuthLocal = passport.authenticate('local', { session: false });
module.exports = function(app) {
  /**
   * @api {get} / Home Page
   * @apiGroup Home
   *
   *
   * @apiSuccess {String} apiUrl URL API DOCUMENTATION.
   */
  app.get('/', function(req, res) {
    res.send({ apiUrl: '/apidoc' });
  });
  /**
   * @api {get} /apidoc Api DOCS
   * @apiGroup Home
   *
   *
   * @apiSuccess {Html}  URL API DOCUMENTATION.
   */
  app.get('/apidoc', function(req, res) {
    res.sendFile(express.static(__dirname + '/apidoc'));
  });

  /**
   * @api {get} /secret Secret resource!
   * @apiGroup User
   *
   * @apiHeader {String} authorization Authorization value.
   *
   * @apiSuccess {String} message Message for the user.
   * @apiSuccess {String} lastname  Lastname of the User.
   */
  app.get('/secret', requireAuth, function(req, res) {
    res.send({ message: 'message', lastname: req.user });
  });

  /**
   * @api {post} /signin Signin
   * @apiName Signin
   * @apiGroup User
   *
   * @apiParam {String} email Users unique email.
   * @apiParam {String} password Users password.
   *
   * @apiSuccess {String} token JWT Token.
   */
  app.post('/signin', requireAuthLocal, Signin);

  /**
   * @api {post} /signup Signup
   * @apiName Signup
   * @apiGroup User
   *
   * @apiParam {String} email Users unique email.
   * @apiParam {String} password Users password.
   *
   * @apiSuccess {String} token JWT Token.
   */
  app.post('/signup', Signup);
};
