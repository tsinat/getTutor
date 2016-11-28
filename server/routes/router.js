import express from 'express';
import { signup, signin } from '../controllers/authentication';
import passportService from '../services/passport';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false});

export default function(app) {
    console.log('backend called');
    app.get('/profile', requireAuth, (req, res) => {
        console.log(req.user);
        res.send(req.user);
    });
    app.post('/signin', requireSignin,  signin);
    app.post('/signup', signup);
}
