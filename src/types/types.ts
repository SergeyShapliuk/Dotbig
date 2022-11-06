import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  HomeTabScreen: undefined;
  Home: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ForgotScreen: undefined;
  Lesson_1: undefined;
  Lesson_2: undefined;
  Lesson_3: undefined;
  Lesson_4: undefined;
  Burger: undefined;
};
export type UseNavigationType = NavigationProp<RootStackParamList>;

export const useAppNavigation = () => useNavigation<UseNavigationType>();
