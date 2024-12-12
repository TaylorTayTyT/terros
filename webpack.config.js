const path = require('path');

module.exports = {
  entry: './src/public/dist/index.js', // Entry point for your app
  output: {
    filename: 'bundle.js', // Name of the output file
    path: path.resolve(__dirname, 'src', 'public', 'pack'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Optional: Transpile ES6+ to ES5
        },
      },
      {
        test: /\.ts$/, // Process .ts files (if using TypeScript)
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'], // Allow imports without specifying file extensions
  },
  mode: 'development', // Change to 'production' for minified output
};
