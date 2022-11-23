import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {useAppDispatch, useAppSelector} from './store/store';
import {HEIGHT, WIDTH} from './constans/constants';

import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types/types';
import {initializeApp} from './store/authReducer';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import Lesson_1 from './screens/Lesson_1';
import Lesson_2 from './screens/Lesson_2';
import Lesson_3 from './screens/Lesson_3';
import Lesson_4 from './screens/Lesson_4';
import PopUpNext from './screens/PopUpNext';
import PopUpActive from './screens/PopUpActive';
import PopUpCongrats from './screens/PopUpCongrats';
import Burger from './screens/Burger';
import BottomTab from './components/BottomTab';
import Header from './components/Header';
import PopUpLeft from './screens/PopUpLeft';
import PopUpReg from './screens/PopUpReg';
const Stack = createStackNavigator<RootStackParamList>();
const Main = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn);
  const isInitialized = useAppSelector(
    state => state.authReducer.isInitialized,
  );
  const login = useAppSelector(state => state.mainReducer.login);
  const burgerList = useAppSelector(state => state.authReducer.burgerList);
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
    <>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Group
            screenOptions={{
              headerShown: false,
              cardStyle: {backgroundColor: 'transparent'},
              presentation: 'transparentModal',
            }}>
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'RegisterScreen'} component={Register} />
            <Stack.Screen name={'LoginScreen'} component={Login} />
            <Stack.Screen name={'ForgotScreen'} component={Forgot} />
          </Stack.Group>
        ) : (
          <Stack.Group
            screenOptions={{
              header: props => <Header {...props} />,
              animationEnabled: false,
            }}>
            <Stack.Screen name={'Lesson1'} component={Lesson_1} />
            <Stack.Screen name={'Lesson2'} component={Lesson_2} />
            <Stack.Screen name={'Lesson3'} component={Lesson_3} />
            <Stack.Screen name={'Lesson4'} component={Lesson_4} />
          </Stack.Group>
        )}

        <Stack.Group
          // navigationKey={burgerList ? 'user' : 'guest'}
          screenOptions={{
            header: props => <Header {...props} />,
            animationEnabled: false,
            cardStyle: {backgroundColor: 'transparent'},
            presentation: 'transparentModal',
          }}>
          <Stack.Screen name={'PopUpReg'} component={PopUpReg} />
          <Stack.Screen name={'PopUpNext'} component={PopUpNext} />
          <Stack.Screen name={'PopUpLeft'} component={PopUpLeft} />
          <Stack.Screen name={'PopUpActive'} component={PopUpActive} />
          <Stack.Screen name={'PopUpCongrats'} component={PopUpCongrats} />
          <Stack.Screen name={'Burger'} component={Burger} />
        </Stack.Group>
      </Stack.Navigator>
      {!burgerList && isLoggedIn ? <BottomTab /> : ''}
    </>
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
