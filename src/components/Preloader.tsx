import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {HEIGHT, WIDTH} from '../constans/constants';
import {useAppSelector} from '../store/store';

const Preloader = () => {
  const status = useAppSelector(state => state.mainReducer.status);
  console.log('status', status);
  return (
    <View style={styles.overlay}>
      {status !== 'loading' && (
        <ActivityIndicator size="large" color="#D58EA4" />
      )}
    </View>
  );
};
export default Preloader;

const styles = StyleSheet.create({
  overlay: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
