import User from '../models/user';

export function update(req, res, next) {
    const newData = req.body;
    const currentUser = req.body.currentUser;
    console.log('newData in server:', currentUser);
    User.findOneAndUpdate({email: currentUser}, newData, { new: true},  (err, user) => {
        if(err) {
            return next(err);
        }
        res.send(user);
    });
}
