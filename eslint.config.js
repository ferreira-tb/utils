import config from '@tb-dev/eslint-config';

export default config({
  project: ['./tsconfig.json'],
  overrides: {
    javascript: {
      'no-undefined': 'off'
    },
    typescript: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/unified-signatures': 'off'
    }
  }
});
