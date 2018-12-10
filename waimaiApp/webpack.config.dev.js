const fs = require("fs");
const path = require("path");
const mainFile = 'index.js';
const srcRoot = path.resolve(__dirname,'src');
const devPath = path.resolve(__dirname, 'dev');
const pageDir = path.resolve(srcRoot, 'page');
const HTMLWebpackPlugin = require("html-webpack-plugin");

const getHtmlArray=(entryMap)=>{
    let htmlArray = [];
    Object.keys(entryMap).forEach((key) =>{
        let fullPathName = path.resolve(pageDir, key);
        let filename = path.resolve(fullPathName, key + '.html');

        if(fs.existsSync(filename) ){
            htmlArray.push( new HTMLWebpackPlugin({
                filename: key + '.html',
                template: filename,
                chunks: [key]
            }));
        }
    })

    return htmlArray;
}

const getEntry=()=>{
    let entryMap = {};
    fs.readdirSync(pageDir).forEach((pathname) =>{
        let fullPathName = path.resolve(pageDir, pathname);
        let stat = fs.statSync(fullPathName);
        let filename = path.resolve(fullPathName, mainFile);

        if(stat.isDirectory() && fs.existsSync(filename)){
            entryMap[pathname] = filename;
        }
    })  

    return entryMap;
}

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: devPath
    },
    entry: entryMap,
    resolve: {
        extensions: ['.js','.jsx']
    },
    output:{
        path: devPath,
        filename: '[name].min.js'
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{loader: 'babel-loader'}],
                include: srcRoot
            },
            { 
                test: /\.css$/,
                use: ['style-loader','css-loader'], 
                include: srcRoot
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', 'sass-loader'],
                include: srcRoot
            },
            {   test: /\.(png|jpg|jpeg)$/, 
                use: 'url-loader?limit=8192' , 
                include: srcRoot
            }
        ]
    },
    plugins: [
        
    ].concat(htmlArray)
};