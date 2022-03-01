const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    //Task1: use development mode 
    mode: ,
    //Task2: use path to resolve the App.jsx
    entry: ,
    output:{
    //Task3: complete output rules, please define path and filename 
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
            //Task4: complete the rule to compile .jsx file using babel-loader.
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/app/index.html'
        })
      ]
}

