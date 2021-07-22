exports.modifyWebpackConfig = ({ config, stage }) => {
    if (stage === 'build-html') {
        config.loader('null', {
            test: /scroll-to-element/,
            loader: 'null-loader',
        });
    }
};