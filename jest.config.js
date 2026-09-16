module.exports = {
  preset: '@react-native/jest-preset',
  // pnpm nests packages under node_modules/.pnpm/<pkg>@<version>/node_modules/<pkg>,
  // so the preset's default pattern (which expects react-native to sit directly
  // under node_modules/) never matches and the preset's own setup files get ignored.
  transformIgnorePatterns: [
    'node_modules/(?!(?:.*/)?(?:@react-native(?:-community)?|jest-react-native|react-native[^/]*|@gorhom)/)',
  ],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFiles: [
    'react-native-gesture-handler/jestSetup',
    '<rootDir>/jest.setup.js',
  ],
};
