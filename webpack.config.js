var path = require('path')
var webpack = require('webpack')
// var HappyPack = require('happypack')
// var BundleTracker = require('webpack-bundle-tracker')
var path = require('path')
// var ExtractTextPlugin = require("extract-text-webpack-plugin")
var polyfill = require("babel-polyfill")
function _path(p) {
  return path.join(__dirname, p);
}
module.exports = {
    
    context: __dirname,
    entry: {
        app: './assets/index',
        // vendor: Object.keys(require('./package.json').dependencies)
    }, 
    
    output: {
    	publicPath: '/static/bundles/',
        path: path.resolve('./static/bundles/'), 
        filename: '[name].js'
    },
    devtool: 'inline-eval-cheap-source-map',
    
    // plugins: [
    //     new HappyPack({
    //         threads: 4,
    //         loaders: [ 'babel-loader' ],
    //     }),
       
    // ],
    
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                include: path.resolve(__dirname, './assets/'),
                exclude: /node_modules/, 
                loader: 'babel-loader',
                
            },
        ]
    },
    
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [ path.resolve(__dirname, 'node_modules')]
    }   
}