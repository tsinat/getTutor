import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import morgan from 'morgan';
import mongoose from 'mongoose';

import router from './routes/router';

const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/mentor';

mongoose.connect(MONGOURL, err => {
    console.log(err || `MongoDb connected to ${MONGOURL}`);
})

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';

// import users from './routes/users';

let app = express();

app.use(bodyParser.json());

// app.use('/api/users', users);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost://3000'))
