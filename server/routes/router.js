import express from 'express';
import { signup, signin } from '../controllers/authentication';
import passportService from '../services/passport';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false});
let router = express.Router();

router.get('/profile', requireAuth, (req, res) => {
    res.send(req.user);
});
router.post('/signin', requireSignin,  signin);
router.post('/signup', signup);

export { router };
