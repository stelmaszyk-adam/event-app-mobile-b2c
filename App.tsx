import './global.css';
import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Typography } from './src/components';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View className="flex-1 bg-surface items-center justify-center">
          <Typography variant="headline-lg">EventApp</Typography>
          <Typography variant="body-md" color="variant" className="mt-2">
            Odkrywaj wydarzenia w swoim mieście
          </Typography>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
