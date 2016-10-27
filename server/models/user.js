import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true , lowercase: true },
    password: String
});

userSchema.pre('save', function(next) {
    const user = this;
    console.log('user',user);
    bcrypt.genSalt(10, (err, salt) => {
        if(err) { return next(err); }
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if(err) { return next(err); }

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, (err, isMatched) => {
        if(err) { return cb(err); }

        cb(null, isMatched);
    });
}

const User = mongoose.model('User', userSchema);

export default User;
