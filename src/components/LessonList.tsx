import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../assets/image';
import {useAppNavigation} from '../types/types';
import CheckLesson from './svg/CheckLesson';
import {useAppSelector} from '../store/store';

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
  const navigation = useAppNavigation();
  const route = useAppSelector(state => state.authReducer.route);
  const onLessonHandler = () => {
    navigation.goBack();
    // @ts-ignore
    navigation.navigate(lesson);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={onLessonHandler}
        disabled={!success && lesson !== currentRouteName && lesson !== route}
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
  underLine: {
    alignSelf: 'center',
    marginVertical: 10,
    paddingHorizontal: 115,
    borderWidth: 1,
    borderColor: '#dfe0e1',
  },
});
