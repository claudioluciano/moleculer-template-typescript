module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'standard-with-typescript',
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: "./tsconfig.json"
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
