import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Main from './src/Main';
import {store} from './src/store/store';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
// import {useFocusEffect} from '@react-navigation/native';
let persistor = persistStore(store);

const App = () => {
  const navigationRef = useNavigationContainerRef();
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <SafeAreaView style={styles.sectionContainer}>
            <Main />
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
