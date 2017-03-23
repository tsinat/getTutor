import User from '../models/user';

export function getAll(req, res, next) {
    User.find({})
        // .where('status').equals("Mentor")
        .limit(20)
        .exec((err, users) => {
        if (err) {
            return next(err);
        }
        res.send(users)
    });
}

export function getSingleUser(req, res, next) {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return next(err);
        }
        res.send(user);
    });
}

export function getCategoryUsers(req, res, next) {
    const phrase = req.params.category;
    User.find({})
        .where('category').equals(phrase)
        .exec((err, user) => {
            console.log("user:", user);
        if (err) {
            return next(err);
        }
        res.send(user);
    });
}
