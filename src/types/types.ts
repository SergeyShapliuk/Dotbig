import {
  createNavigationContainerRef,
  NavigationProp,
  NavigatorScreenParams,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export type RootStackParamList = {
  HomeTabScreen: undefined;
  Home: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ForgotScreen: undefined;
  // Lessons: NavigatorScreenParams<NestedStack>;
};
export type LessonStackList = {
  Lesson1: undefined;
  Lesson2: undefined;
  Lesson3: undefined;
  Lesson4: undefined;
  Burger: NavigatorScreenParams<BurgerStack>;
  // Lesson: NavigatorScreenParams<NestedStack>;
};
export type BurgerStack = {
  Burgers: undefined;
};

export type UseNavigationType = NavigationProp<RootStackParamList>;
export type UseLessonNavigationType = NavigationProp<LessonStackList>;

export const useAppNavigation = () => useNavigation<UseNavigationType>();
export const useLessonAppNavigation = () =>
  useNavigation<UseLessonNavigationType>();
export const useLessonAppRef = () =>
  createNavigationContainerRef<LessonStackList>();
export const useLessonAppRoute = () => useRoute();

export type LessonBtn = {
  lesson_btn_text: string;
  lesson_btn_url: string;
};
export type TextLessonType = {
  step_item: string;
  input_name: string;
  input_placeholder: string;
};
export type StepsType = {
  name: string;
  text: TextLessonType[] | boolean;
  status: string;
  video_url: string;
  btn_url: string;
  btn_text: string;
};
export type StepsLessonType = {
  bonus_material: string;
  steps: StepsType[];
  bonus_text: string;
  progress_bar_text: string;
  progress_bar: boolean;
  bonus_link_text: string;
  lesson_btn: LessonBtn[] | boolean;
};
export type LessonsType = {
  id: number;
  title: string;
  content: string;
  acf: StepsLessonType;
};
export type CourseType = {
  id: string;
  title: string;
  content: string;
  slug: string;
  link: string;
  acf: {course_video_url: string};
  lessons: LessonsType[];
};
