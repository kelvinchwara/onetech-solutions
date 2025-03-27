const path = require('path');

module.exports = {
    entry: './js/app.js', // Your entry point
    output: {
        path: path.resolve(__dirname, 'build'), // Output directory
        filename: 'bundle.js', // Output filename
        clean: true, // Clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Load CSS files
            },
            // Other loaders...
        ],
    },
    // Other common configurations...
};
