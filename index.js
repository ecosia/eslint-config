module.exports = {
  extends: 'airbnb-base',
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    // comma-dangle would cost us another babel-transform so we skip it for now
    'comma-dangle': 0,
    indent: [2, 4]
  }
};
