const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./'], // Serve static files from the current directory
    allowedHosts: 'all', // Allow all hosts to avoid "Invalid Host Header" error
    port: 3000, // Optional: specify the port if needed
  },
});
