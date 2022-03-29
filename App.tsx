import React from 'react';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import InitApp from './src/InitApp';
import { Provider } from 'react-redux';
import generateStore from './src/redux/store';

export default function App() {
  const store = generateStore();
  const [loaded] = useFonts({
    Knewave: require('./assets/fonts/Knewave-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <InitApp />
    </Provider>
  );
}
