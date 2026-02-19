export default [
  {
    files: ['**/*.js'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
      },
    },
  },
];
