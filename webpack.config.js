const path = require('path');

module.exports = {
    entry: './src/sketch.js',
    output: {
        filename: 'sketch.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }

}