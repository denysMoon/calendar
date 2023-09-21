module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite-env.d.ts'], 
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'unicorn/consistent-function-scoping': 0,
    'unicorn/no-null': 0,
    'unicorn/prefer-module': 0,

    // temp
    'unicorn/no-empty-file': 1,
    'unicorn/filename-case': 0,
    'unicorn/filename-case': 0,
  },
}
