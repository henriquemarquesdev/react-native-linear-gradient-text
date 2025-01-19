import { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-case': [2, 'always', ['lower-case']],
  },
};

module.exports = Configuration;
