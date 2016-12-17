import express from 'express';
import multer from 'multer';

import { signup, signin } from '../controllers/authentication';
import { update } from '../controllers/profile';
import { uploadImage } from '../controllers/awsUpload';
import passportService from '../services/passport';
import passport from 'passport';

let upload = multer({storage: multer.memoryStorage()});

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false});
let router = express.Router();

router.post('/signin', requireSignin,  signin);
router.post('/signup', signup);
router.get('/profile', requireAuth, (req, res) => {
    res.send(req.user);
});
router.post('/update', update);
router.put('/profile/image/:id',  upload.single('newFile'), uploadImage)

export { router };
