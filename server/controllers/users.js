import User from '../models/user';

export function getAll(req, res, next) {
    console.log('wow it works');
    User.find({}, (err, users) => {
        if(err) {
            return next(err);
        }
        res.send(users)
    });
}
