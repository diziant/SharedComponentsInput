module.exports = {
  plugins: {
    'postcss-import': {
      path: `${__dirname}/src/`,
    },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 1%'],
    },
    'postcss-nested': {},
  },
}
