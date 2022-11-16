import * as React from 'react';
// import {tabBars} from '../types/types';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from '../components/BottomTab';
// import LessonNavigation from './LessonNavigation';
import Lesson_1 from '../screens/Lesson_1';
import Lesson_2 from '../screens/Lesson_2';
import Lesson_3 from '../screens/Lesson_3';
import Lesson_4 from '../screens/Lesson_4';
import Burger from '../screens/Burger';

const Tab = createBottomTabNavigator<any>();

const BottomTabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        id={'tabBar'}
        tabBar={props => <BottomTab {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name={'Lesson_1'} component={Lesson_1} />
        <Tab.Screen name={'Lesson_2'} component={Lesson_2} />
        <Tab.Screen name={'Lesson_3'} component={Lesson_3} />
        <Tab.Screen name={'Lesson_4'} component={Lesson_4} />
        <Tab.Screen name={'Burger'} component={Burger} />
      </Tab.Navigator>
    </>
  );
};
export default BottomTabNavigation;
