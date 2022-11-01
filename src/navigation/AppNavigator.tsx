import * as React from 'react';
import {headerStyle, headerTitleStyle} from '../constans/constants';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import {RootStackParamList} from '../types/types';
import Home from '../screens/Home';

export const stackNavigatorConfig = {
  // initialRouteName: 'LoginWalkScreen',
  initialRouteName: 'HomeTabScreen',
  mode: 'card', // modal - card
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

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/*<Stack.Screen name={'HomeTabScreen'} component={BottomTabbar} />*/}
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'LoginScreen'} component={Login} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};
export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
