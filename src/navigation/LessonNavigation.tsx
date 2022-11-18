import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Lesson_1 from '../screens/Lesson_1';
import Lesson_2 from '../screens/Lesson_2';
import Lesson_3 from '../screens/Lesson_3';
import Lesson_4 from '../screens/Lesson_4';
import Burger from '../screens/Burger';
import BottomTab from '../components/BottomTab';
import {LessonStackList} from '../types/types';
import Header from '../components/Header';
import {useAppSelector} from '../store/store';

// import BottomTab from '../components/BottomTab';

// import BottomTab from '../components/BottomTab';

const Stack = createStackNavigator<LessonStackList>();

const LessonNavigation = () => {
  const burgerList = useAppSelector(state => state.mainReducer.burgerList);
  return (
    <>
      <Header />
      <Stack.Navigator
        initialRouteName={'Lesson1'}
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          // cardStyle: {backgroundColor: 'transparent'},
          // presentation: 'card',
        }}>
        <Stack.Screen name={'Lesson1'} component={Lesson_1} />
        <Stack.Screen name={'Lesson2'} component={Lesson_2} />
        <Stack.Screen name={'Lesson3'} component={Lesson_3} />
        <Stack.Screen name={'Lesson4'} component={Lesson_4} />
        <Stack.Screen name={'Burger'} component={Burger} />
        {/*<Stack.Screen name={'tabBar'} component={BottomTabNavigation} />*/}
      </Stack.Navigator>
      {!burgerList && <BottomTab />}
    </>
  );
};
export default LessonNavigation;
