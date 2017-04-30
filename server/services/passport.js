import passport from 'passport';
import { Strategy, ExtractJwt }  from 'passport-jwt';
import LocalStrategy from 'passport-local';

import { SECRET } from '../config';
import User from '../models/user';

const localLogin = new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
    User.findOne({ email: email}, (err, user) => {
        if(err) { return done(err); }
        if(!user) { return done(null, false); }
        user.comparePassword(password, (err, isMatched) => {
            if(err) { return done(err); }
            if(!isMatched) { return done(null, false); }

            return done(null, user);
        });

    });
});

// setup options
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: SECRET
};

//creat JWT Strategy
const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
    User.findById(payload._id, (err, user) => {
        if(err) { return done(err, false); }

        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use(jwtLogin);
passport.use(localLogin);
