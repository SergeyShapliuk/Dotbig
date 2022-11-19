import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {useAppDispatch, useAppSelector} from './store/store';
import {initializeApp} from './store/mainReducer';
import {HEIGHT, WIDTH} from './constans/constants';

import LessonNavigation from './navigation/LessonNavigation';

const Main = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.mainReducer.isLoggedIn);
  const isInitialized = useAppSelector(
    state => state.mainReducer.isInitialized,
  );
  console.log('isLigged', isLoggedIn);
  console.log('isInitial', isInitialized);
  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!isInitialized) {
    return (
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {!isLoggedIn ? <AppNavigator /> : <LessonNavigation />}
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
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
