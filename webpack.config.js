var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: ['babel-polyfill','./src/main.js', './src/styles/style.js'],
    output: {
        path: './dist',
        filename: 'js/index.js',
    },
    plugins:[
        new ExtractTextPlugin({
            filename: 'css/index.css',
            allChunks: true
        })
        ],
    devtool: 'source-map',
    module: {
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets:['es2015']
                }
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets:['es2015', 'react']
                }
            },
            {
                test: /.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: 'css-loader!less-loader'
                    
                })
            }
        ]
    }
    
}