const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    DIST_VIEWS: path.resolve(__dirname, 'dist/views'),
    SRC: path.resolve(__dirname, 'src'),
    VIEWS: path.resolve(__dirname, 'src/views'),
    JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
let CLIConfig = {
  target: 'node',
  entry: path.join(paths.SRC, 'GetStock.js'),
  output: {
    path: paths.DIST,
    filename: 'GetStock.bundle.js',
  },
  devtool: 'source-map',

  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};

let clientConfig = {
  entry: path.join(paths.JS, 'index.js'),
  output: {
    path: paths.DIST_VIEWS,
    filename: 'index.bundle.js',
  },
  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.VIEWS, 'index.html'),
    }),
    // CSS will be extracted to this bundle file
    new ExtractTextPlugin('style.bundle.css'),
  ],

  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
        // File loader for image assets
        // We'll add only image extensions, but you can things like svgs, fonts and videos
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          'file-loader',
        ],
      },
            // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
    //   {
    //     test: /\.css$/,
    //     loader: ExtractTextPlugin.extract({
    //       use: 'css-loader',
    //     }),
    //   },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
            {loader: 'style-loader', options: {sourceMap: true}},
            {loader: 'css-loader', options: {sourceMap: true}},
            {loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                    // ident: 'postcss',
                    // plugins: [
                    //     require('stylelint')(),
                    // ]
                },
            },
            {loader: 'less-loader', options: {sourceMap: true}},

                // {
                //     loader: 'style-loader',
                // },
                // {
                //     loader: 'css-loader',
                //     options: {
                //         importLoaders: 1,
                //     }
                // },
                // {
                //     loader: 'postcss-loader'
                // }
            ],
        },
    ],
  },

  // Enable importing JS files without specifying their's extenstion
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = [CLIConfig, clientConfig];
