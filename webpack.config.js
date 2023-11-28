const path = require('path');


module.exports = {
    // entry: '',
    output: {
        path: path.resolve(__dirname,  'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
}