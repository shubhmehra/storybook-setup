const path = require('path');


const rules = [
  {
    loaders: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react'],
        },
      },
    ],
    exclude: /node_modules/,
    test: /\.(js|jsx)$/,
  },
  {
    test: /\.less$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  },
  {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [{ loader: 'url-loader' }],
  },
  {
    test: /\.(png|svg|jpg|gif|jpeg)$/,
    use: [{ loader: 'file-loader' }],
  },
];

module.exports = rules;
