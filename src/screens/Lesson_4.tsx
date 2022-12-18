import React, {useCallback} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {DEVICE_WIDTH, scaleWidth} from '../constans/constants';
import {Images} from '../assets/image';
import {message} from '../config/translations/resources/en';
import {getStatusBarHeight} from '../common/deviceInfo';
import VideoPlayer from '../components/VideoPlayers';
import GradientText from '../common/utils/GradientText';
import CheckBoxTxt from '../components/CheckBox';
import {useAppDispatch, useAppSelector} from '../store/store';
import {setLesson4Step} from '../store/mainReducer';
import {useAppNavigation} from '../types/types';
import {setLessonProgress} from '../store/authReducer';

const Lesson_4 = () => {
  const lessonNumber = 'lesson4';
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const lesson4 = useAppSelector(state => state.mainReducer.lesson_4);
  const login = useAppSelector(state => state.mainReducer.login);
  const onProgress = useCallback(
    (taskNum: number, isDone: boolean) => {
      if (isDone) {
        const result = lesson4.map(m =>
          m.step === taskNum ? {...m, isDone: isDone} : m,
        );
        dispatch(setLesson4Step(result));
        const params = {
          email: login.user_email,
          lesson: lessonNumber,
          step: taskNum,
        };
        dispatch(setLessonProgress(params));
      }
      if (lesson4[1].step === taskNum) {
        navigation.navigate('PopUpCongrats');
      }
    },
    [dispatch, lesson4, login.user_email, navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'#FFFFFF'}
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 170}}>
        <View style={styles.mainText}>
          <GradientText text={'Урок 4'} style={styles.mainTextTitleMasked} />
          <Text style={styles.mainTextTitle}>{message.Lesson_4.title}</Text>
          <Text style={styles.mainTextDescription}>
            {message.Lesson_4.description}
          </Text>
        </View>
        <View style={styles.main}>
          <VideoPlayer videoId={'744079947'} poster={Images.poster4} />
          <View style={styles.mainBonus}>
            <Text style={styles.mainBonusTitle}>
              {message.Lesson_4.bonusTitle}
            </Text>
            <TouchableOpacity
              style={styles.btnBonus}
              onPress={() => navigation.navigate('Bonus_4')}>
              <Image source={Images.btnBonus} style={styles.imgBonus} />
              <Text style={styles.mainBonusLink}>{message.Lesson_4.bonus}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mainLesson}>
            <Text style={styles.mainLessonText}>
              {message.Lesson_4.taskTitle}
            </Text>
            <View style={styles.underLine} />
            <Text style={styles.mainLesson_step}>
              {message.Lesson_4.step_1}
            </Text>
            <CheckBoxTxt
              step={lesson4[0].step}
              isDone={lesson4[0].isDone}
              onProgress={onProgress}
            />
            <View style={styles.underLine} />
            {lesson4[0].isDone && (
              <View>
                <Text style={styles.mainLesson_step}>
                  {message.Lesson_4.step_2}
                </Text>
                <View style={{height: 180, marginTop: 20, alignSelf: 'center'}}>
                  <VideoPlayer videoId={'781593945'} poster={Images.preview4} />
                </View>
                <CheckBoxTxt
                  step={lesson4[1].step}
                  isDone={lesson4[1].isDone}
                  onProgress={onProgress}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Lesson_4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
  },
  mainText: {
    paddingHorizontal: 32,
    paddingVertical: 30,
    marginTop: 20,
  },
  mainTextTitleMasked: {
    fontWeight: '900',
    fontSize: 24,
    lineHeight: 34,
    color: 'red',
  },
  mainTextTitle: {
    fontWeight: '900',
    marginTop: 15,
    fontSize: 34,
    lineHeight: 41,
    color: '#0B1633',
  },

  mainTextDescription: {
    marginTop: 15,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 27,
    color: '#61646F',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBonus: {
    width: scaleWidth(300),
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
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
    marginBottom: 30,
  },
  btnBonus: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBonus: {
    marginBottom: 20,
    borderRadius: 6,
  },
  mainBonusLink: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#9356A1',
  },
  mainLesson: {
    marginHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  mainLessonText: {
    width: DEVICE_WIDTH - 60,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'center',
    color: '#0B1633',
    marginTop: 25,
  },
  underLine: {
    width: DEVICE_WIDTH - 60,
    alignSelf: 'center',
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#dfe0e1',
  },
  mainLesson_step: {
    width: DEVICE_WIDTH - 60,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'left',
    color: '#0B1633',
    marginTop: 30,
  },
});
