module.exports = {
  'globals': {

  },
  'rules': {
    // Possible Errors
    'comma-dangle': [2, 'never'],
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-empty': [2, {allowEmptyCatch: true}],
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,

    // Best Practices
    // 'array-callback-return': 2, // FR: should only apply to those stored in variables.
    'dot-notation': 2,
    'eqeqeq': 2,
    'no-multi-spaces': 2,
    'no-redeclare': 2,
    'no-unused-expressions': [2, {'allowTernary': true}],
    'yoda': 2,

    // Variables
    'no-shadow': 2,
    // 'no-undef': 2,
    'no-unused-vars': 2
  }
}