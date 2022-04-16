import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import InitApp from './src/InitApp';
import { Provider } from 'react-redux';
import generateStore from './src/redux/store';
import { Provider as PaperProvider } from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';
import FlashMessage from 'react-native-flash-message';
import { View } from 'react-native';

export default function App() {
  const store = generateStore();
  const [lottieLoad, setLottieLoad] = useState(false);
  useFonts({Knewave: require('./assets/fonts/Knewave-Regular.ttf')});

  useEffect(()=>{
    setTimeout(() => {
      setLottieLoad(true)
    }, 6000);
  },[])

  if(!lottieLoad){
    return (
    <AnimatedLottieView resizeMode='cover' duration={7000}
      autoPlay
      source={require('./assets/splash.json')}
    />)
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <InitApp />
      </PaperProvider>
    </Provider>
  );
}
