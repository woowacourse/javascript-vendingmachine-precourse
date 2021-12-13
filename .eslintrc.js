module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'no-alert': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'max-depth': ['error', 2],
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'max-lines-per-function': ['error', 15],
    'no-constructor-return': 'off',
  },
  plugins: ['prettier'],
};
