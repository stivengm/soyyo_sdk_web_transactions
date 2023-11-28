const path = require('path');

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

const rules = [ rulesForJavaScript ]

module.exports = {
    // entry: '',
    output: {
        path: path.resolve(__dirname,  'build')
    },
    module: { rules }
}