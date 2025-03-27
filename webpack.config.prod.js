const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin'); // Import CopyPlugin
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js'); // Assuming you have a common config

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Path to your index.html template
            filename: 'index.html', // Output filename
            inject: 'body', // Inject scripts into the body
        }),
        new HtmlWebpackPlugin({
            template: '.about.html', // Path to your about.html template
            filename: 'about.html', // Output filename
            inject: 'body', // Inject scripts into the body
        }),
        new HtmlWebpackPlugin({
            template: '.services.html', // Path to your services.html template
            filename: 'services.html', // Output filename
            inject: 'body', // Inject scripts into the body
        }),
        new CopyPlugin({
            patterns: [
                { from: 'img', to: 'img' },
                { from: 'css', to: 'css' },
                { from: 'js/vendor', to: 'js/vendor' },
                { from: 'icon.svg', to: 'icon.svg' },
                { from: 'favicon.ico', to: 'favicon.ico' },
                { from: 'robots.txt', to: 'robots.txt' },
                { from: 'icon.png', to: 'icon.png' },
                { from: '404.html', to: '404.html' },
                { from: 'site.webmanifest', to: 'site.webmanifest' },
            ],
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Output directory
        publicPath: '/', // Public URL of the output directory when referenced in a browser
    },
});
