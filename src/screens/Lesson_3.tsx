import React, {useCallback} from 'react';

import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {DEVICE_WIDTH} from '../constans/constants';

import {useAppNavigation} from '../types/types';
import {message} from '../config/translations/resources/en';
import {getStatusBarHeight} from '../common/deviceInfo';
import VideoPlayer from '../components/VideoPlayers';
import GradientText from '../common/utils/GradientText';
import CheckBoxTxt from '../components/CheckBox';
import {setLesson3Step, setProgressBar3} from '../store/mainReducer';
import {useAppDispatch, useAppSelector} from '../store/store';
import {useFocusEffect} from '@react-navigation/native';
import {setDisabled, setLessonProgress, setRoute} from '../store/authReducer';

const Lesson_3 = () => {
  const lessonNumber = 'lesson3';
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const lesson3 = useAppSelector(state => state.mainReducer.lesson_3);
  const progressBar3 = useAppSelector(state => state.mainReducer.progressBar3);
  const login = useAppSelector(state => state.mainReducer.login);
  const route = useAppSelector(state => state.authReducer.route);
  console.log('route', route);
  useFocusEffect(
    useCallback(() => {
      if (lesson3[2].isDone) {
        dispatch(setDisabled({value: true}));
        dispatch(setRoute({value: 'Lesson4'}));
      }
    }, [dispatch, lesson3]),
  );
  const onProgress = useCallback(
    (taskNum: number, isDone: boolean) => {
      if (isDone) {
        dispatch(setProgressBar3({value: 33.3}));
        const result = lesson3.map(m =>
          m.step === taskNum ? {...m, isDone: isDone} : m,
        );
        dispatch(setLesson3Step(result));

        const params = {
          email: login.user_email,
          lesson: lessonNumber,
          step: taskNum,
        };
        dispatch(setLessonProgress(params));
      }
      if (lesson3[2].step === taskNum) {
        dispatch(setRoute({value: 'Lesson4'}));
        navigation.navigate('PopUpNext');
      }
    },
    [dispatch, lesson3, login.user_email, navigation],
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
        contentContainerStyle={{paddingBottom: 70}}>
        <View style={styles.mainText}>
          <GradientText text={'Урок 3'} style={styles.mainTextTitleMasked} />
          <Text style={styles.mainTextTitle}>{message.Lesson_3.title}</Text>
          <Text style={styles.mainTextDescription}>
            {message.Lesson_3.description}
          </Text>
        </View>
        <View style={styles.main}>
          <VideoPlayer videoId={'758763314'} />
          <View style={styles.mainLesson}>
            <Text style={styles.mainLessonText}>
              {message.Lesson_3.taskTitle}
            </Text>
            <View style={styles.progressBar}>
              <View
                style={{
                  width: `${progressBar3}%`,
                  backgroundColor: '#8046A2',
                  borderRadius: 6,
                }}
              />
            </View>
            <View style={styles.underLine} />
            <Text style={styles.mainLesson_step}>
              {message.Lesson_3.step_1}
            </Text>
            <CheckBoxTxt
              step={lesson3[0].step}
              isDone={lesson3[0].isDone}
              onProgress={onProgress}
            />
            <View style={styles.underLine} />
            {lesson3[0].isDone && (
              <View>
                <Text style={styles.mainLesson_step}>
                  {message.Lesson_3.step_2}
                </Text>
                <View style={{height: 180, marginTop: 20, alignSelf: 'center'}}>
                  <VideoPlayer videoId={'758763314'} />
                </View>
                <CheckBoxTxt
                  step={lesson3[1].step}
                  isDone={lesson3[1].isDone}
                  onProgress={onProgress}
                />
                <View style={styles.underLine} />
              </View>
            )}
            {lesson3[1].isDone && (
              <View>
                <Text style={styles.mainLesson_step}>
                  {message.Lesson_3.step_3}
                </Text>
                <Text style={styles.taskText}>{message.Lesson_3.task_1}</Text>
                <Text style={styles.taskText}>{message.Lesson_3.task_2}</Text>
                <Text style={styles.taskText}>{message.Lesson_3.task_3}</Text>
                <CheckBoxTxt
                  step={lesson3[2].step}
                  isDone={lesson3[2].isDone}
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
export default Lesson_3;

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
    color: 'black',
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
  mainLesson: {
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
  progressBar: {
    width: DEVICE_WIDTH - 60,
    flexDirection: 'row',
    marginTop: 15,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
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
  taskText: {
    width: DEVICE_WIDTH - 60,
    marginTop: 20,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'left',
    color: '#61646F',
  },
});
