import React, {useRef} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {message} from '../config/translations/resources/en';

import {getStatusBarHeight} from '../common/deviceInfo';
import {DEVICE_WIDTH} from '../constans/constants';
import Header from '../components/Header';
import LessonList from '../components/LessonList';
import {
  useFocusEffect,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useLessonAppNavigation} from '../types/types';
import {useAppDispatch} from '../store/store';
import {setBurgerList} from '../store/mainReducer';

const Burger = () => {
  const dispatch = useAppDispatch();

  const routeNameRef = useRef();
  const navigation = useLessonAppNavigation();
  const navigationRef = useNavigationContainerRef();
  const routeName = navigation.getState().routes;
  const currentRouteName = routeName[routeName.length - 2].name;
  useFocusEffect(() => {
    dispatch(setBurgerList({value: true}));
    return () => {
      dispatch(setBurgerList({value: false}));
    };
  });
  console.log('routeName', currentRouteName);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'#FFFFFF'}
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
      />
      <ScrollView
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 150}}>
        {/*<Header />*/}
        <View style={styles.mainText}>
          <View style={styles.mainTitle}>
            <Text style={styles.title}>Обучение</Text>
            <Text style={styles.title}>1/4</Text>
          </View>
          <LessonList
            numberLesson={'Урок 1'}
            minutes={'38 минут'}
            title={message.Lesson_1.title}
            description={message.Lesson_1.description}
            lesson={'Lesson1'}
            currentRouteName={currentRouteName}
          />

          <LessonList
            numberLesson={'Урок 2'}
            minutes={'40 мин'}
            title={message.Lesson_2.title}
            description={message.Lesson_2.description}
            lesson={'Lesson2'}
            currentRouteName={currentRouteName}
          />
          <LessonList
            numberLesson={'Урок 3'}
            minutes={'57 мин'}
            title={message.Lesson_3.title}
            description={message.Lesson_3.description}
            lesson={'Lesson3'}
            currentRouteName={currentRouteName}
          />
          <LessonList
            numberLesson={'Урок 4'}
            minutes={'59 мин'}
            title={message.Lesson_4.title}
            description={message.Lesson_4.description}
            lesson={'Lesson4'}
            currentRouteName={currentRouteName}
          />
        </View>

        {/*<View style={styles.footer}>*/}
        {/*  <Text style={styles.footerText}>*/}
        {/*    {message.home.overview.footerText}*/}
        {/*    <Text onPress={() => {}} style={styles.footerTextAgree}>*/}
        {/*      {message.home.overview.footerTextAgree}*/}
        {/*    </Text>*/}
        {/*  </Text>*/}
        {/*</View>*/}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Burger;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
  },

  mainText: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    // fontFamily: 'Inter',
    // fontStyle: 'normal',
    // fontWeight: '800',
    // backgroundColor: 'red',
  },
  mainTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 27,
    color: '#0B1633',
  },
  lessonBtn: {
    height: 290,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: '#F8F8F8',
    margin: 2,
  },
  descriptionBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTextDescription: {
    marginRight: 66,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'left',
    color: '#61646F',
  },

  main: {
    // height: HEIGHT,
    // marginVertical: 60,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    // backgroundColor: 'red',
    // color: '#000',
    // fontWeight: '500',
    // marginHorizontal: 5,
    // backgroundColor: 'red',
  },
  mainBonus: {
    width: DEVICE_WIDTH - 65,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 50,
    // padding: 0,
    top: 230,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#D9D9D9',
  },
  mainBonusTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 27,
    bottom: 30,
  },
  btnBonus: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBonus: {
    bottom: 20,
    borderRadius: 6,
  },
  mainBonusLink: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#9356A1',
  },
  mainLesson: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 250,
  },
  mainLessonText: {
    // width: DEVICE_WIDTH - 50,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 20,
    letterSpacing: 0.3,
    lineHeight: 27,
    color: '#0B1633',
    marginHorizontal: 32,
    marginTop: 25,
  },
  underLine: {
    alignSelf: 'center',
    // marginTop: 2,
    marginVertical: 10,
    paddingHorizontal: 115,
    borderWidth: 1,
    borderColor: '#dfe0e1',
  },
  mainLesson_step: {
    marginHorizontal: 32,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 27,
    alignSelf: 'flex-start',
    color: '#0B1633',
    marginTop: 30,
  },
  taskText: {
    marginHorizontal: 32,
    marginTop: 30,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 27,
    color: '#61646F',
  },
  textInput: {
    width: DEVICE_WIDTH - 65,
    // marginHorizontal: 132,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    alignSelf: 'center',
    marginTop: 30,
    paddingHorizontal: 15,
    // height: 45,
    backgroundColor: '#FCFCFD',
    color: '#8A8C95',
    fontFamily: 'Inter',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  buttonStart: {
    width: DEVICE_WIDTH - 50,
    top: 110,
    borderRadius: 6,
    padding: 15,
  },
  buttonStartText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    bottom: 2,
    color: '#FFFFFF',
  },
  footer: {
    width: DEVICE_WIDTH - 30,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // height: (100 / 375) * DEVICE_WIDTH,
    // paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
    justifyContent: 'center',
    alignItems: 'center',
    top: 140,
    bottom: 0,
    // backgroundColor: 'red',
  },
  footerText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 22,
    textAlign: 'center',
    color: '#909CA9',
  },
  footerTextAgree: {
    // width: DEVICE_WIDTH,
    fontFamily: 'e-Ukraine',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 18,
    color: '#A363A1',
    // flexWrap: 'wrap',
    textDecorationLine: 'underline',
  },
  notAuthText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 27,
    marginTop: 20,
    textAlign: 'center',
    color: '#E24D36',
  },
});
