module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  rules: {
    'no-descending-specificity': null,
    'selector-type-no-unknown': null,
    'value-keyword-case': null,
  },
};
