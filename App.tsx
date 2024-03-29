import React, {useEffect, useState} from 'react';
import {Linking, Platform, SafeAreaView, StyleSheet} from 'react-native';
import Main from './src/Main';
import {store} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
// @ts-ignore
import AnimatedSplash from 'react-native-animated-splash-screen';

let persistor = persistStore(store);

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      setIsLoaded(true);
    }, 500);
  }, []);
  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);
  if (!isReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          initialState={initialState}
          onStateChange={state =>
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
          }>
          <SafeAreaView style={styles.sectionContainer}>
            <AnimatedSplash
              translucent={true}
              isLoaded={isLoaded}
              logoImage={require('./src/assets/launcher_round.png')}
              backgroundColor={'#0b1633'}
              logoHeight={170}
              logoWidth={170}>
              <Main />
            </AnimatedSplash>
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
