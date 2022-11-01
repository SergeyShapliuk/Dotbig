import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  HomeTabScreen: undefined;
  Home: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ForgotScreen: undefined;
};
export type UseNavigationType = NavigationProp<RootStackParamList>;

export const useAppNavigation = () => useNavigation<UseNavigationType>();
