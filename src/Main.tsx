import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

const Main = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />

      {/*{common.loading && (*/}
      {/*<View style={styles.overlay}>*/}
      {/*<ActivityIndicator size="large" color="white" />*/}
      {/*</View>*/}
      {/*)}*/}
    </View>
  );
};
export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  overlay: {
    //   WIDTH,
    //   HEIGHT,
    //   backgroundColor: 'rgba(0, 0, 0, 0.4)',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   zIndex: 0,
    //   ...StyleSheet.absoluteFillObject,
  },
});
