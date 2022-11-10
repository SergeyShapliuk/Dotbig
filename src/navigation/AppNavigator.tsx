import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import {RootStackParamList} from '../types/types';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import LessonNavigation from './LessonNavigation';

const Stack = createStackNavigator<RootStackParamList>();
// const forFade = ({current}) => ({
//   cardStyle: {
//     opacity: current.progress,
//   },
// });
const AppNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: 'transparent'},
            presentation: 'transparentModal',
          }}>
          {/*<Stack.Screen name={'HomeTabScreen'} component={BottomTabbar} />*/}
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'RegisterScreen'} component={Register} />
          <Stack.Screen name={'LoginScreen'} component={Login} />
          <Stack.Screen name={'ForgotScreen'} component={Forgot} />
          <Stack.Screen
            name={'Lessons'}
            options={{animationEnabled: false}}
            component={LessonNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default AppNavigator;
