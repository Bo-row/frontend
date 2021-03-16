module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:prettier/recommended' // Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'no-eval': 2,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    //ignored
    'no-shadow': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  }
};
