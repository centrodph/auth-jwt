const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('../config/keys');
const UserModel = require('../models/user');

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
