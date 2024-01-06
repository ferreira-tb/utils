import config from '@tb-dev/eslint-config';

export default config({
  project: ['./tsconfig.json'],
  overrides: {
    typescript: {
      '@typescript-eslint/explicit-function-return-type': 'error'
    }
  }
});
