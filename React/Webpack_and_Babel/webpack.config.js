const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    //use development mode 
    mode:"development",
    //use path to resolve the App.jsx
    entry:path.resolve(__dirname,'src/app/App.jsx'),
    output:{
        //complete output rules, please define path and filename 
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer:{
        static:'./dist',
        historyApiFallback: true // 404s will fallback to '/index.html'
    },
    module:{
        rules:[{
            //complete the rule to compile .jsx file using babel-loader.
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

