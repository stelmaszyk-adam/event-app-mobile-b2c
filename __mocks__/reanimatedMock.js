// A self-contained stand-in for react-native-reanimated in tests.
//
// The package's own `react-native-reanimated/mock` re-exports a handful of
// constants from its real entry point, which in turn requires
// react-native-worklets to reach a native turbo module that only exists on
// a device or simulator. Importing that chain crashes under Jest, so this
// mock reimplements the same no-op surface without touching real reanimated
// internals.
const { useRef } = require('react');
const {
  Animated: AnimatedRN,
  Image: ImageRN,
  processColor: processColorRN,
  Text: TextRN,
  View: ViewRN,
} = require('react-native');

const NOOP = () => {};
const NOOP_FACTORY = () => NOOP;
const ID = t => t;
const IMMEDIATE_CALLBACK_INVOCATION = callback => callback();

class BaseAnimationMock {
  duration() {
    return this;
  }
  delay() {
    return this;
  }
  springify() {
    return this;
  }
  damping() {
    return this;
  }
  stiffness() {
    return this;
  }
  energyThreshold() {
    return this;
  }
  withCallback() {
    return this;
  }
  randomDelay() {
    return this;
  }
  withInitialValues() {
    return this;
  }
  easing() {
    return this;
  }
  rotate() {
    return this;
  }
  mass() {
    return this;
  }
  restDisplacementThreshold() {
    return this;
  }
  restSpeedThreshold() {
    return this;
  }
  overshootClamping() {
    return this;
  }
  dampingRatio() {
    return this;
  }
  getDelay() {
    return 0;
  }
  getDelayFunction() {
    return NOOP;
  }
  getDuration() {
    return 300;
  }
  getReduceMotion() {
    return 'system';
  }
  getAnimationAndConfig() {
    return [NOOP, {}];
  }
  build() {
    return () => ({ initialValues: {}, animations: {} });
  }
  reduceMotion() {
    return this;
  }
}

const layoutAnimationNames = [
  'FlipInXUp',
  'FlipInYLeft',
  'FlipInXDown',
  'FlipInYRight',
  'FlipInEasyX',
  'FlipInEasyY',
  'FlipOutXUp',
  'FlipOutYLeft',
  'FlipOutXDown',
  'FlipOutYRight',
  'FlipOutEasyX',
  'FlipOutEasyY',
  'StretchInX',
  'StretchInY',
  'StretchOutX',
  'StretchOutY',
  'FadeIn',
  'FadeInRight',
  'FadeInLeft',
  'FadeInUp',
  'FadeInDown',
  'FadeOut',
  'FadeOutRight',
  'FadeOutLeft',
  'FadeOutUp',
  'FadeOutDown',
  'SlideInRight',
  'SlideInLeft',
  'SlideOutRight',
  'SlideOutLeft',
  'SlideInUp',
  'SlideInDown',
  'SlideOutUp',
  'SlideOutDown',
  'ZoomIn',
  'ZoomInRotate',
  'ZoomInLeft',
  'ZoomInRight',
  'ZoomInUp',
  'ZoomInDown',
  'ZoomInEasyUp',
  'ZoomInEasyDown',
  'ZoomOut',
  'ZoomOutRotate',
  'ZoomOutLeft',
  'ZoomOutRight',
  'ZoomOutUp',
  'ZoomOutDown',
  'ZoomOutEasyUp',
  'ZoomOutEasyDown',
  'BounceIn',
  'BounceInDown',
  'BounceInUp',
  'BounceInLeft',
  'BounceInRight',
  'BounceOut',
  'BounceOutDown',
  'BounceOutUp',
  'BounceOutLeft',
  'BounceOutRight',
  'LightSpeedInRight',
  'LightSpeedInLeft',
  'LightSpeedOutRight',
  'LightSpeedOutLeft',
  'PinwheelIn',
  'PinwheelOut',
  'RotateInDownLeft',
  'RotateInDownRight',
  'RotateInUpLeft',
  'RotateInUpRight',
  'RotateOutDownLeft',
  'RotateOutDownRight',
  'RotateOutUpLeft',
  'RotateOutUpRight',
  'RollInLeft',
  'RollInRight',
  'RollOutLeft',
  'RollOutRight',
  'Layout',
  'LinearTransition',
  'FadingTransition',
  'SequencedTransition',
  'JumpingTransition',
  'CurvedTransition',
  'EntryExitTransition',
];

const layoutReanimation = {
  BaseAnimationBuilder: new BaseAnimationMock(),
  ComplexAnimationBuilder: new BaseAnimationMock(),
  Keyframe: BaseAnimationMock,
};
for (const name of layoutAnimationNames) {
  layoutReanimation[name] = new BaseAnimationMock();
}

