import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NestedStack} from '../types/types';
import Lesson_1 from '../screens/Lesson_1';
import Lesson_2 from '../screens/Lesson_2';
import Lesson_3 from '../screens/Lesson_3';
import Lesson_4 from '../screens/Lesson_4';
import Burger from '../screens/Burger';

const Stack = createStackNavigator<NestedStack>();

const LessonNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={'Lesson_1'}
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          // cardStyle: {backgroundColor: 'transparent'},
          // presentation: 'card',
        }}>
        {/*<Stack.Screen name={'HomeTabScreen'} component={BottomTabbar} />*/}
        <Stack.Screen name={'Lesson_1'} component={Lesson_1} />
        <Stack.Screen name={'Lesson_2'} component={Lesson_2} />
        <Stack.Screen name={'Lesson_3'} component={Lesson_3} />
        <Stack.Screen name={'Lesson_4'} component={Lesson_4} />
        <Stack.Screen name={'Burger'} component={Burger} />
      </Stack.Navigator>
      {/*<BottomTab />*/}
    </>
  );
};
export default LessonNavigation;
