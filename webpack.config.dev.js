import path from 'path';
import webpack from 'webpack';

export default {
    devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include:[
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared'),
                ],
                loaders: ["react-hot-loader/webpack",'babel'],
            },
            {
              test: /\.css?$/,
              loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
            },
        ]
    },
    devtool: 'source-map',
    resolve: {
        extentions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
  },
}
