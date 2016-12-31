import express from 'express';
import uuid from 'uuid';
import AWS from 'aws-sdk';
import dotenv from 'dotenv'
dotenv.config();

import User from '../models/user';

let s3 = new AWS.S3();
let bucketName = process.env.AWS_BUCKET;
let urlBase = process.env.AWS_URL_BASE;

export function uploadImage(req, res, next) {
    console.log('file:', req.body);
    let file = req.body;
    let id = req.params.id

    if (!file.filetype.match(/image/)) {
        return res.status(401).send({error: 'file must be image type'});
    }

    let filenameParts = file.filename.split('.');

    let ext;
    if (filenameParts.length > 1) {
        ext = '.' + filenameParts.pop();
    } else {
        ext = '';
    }

    let key = uuid() + `${ext}`;
    let buf = new Buffer(file.data_uri.replace(/^data:image\/\w+;base64,/, ""), 'base64');

    let params = {
        Bucket: bucketName,
        Key: key,
        ACL: 'public-read',
        Body: buf
    };
    console.log('params:', params);
    s3.putObject(params, (err, result) => {
        if (err)
            return res.status(402).send(err);

        let imgUrl = `${urlBase}${bucketName}/${key}`;
        let passedObj = {
            image: imgUrl
        }
        console.log('id', id);
        User.findByIdAndUpdate(id, passedObj, {
            new: true
        }, (err, updatedUser) => {
            console.log('updatedUser:', updatedUser);
            if (err) {
                return next({error: 'error while updating url in db'});
            }

            res.send(updatedUser);
            //   });
        });
    });
}
