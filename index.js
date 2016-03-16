module.exports = {
  extends: [
    'eslint-config-airbnb/base',
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
    quotes: [1, 'backtick', 'avoid-escape'],
    'arrow-body-style': [1, 'always'],
    'arrow-parens': 1,
    'constructor-super': 2,
    'no-this-before-super': 2,
  },
};
