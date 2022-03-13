# rn_starter

## Add Font Family
- Add font on `src/Assets/Fonts`.
- Create a new file `react-native.config.js`.
- Add this code on `react-native.config.js`.
````
module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./src/Assets/Fonts'], // stays the same
};
Add this code on package.json
"rnpm": {
  "assets": [
    "./src/Assets/Fonts"
  ]
}
````
- Run `npx react-native link`.

## Add react native vector icons
- `yarn add react-native-vector-icons`.
- `yarn add @types/react-native-vector-icons`.
- Copy the icon from `node_modules/react-native-vector-icons/Fonts` to `src/Assets/Icons`.
- Add `./src/Assets/Icons` inside assets on `react-native.config.js`.
- Your `react-native.config.js` should be like this now,
````
module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./src/Assets/Fonts', './src/Assets/Icons'], // stays the same
};
````
- Add `./src/Assets/Icons` inside `rnpm.assets` on `package.json`.
- Your `rnpm` on `package.json` should be like this now,
````
"rnpm": {
  "assets": [
    "./src/Assets/Fonts",
    "./src/Assets/Icons"
  ]
}
````
- Run `react-native link`.

### It will error while run on ios
- Open project with xcode cd `ios/open project-name.xcworkspace`.
- Remove icons, open `Build Phases`, remove icons from `Copy Bundle Resources`
