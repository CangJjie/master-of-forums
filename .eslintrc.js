module.exports = {
  env: {
    browser: true,
    es2021: true,
    greasemonkey: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'max-len': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
  },
};
