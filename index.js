/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

async function bootstrap() {
  if (__DEV__ && process.env.API_MOCKING === 'true') {
    const { setupMocks } = await import('./src/mocks/setup');
    await setupMocks();
  }
  AppRegistry.registerComponent(appName, () => App);
}

bootstrap();
