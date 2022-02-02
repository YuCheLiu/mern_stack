const path = require("path");
module.exports={
    mode:"development",
    
    entry:path.resolve(__dirname,'src/App.jsx'),
    output:{
        path:path.resolve(__dirname,'public'),
        filename:"bundle.js",
        publicPath:'/'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer:{
        static:'./dist',
        inline: false,
        historyApiFallback: true
    },
    module:{
        rules:[{
                test:/\.jsx?/,
                loader: 'babel-loader'
            }
        ]
    }
}