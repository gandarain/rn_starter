module.exports = {
  root: true,
  extends: '@react-native-community',
  ignorePatterns: ['jest/*.ts', 'coverage/'],
  overrides: [
    {
      files: ['**/*.test.ts'],
      rules: {
        'max-lines-per-function': 'off',
        'react/prop-types': 'off', // Turned off because sometimes we need to mock components with own implementation
      },
    },
  ],
  rules: {
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    'valid-jsdoc': 'error',
    'no-underscore-dangle': 'off',

    // react specific
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', 'js'] }],
  },
};
