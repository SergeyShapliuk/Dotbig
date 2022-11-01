import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="rgba(255,255,255,0.1)"
        barStyle="dark-content"
      />
      <View style={styles.sectionContainer} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
