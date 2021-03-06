const path = require('path');

function resolve(dir) {
  return path.join(__dirname, 'src', dir);
}

module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/variables.scss"; @import "@/scss/functions.scss"; @import "@/scss/mixins.scss";`,
      },
    },
  },
  chainWebpack: config => {
    // config.resolve.alias.set('@api', path.join(resolve('api'), 'index.js'));
    config.resolve.alias.set('@api', resolve('api'));
    config.resolve.alias.set('@assets', resolve('assets'));
    config.resolve.alias.set('@cmp', resolve('components'));
    config.resolve.alias.set('@tags', resolve('tags'));
    config.resolve.alias.set('@mxn', resolve('mixins'));
    config.resolve.alias.set('@views', resolve('views'));

    config.resolve.alias.set('@scss', resolve('scss'));
    config.resolve.alias.set('@scssCmp', resolve(path.join('scss', 'cmp')));
    config.resolve.alias.set('@scssPgs', resolve(path.join('scss', 'pages')));
  },
};
