import jwt from 'jwt-simple';

import User from '../models/user';
import { SECRET } from '../config';

export function signup(req, res, next){
    console.log('YEAHH', req.body);
    const email = req.body.email;
    const password = req.body.password;
    const addUser = req.body;

    if(!email || !password) {
        res.status(400).send({error: 'you must provide email and password'});
    }
    User.findOne({email: email}, (err, user) => {
        if(err) {
            return next(err);
        }
        if(user) {
            return res.status(400).send({ error: 'A user with the same email already exist'});
        }
        let newUser = new User(addUser);
        newUser.save((err) => {
            if(err){
                return next(err);
            }
            res.send({token: generateToken(newUser)});
        });
    });
}

export function signin(req, res, next) {
    res.send({ token: generateToken(req.user)});
}

function generateToken(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({_id: user.id, iat: timestamp }, SECRET);
}
