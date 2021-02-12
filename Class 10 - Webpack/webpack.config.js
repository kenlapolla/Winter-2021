const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        myapp: './app/javascript/index'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    module: {
            rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {loader: 'babel-loader'}
            }
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".json", ".css"],
        modules: [
             './node_modules',
            './app'
        ]
    },
    watch: true,
    devServer: {
        contentBase: './dist',
        port: '3000',
        inline: true
    },
    plugins: [new ESLintPlugin()]
};