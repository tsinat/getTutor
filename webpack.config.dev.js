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
                    path.join(__dirname, 'server/shared')
                ],
                loaders: ["react-hot-loader/webpack",'babel'],
            },
           {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
           {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
           {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
           {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
           {
               test: /\.(jpe?g|png|gif|svg)$/i,
               loaders: [
                   'file?hash=sha512&digest=hex&name=[hash].[ext]',
                   'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
               ]
           },
           {
               test: /\.json$/,
               loader: 'json-loader'
           }
        ]
    },
    resolve: {
        extentions: ['', '.js', '.jsx']
    }
}
