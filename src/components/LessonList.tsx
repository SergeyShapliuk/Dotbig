import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../assets/image';
import {DEVICE_WIDTH} from '../constans/constants';
import {useLessonAppNavigation} from '../types/types';
import CheckLesson from './svg/CheckLesson';

type LessonListType = {
  numberLesson: string;
  minutes: string;
  title: string;
  description: string;
  lesson: string;
  success: boolean;
  currentRouteName?: string;
};

const LessonList = ({
  numberLesson,
  minutes,
  title,
  description,
  lesson,
  success,
  currentRouteName,
}: LessonListType) => {
  const navigation = useLessonAppNavigation();
  const onLessonHandler = () => {
    // @ts-ignore
    navigation.navigate(lesson);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={onLessonHandler}
        disabled={!success}
        style={{marginTop: 30}}>
        <LinearGradient
          colors={
            currentRouteName === lesson
              ? ['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']
              : ['rgba(97,100,111,0)', 'rgba(97,100,111,0)']
          }
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.linearGradient}>
          <View style={styles.lessonBtn}>
            <View style={styles.mainTitle}>
              <Text style={styles.title}>{numberLesson}</Text>
              <Text style={[styles.title, {marginLeft: 60}]}>{minutes}</Text>
              {lesson && success && <CheckLesson style={{top: 20}} />}
            </View>
            <View style={styles.underLine} />
            <View style={styles.descriptionBlock}>
              <Text style={styles.mainTextDescription}>
                {title} {description}
              </Text>
              <Image
                source={Images.diagonalArrow}
                style={{
                  tintColor: '#0B1633',
                  transform: [{rotate: '45deg'}],
                }}
              />
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default LessonList;
const styles = StyleSheet.create({
  mainTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linearGradient: {
    borderRadius: 7,
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 27,
    marginTop: 20,
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
});
