// import * as React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import {RootStackParamList} from '../types/types';
// import Home from '../screens/Home';
// import Register from '../screens/Register';
// import Login from '../screens/Login';
// import Forgot from '../screens/Forgot';
//
// const Stack = createStackNavigator<RootStackParamList>();
// // const forFade = ({current}) => ({
// //   cardStyle: {
// //     opacity: current.progress,
// //   },
// // });
// const AppNavigator = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName={'Home'}
//       screenOptions={{
//         headerShown: false,
//         cardStyle: {backgroundColor: 'transparent'},
//         presentation: 'transparentModal',
//       }}>
//       <Stack.Screen name={'Home'} component={Home} />
//       <Stack.Screen name={'RegisterScreen'} component={Register} />
//       <Stack.Screen name={'LoginScreen'} component={Login} />
//       <Stack.Screen name={'ForgotScreen'} component={Forgot} />
//       {/*<Stack.Screen*/}
//       {/*  name={'Lessons'}*/}
//       {/*  options={{animationEnabled: false}}*/}
//       {/*  component={LessonNavigation}*/}
//       {/*/>*/}
//     </Stack.Navigator>
//   );
// };
// export default AppNavigator;
