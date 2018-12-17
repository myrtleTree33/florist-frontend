const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#1DA57A',
      '@menu-inline-toplevel-item-height': '20px',
      '@menu-item-height': '20px',
      '@layout-body-background': '#fff'
    },
    javascriptEnabled: true
  })(config, env);
  return config;
};
