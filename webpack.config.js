const path = require('path')

module.exports = {
    mode: 'development',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
    },
    entry : './client/app.js',
    module : {
        rules : 
        [
            {
                test : /\.js$/,
                use  : ['babel-loader']
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                use : {
                    loader : 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }
        ],
      },
    devServer : {
        contentBase : path.resolve(__dirname,'dist'),
        historyApiFallback : true,
        port: 5000, 
        historyApiFallback: {
            index: 'webpack.html'
        }
        
    }
}