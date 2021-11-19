module.exports = {
  extends: [
    'airbnb-typescript/base',
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
  ],
  env: {
    node: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'class-methods-use-this': 0,
    'func-names': 0,
    'linebreak-style': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'object-curly-newline': 0,
    'prefer-template': 0,
    "@typescript-eslint/no-unused-params": 0,
    "@typescript-eslint/no-unused-vars": 0,
    '@typescript-eslint/no-explicit-any': 0,
    "no-multiple-empty-lines": 0,
  },
  overrides: [
    {
      files: ["test/**/*.ts"],
      env: { "jest": true, "node": true }
    }
  ]
}