import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Main from './src/Main';
import {store} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
// import {useFocusEffect} from '@react-navigation/native';

const App = () => {
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.sectionContainer}>
          <Main />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
