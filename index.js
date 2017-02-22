//////////////////////////////////////////////////////////////
///////    Entry of the main app              ///////////////
/////////////////////////////////////////////////////////////
import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.config.dev.js';
import { router } from './server/routes/router';

const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/mentor';

mongoose.connect(MONGOURL, err => {
    console.log(err || `MongoDb connected to ${MONGOURL}`);
});

const app = express();
const compiler = webpack(webpackConfig);
const PORT = process.env.PORT || 3000;

app.use(webpackMiddleware(compiler, {
    hot: true,
    historyApiFallback: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));

app.use(webpackHotMiddleware(compiler));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});


const server = http.createServer(app);

server.listen(PORT, () => console.log(`Running on localhost://${PORT}`))
