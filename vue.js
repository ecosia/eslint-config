module.exports = {
    extends: ['plugin:vue/recommended', './index.js'],
    rules: {
        'vue/html-indent': [2, 4],
        'vue/max-attributes-per-line': [2, { singleline: 3 }]
    }
};
