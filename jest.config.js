/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  globals: {
    __DEV__: true,
  },
  preset: 'react-native',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/jest/setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/jest'],
};
