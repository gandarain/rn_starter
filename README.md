# React Native Starter with Typescript

## Generate a new project
- `react-native init project_name --template react-native-template-typescript`
- Somehow it will error, but it's fine.
- Add this dependency,
  - `yarn add @types/react`
  - `yarn add @types/react-native`
  - `yarn add typescript`
- Change `App.js` to `App.tsx`.

## Setup makefile
- Create a new file `makefile`.
- Add some command like `eslint . --cache && tsc --build`, and call it `pre-commit`.
- Use that command on the `package.json`.
- Run `yarn pre-commit`.

## Setup Husky
- `npx husky-init && yarn`.
- Copy `yarn pre-commit`.
- `yarn pre-commit` will always run when you commit something.

## Add font family
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
- Remove icons, open `Build Phases`, remove icons from `Copy Bundle Resources`.

## Setup Jest
- `yarn add -D @testing-library/react-native @types/jest ts-jest`.
- Remove this lint `jest: {}` from `package.json`.
- Create a new file `jest.config.js`.
  ````
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
  ````
- Create a new folder `jest` and a new file `setup.ts`.
- Add this code `"jest/setup.ts"` inside `tsconfig.json -> exclude`.
- Add this code `ignorePatterns: ['jest/*.ts']` inside `eslintrc.js`.
- Add this script `"test:coverage": "TZ='Asia/Jakarta' jest --expand --collectCoverage"` and `"test:view": "open coverage/lcov-report/index.html"` to collect the coverage code.
- Change `pre-commit` inside `makefile` to `eslint . --cache && tsc --build && yarn test:coverage -u --runInBand` to generate code coverage when committing.

## Setup CI/CD
This is basic ci/cd, to run `lint, type check, test, and coverage` when there is a pull request to `master`.
- Create a new folder `.github/workflows`  file `ci.yml`.
- Just copy paste the `ci.yml`.

## How to run
- Clone this repository.
- `yarn install && yarn pod-install`.
- `yarn start` then `yarn ios` or `yarn android`.
