/* eslint-env jest */
// react-native-reanimated's own `/mock` entry re-exports constants from its
// real entry point, which in turn requires react-native-worklets to reach a
// native turbo module that only exists on-device. Use a self-contained stub
// instead so importing reanimated doesn't crash under Jest.
jest.mock('react-native-reanimated', () =>
  require('./__mocks__/reanimatedMock'),
);
