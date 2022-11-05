import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Main from './src/Main';
// import {useFocusEffect} from '@react-navigation/native';

const App = () => {
  // useFocusEffect(
  //   React.useCallback(() => {
  //     StatusBar.setBarStyle(isDark?'dark-content':); // 'light-content' is also available
  //     StatusBar.setBackgroundColor('white'); //add color code
  //     StatusBar.setTranslucent(true);
  //   }, []),
  // );
  return (
    <SafeAreaView style={styles.sectionContainer}>
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
