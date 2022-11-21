import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {useAppDispatch, useAppSelector} from './store/store';
import {HEIGHT, WIDTH} from './constans/constants';

import LessonNavigation from './navigation/LessonNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types/types';
import {initializeApp} from './store/authReducer';
const Stack = createStackNavigator<RootStackParamList>();
const Main = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn);
  const isInitialized = useAppSelector(
    state => state.authReducer.isInitialized,
  );
  const login = useAppSelector(state => state.mainReducer.login);
  console.log('isLigged', isLoggedIn);
  console.log('isInitial', isInitialized);
  console.log('loginToken', login.token);
  useEffect(() => {
    dispatch(initializeApp(login.token));
  }, [dispatch, login.token]);

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
