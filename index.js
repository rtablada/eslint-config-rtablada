module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ].map(require.resolve),

  'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'impliedStrict': true,
    },
  },

  env: {
    node: false,
    browser: true,
    qunit: true,
    es6: true,
  },

  rules: {
    'func-names': 0,
    'arrow-parens': 2,
    'constructor-super': 2,
    'no-this-before-super': 2,
  },
};
