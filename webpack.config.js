module.exports = {
    entry: ['./index.js'],
    output: {
        publicPath: 'public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.css/, loaders: ['style-loader', 'css-loader']},
            {test: /\.(sass|scss)/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    }
}
