import * as React from 'react';
import {headerStyle, headerTitleStyle} from '../constans/constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/types';
import Lesson_1 from '../screens/Lesson_1';
import Lesson_2 from '../screens/Lesson_2';
import Lesson_3 from '../screens/Lesson_3';

export const stackNavigatorConfig = {
  // initialRouteName: 'LoginWalkScreen',
  initialRouteName: 'HomeTabScreen',
  mode: 'modal', // modal - card
  navigationOptions: {
    gesturesEnabled: true,
    headerTintColor: '#000',
    headerBackTitle: '',
    headerStyle,
    headerTitleStyle,
    headerShown: false,
  },
};
const Stack = createStackNavigator<RootStackParamList>();

const LessonNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          // cardStyle: {backgroundColor: 'transparent'},
          // presentation: 'transparentModal',
        }}>
        {/*<Stack.Screen name={'HomeTabScreen'} component={BottomTabbar} />*/}
        {/*<Stack.Screen name={'Burger'} component={Burger} />*/}
        <Stack.Screen name={'Lesson_1'} component={Lesson_1} />
        <Stack.Screen name={'Lesson_2'} component={Lesson_2} />
        <Stack.Screen name={'Lesson_3'} component={Lesson_3} />
      </Stack.Navigator>
      {/*<BottomTab />*/}
    </NavigationContainer>
  );
};
export default LessonNavigation;
