const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rulesForJavaScript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic' // classic
                }
            ]
        ]
    }
}

const rulesForStyles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

const rules = [ rulesForJavaScript, rulesForStyles ]

module.exports = {
    // entry: '',
    output: {
        path: path.resolve(__dirname,  'build')
    },
    module: { rules },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html'})
    ],
    devServer: {
        open: true,
        port: 3000,
        overlay: true
    }
}