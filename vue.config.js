module.exports = {
  // devServer Options don't belong into `configureWebpack`
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/parkGenerator/'
    : '/'
};
