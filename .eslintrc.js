module.exports = {
  root: true,
  extends: '@react-native-community',
  ignorePatterns: ['jest/*.js'],
  overrides: [
    {
      files: ['**/*.test.js'],
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
    'object-curly-newline': ['error', {minProperties: 4, consistent: true}],

    // react specific
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
  },
  globals: {
    describe: true,
    expect: true,
    test: true,
    beforeEach: true,
    afterEach: true,
    it: false,
    jest: false,
  },
};
