import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Main from './src/Main';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar translucent backgroundColor="#0B1633" barStyle="default" />
      <Main />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
