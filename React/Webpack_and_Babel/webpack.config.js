const path = require("path");

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
    }
}

