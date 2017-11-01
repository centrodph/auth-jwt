const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//OWN CONFIG
const config = require('../config/keys');
const UserModel = require('../models/user');

//Local
const localOptions = {
  usernameField: 'email'
};
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  UserModel.findOne({ email: email }, (err, user) => {
    //return error without user
    if (err) return done(err, false);

    if (!user) return done(null, false);
    //comparePassword
    user.comparePassword(password, (err, match) => {
      if (err) return done(err, false);

      if (!match) return done(null, false);

      return done(null, user);
    });
  });
});

//JWT OPTIONS
const jwtOptions = {
  //obtiene del header con la key 'authorization'
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};
//JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  UserModel.findOne({ _id: payload.sub }, (err, user) => {
    //return error without user
    if (err) return done(err, false);

    //return not error and not user
    if (!user) return done(null, false);

    //return not error and user
    return done(null, user);
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
