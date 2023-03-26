module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'standard',
    'eslint:recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2022
  },
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'camelcase': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-trailing-spaces': 'error'
  }
}