const Reanimated = {
  // core
  runOnJS: ID,
  runOnUI: ID,
  createWorkletRuntime: NOOP,
  runOnRuntime: NOOP,
  makeMutable: ID,
  createSerializable: ID,
  isReanimated3: () => false,
  enableLayoutAnimations: NOOP,
  // hooks
  useAnimatedProps: IMMEDIATE_CALLBACK_INVOCATION,
  useEvent: () => NOOP,
  useSharedValue: init => {
    // Real reanimated keeps the same shared value identity across renders
    // (it's backed by a ref internally), so mirror that here rather than
    // creating a fresh object every render.
    const ref = useRef();
    if (!ref.current) {
      const value = { value: init };
      ref.current = new Proxy(value, {
        get(target, prop) {
          if (prop === 'value') return target.value;
          if (prop === 'get') return () => target.value;
          if (prop === 'set') {
            return newValue => {
              target.value =
                typeof newValue === 'function'
                  ? newValue(target.value)
                  : newValue;
            };
          }
          return undefined;
        },
        set(target, prop, newValue) {
          if (prop === 'value') {
            target.value = newValue;
            return true;
          }
          return false;
        },
      });
    }
    return ref.current;
  },
  useAnimatedStyle: IMMEDIATE_CALLBACK_INVOCATION,
  useAnimatedReaction: NOOP,
  useAnimatedRef: () => ({ current: null }),
  useAnimatedScrollHandler: NOOP_FACTORY,
  useDerivedValue: processor => {
    const result = processor();
    return { value: result, get: () => result };
  },
  useAnimatedSensor: () => ({
    sensor: {
      value: {
        x: 0,
        y: 0,
        z: 0,
        interfaceOrientation: 0,
        qw: 0,
        qx: 0,
        qy: 0,
        qz: 0,
        yaw: 0,
        pitch: 0,
        roll: 0,
      },
    },
    unregister: NOOP,
    isAvailable: false,
    config: {
      interval: 0,
      adjustToInterfaceOrientation: false,
      iosReferenceFrame: 0,
    },
  }),
  useAnimatedKeyboard: () => ({ height: 0, state: 0 }),
  useScrollViewOffset: () => ({ value: 0 }),
  useScrollOffset: () => ({ value: 0 }),
  // animation
  cancelAnimation: NOOP,
  withDecay: (_config, callback) => {
    callback?.(true);
    return 0;
  },
  withDelay: (_delayMs, nextAnimation) => nextAnimation,
  withRepeat: ID,
  withSequence: () => 0,
  withSpring: (toValue, _config, callback) => {
    callback?.(true);
    return toValue;
  },
  withTiming: (toValue, _config, callback) => {
    callback?.(true);
    return toValue;
  },
  // interpolation
  Extrapolation: { EXTEND: 'extend', CLAMP: 'clamp', IDENTITY: 'identity' },
  interpolate: NOOP,
  clamp: NOOP,
  Extrapolate: { EXTEND: 'extend', CLAMP: 'clamp', IDENTITY: 'identity' },
  ColorSpace: { RGB: 'RGB', HSV: 'HSV' },
  interpolateColor: NOOP,
  // easing
  Easing: {
    linear: ID,
    ease: ID,
    quad: ID,
    cubic: ID,
    poly: ID,
    sin: ID,
    circle: ID,
    exp: ID,
    elastic: ID,
    back: ID,
    bounce: ID,
    bezier: () => ({ factory: ID }),
    bezierFn: ID,
    steps: ID,
    in: ID,
    out: ID,
    inOut: ID,
  },
  // platform functions
  measure: () => ({ x: 0, y: 0, width: 0, height: 0, pageX: 0, pageY: 0 }),
  scrollTo: NOOP,
  processColor: processColorRN,
  // common types (values don't matter for tests, just need to exist)
  SensorType: {
    ACCELEROMETER: 1,
    GYROSCOPE: 2,
    GRAVITY: 3,
    MAGNETIC_FIELD: 4,
    ROTATION: 5,
  },
  IOSReferenceFrame: {
    XArbitraryZVertical: 0,
    XArbitraryCorrectedZVertical: 1,
    XMagneticNorthZVertical: 2,
    XTrueNorthZVertical: 3,
    Auto: 4,
  },
  InterfaceOrientation: {
    ROTATION_0: 0,
    ROTATION_90: 90,
    ROTATION_180: 180,
    ROTATION_270: 270,
  },
  KeyboardState: { UNKNOWN: 0, OPENING: 1, OPEN: 2, CLOSING: 3, CLOSED: 4 },
  ReduceMotion: { System: 'system', Always: 'always', Never: 'never' },
  // layout animations
  ...layoutReanimation,
  // jest utils
  withReanimatedTimer: fn => fn(),
  advanceAnimationByTime: NOOP,
  advanceAnimationByFrame: NOOP,
  setUpTests: NOOP,
  getAnimatedStyle: animatedRef =>
    (animatedRef && animatedRef.current
      ? animatedRef.current.props?.style
      : {}) || {},
};

const Animated = {
  View: ViewRN,
  Text: TextRN,
  Image: ImageRN,
  ScrollView: AnimatedRN.ScrollView,
  FlatList: AnimatedRN.FlatList,
  Extrapolate: Reanimated.Extrapolate,
  interpolate: NOOP,
  interpolateColor: NOOP,
  clamp: NOOP,
  createAnimatedComponent: ID,
  addWhitelistedUIProps: NOOP,
  addWhitelistedNativeProps: NOOP,
};

module.exports = {
  __esModule: true,
  reanimatedVersion: '0.0.0-mock',
  ...Reanimated,
  default: Animated,
};
