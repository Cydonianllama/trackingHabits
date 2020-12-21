const path = require('path')

module.exports = {
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
    },
    entry : './index.js',
    module : {
        rules : 
        [
            {
                test : /\.js$/,
                use  : ['babel-loader']
            },
        ],
      },
    devServer : {
        contentBase : path.resolve(__dirname,'dist'),
        historyApiFallback : true,
        port : 5000
    }
}