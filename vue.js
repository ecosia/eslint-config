module.exports = {
    extends: ['plugin:vue/recommended', './index.js'],
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', { singleline: 3 }],
    },
};
