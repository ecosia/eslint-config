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
        'comma-dangle': [2, { functions: 'never' }],
        'function-paren-newline': [0],
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        'indent': [2, 4],
        'no-alert': 2,
        'no-console': 1,
        'no-new': 0,
        'no-restricted-globals': [2, 'event'],
        'object-curly-newline': 0,
        'quote-props': [2, 'consistent-as-needed'],
        'space-before-function-paren': 1
    }
};
