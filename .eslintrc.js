module.exports = {
    root: true,
    env: {
        node: true,
        'jest/globals': true,
    },
    extends: [
        'plugin:vue/recommended',
        'plugin:testing-library/vue',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
};
