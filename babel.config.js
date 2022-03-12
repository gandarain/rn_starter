const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      '@': './src',
    },
  },
]);

// for react-native-animated v2
// plugins.push(['react-native-reanimated/plugin']) // Reanimated plugin has to be listed last.

module.exports = {
  presets,
  plugins,
};
