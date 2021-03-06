module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'camelcase': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'off',

    "no-useless-constructor": 0,
    'no-use-before-define': 0,
    'no-unused-expressions': 0,
    'prefer-const': 0,
    'multiline-ternary': 0,
    '@typescript-eslint/no-unused-vars': 0,

  }
}
