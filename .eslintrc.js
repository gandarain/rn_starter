module.exports = {
  root: true,
  extends: '@react-native-community',
  ignorePatterns: ['jest/*.js'],
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
    'object-curly-newline': ['error', { minProperties: 4, consistent: true }],

    // react specific
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', 'js'] }],
  },
};
