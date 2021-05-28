module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'consistent-return': ['warn'],
    'react/forbid-prop-types': ['warn'],
    'react/require-default-props': ['warn'],
    'react/no-unused-prop-types': ['warn'],
    'react/jsx-no-duplicate-props': ['warn'],
    'import/order': ['warn'],
    'no-else-return': ['warn'],
    'import/extensions': ['warn'],
    'import/no-duplicates': ['warn'],
    'prefer-const': ['warn'],
    'no-shadow': ['warn'],
    'jsx-a11y/alt-text': ['warn'],
    'react/self-closing-comp': ['warn'],
    'prefer-template': ['warn'],
    camelcase: ['warn'],
    'react/prop-types': ['warn'],
  },
};
