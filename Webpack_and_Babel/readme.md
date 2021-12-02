npm init --yes -> generate package.json file
npm install --save-dev webpack@4.17.2
npm install --save-dev webpack-cli@3.1.2
npm install --save-dev webpack-dev-server@3.1.7
npm install --save-dev @babel/core@7.0.0
npm install --save-dev @babel/node@7.0.0 @babel/preset-env@7.0.0 @babel/preset-react@7.0.0 @babel/register@7.0.0

create .babelrc file 
{
    "presets": [
        [
            "@babel/presets-env",{
                "target":{
                    "node":"current"
                }
        }],
        "@babel/preset-react"
    ]
}

create webpack.config.js

$ npm install --save-dev babel-loader@8.0.2

babel convert index.js to bundle.js