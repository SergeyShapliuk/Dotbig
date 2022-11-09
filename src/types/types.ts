import {
  NavigationProp,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';

export type RootStackParamList = {
  HomeTabScreen: undefined;
  Home: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ForgotScreen: undefined;
  Lessons: NavigatorScreenParams<NestedStack>;
};
export type NestedStack = {
  Burger: undefined;
  Lesson_1: undefined;
  Lesson_2: undefined;
  Lesson_3: undefined;
  Lesson_4: undefined;
};
export type UseNavigationType = NavigationProp<RootStackParamList>;

export const useAppNavigation = () => useNavigation<UseNavigationType>();
