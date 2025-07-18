const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html', // Output file name
        }),
        new HtmlWebpackPlugin({
            template: './about.html',
            filename: 'about.html', // Output file name
        }),
        new HtmlWebpackPlugin({
            template: './services.html',
            filename: 'services.html', // Output file name
        }),
        new HtmlWebpackPlugin({
            template: './project.html',
            filename: 'project.html', // Output file name
        }),
        new HtmlWebpackPlugin({
            template: './team.html',
            filename: 'team.html', // Output file name
        }),
        new HtmlWebpackPlugin({
            template: './contact.html',
            filename: 'contact.html', // Output file name
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
});
