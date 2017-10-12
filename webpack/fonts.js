module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    loader: 'file-loader',
                    options: {
                        // Output below the fonts directory
                        name: './fonts/[name].[ext]',
                        // Tweak publicPath to fix CSS lookups to take
                        // the directory into account.
                        publicPath: '../'
                    }
                }
            ]
        }
    }
}