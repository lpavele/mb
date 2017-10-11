const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function(paths) {
    return {
        plugins: [
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: {removeAll: true } },
                canPrint: true
            })
        ]
    };
};