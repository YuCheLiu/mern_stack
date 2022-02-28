const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    mode:"development",
    entry:path.resolve(__dirname,'src/app/App.jsx'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer:{
        static:'./dist',
        historyApiFallback: true
    },
    module:{
        rules:[{
            test: /\.jsx?/,
            loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/app/index.html'
        })
      ]
}

