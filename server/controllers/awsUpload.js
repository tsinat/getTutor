
import express from 'express';
import uuid from 'uuid';
import AWS from 'aws-sdk'

let User = require('../models/user');

let s3 = new AWS.S3();
let bucketName = process.env.AWS_BUCKET;
let urlBase = process.env.AWS_URL_BASE;

export function uploadImage(req, res, next) {
    let file = req.file;
    let id = req.params.id
    if (!file.mimetype.match(/image/)) {
      return cb({
          error: 'File must be image.'
      });
  }

  let filenameParts = file.originalname.split('.');

  let ext;
  if (filenameParts.length > 1) {
      ext = '.' + filenameParts.pop();
  } else {
      ext = '';
  }

  let key = uuid() + `${ext}`;
  let params = {
      Bucket: bucketName,
      Key: key,
      ACL: 'public-read',
      Body: file.buffer
  };

  s3.putObject(params, (err, result) => {
      if (err) return cb(err);

      let imgUrl = `${urlBase}${bucketName}/${key}`;
      let passedObj = {
          image: imgUrl
      }
      User.findByIdAndUpdate(id, { $set: passedObj}, (err, updatedUser) => {
          if (err) cb(err);
          updatedUser.save((err, savedUser) => {
              if (err) cb(err);
              cb(null, savedUser);
          });
      });
  });
}
