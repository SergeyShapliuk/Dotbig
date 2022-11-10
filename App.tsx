import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Main from './src/Main';
// import {useFocusEffect} from '@react-navigation/native';

const App = () => {
  useEffect(() => {

  }, []);
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
