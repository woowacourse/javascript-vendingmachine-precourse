module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['prettier'],
    extends: ['airbnb-base', 'eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                quoteProps: 'consistent',
                bracketSpacing: true,
                arrowParens: 'always',
                endOfLine: 'auto',
                printWidth: 120,
            },
        ],
        'no-console': 'off',
        'no-plusplus': 'off',
        'max-depth': ['error', 2],
        'max-lines-per-function': ['error', 15],
        'no-restricted-syntax': 'off',
        'no-continue': 'off',
        'no-alert': 'off',
        'max-len': 'off',
        'import/extensions': 'off',
    },
};
