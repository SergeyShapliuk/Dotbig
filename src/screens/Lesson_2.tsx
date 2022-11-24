import React, {useCallback, useState} from 'react';
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
  Linking,
} from 'react-native';
import {DEVICE_WIDTH} from '../constans/constants';
import {Images} from '../assets/image';
import {useAppNavigation} from '../types/types';
import {message} from '../config/translations/resources/en';
import {getStatusBarHeight} from '../common/deviceInfo';
import VideoPlayer from '../components/VideoPlayers';
import GradientText from '../common/utils/GradientText';
import CheckBoxTxt from '../components/CheckBox';
import LessonTextInput from '../components/LessonTextInput';
import {setLesson2Step, setProgressBar2} from '../store/mainReducer';
import {useAppDispatch, useAppSelector} from '../store/store';
import {useFocusEffect} from '@react-navigation/native';
import {setDisabled, setLessonProgress, setRoute} from '../store/authReducer';

const Lesson_2 = () => {
  const lessonNumber = 'lesson2';
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const [input, setInput] = useState<string>('');
  const [disabledChecked, setDisabledChecked] = useState<boolean>(false);
  const lesson2 = useAppSelector(state => state.mainReducer.lesson_2);
  const progressBar2 = useAppSelector(state => state.mainReducer.progressBar2);
  const login = useAppSelector(state => state.mainReducer.login);
  const route = useAppSelector(state => state.authReducer.route);
  console.log('route', route);
  useFocusEffect(
    useCallback(() => {
      if (lesson2[2].isDone) {
        dispatch(setDisabled({value: true}));
        dispatch(setRoute({value: 'Lesson3'}));
      }
    }, [dispatch, lesson2]),
  );
  const onProgress = useCallback(
    (taskNum: number, isDone: boolean) => {
      if (isDone) {
        dispatch(setProgressBar2({value: 33.3}));
        const result = lesson2.map(m =>
          m.step === taskNum ? {...m, isDone: isDone} : m,
        );
        dispatch(setLesson2Step(result));

        const params = {
          email: login.user_email,
          lesson: lessonNumber,
          step: taskNum,
        };
        dispatch(setLessonProgress(params));
      }
      if (lesson2[2].step === taskNum) {
        dispatch(setRoute({value: 'Lesson3'}));
        navigation.navigate('PopUpNext');
      }
    },
    [dispatch, lesson2, login.user_email, navigation],
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
          <GradientText text={'Урок 2'} style={styles.mainTextTitleMasked} />
          <Text style={styles.mainTextTitle}>{message.Lesson_2.title}</Text>
          <Text style={styles.mainTextDescription}>
            {message.Lesson_2.description}
          </Text>
        </View>
        <View style={styles.main}>
          <VideoPlayer videoId={'744085304'} />
          <View style={styles.mainBonus}>
            <Text style={styles.mainBonusTitle}>
              {message.Lesson_2.bonusTitle}
            </Text>
            <TouchableOpacity
              style={styles.btnBonus}
              onPress={() =>
                Linking.openURL(
                  'https://ru.dotbig.study/files/dotbig/lesson2/bonus.pdf',
                )
              }>
              <Image source={Images.btnBonus} style={styles.imgBonus} />
              <Text style={styles.mainBonusLink}>{message.Lesson_2.bonus}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mainLesson}>
            <Text style={styles.mainLessonText}>
              {message.Lesson_2.taskTitle}
            </Text>
            <View style={styles.progressBar}>
              <View
                style={{
                  width: `${progressBar2}%`,
                  backgroundColor: '#8046A2',
                  borderRadius: 6,
                }}
              />
            </View>
            <View style={styles.underLine} />
            <Text style={styles.mainLesson_step}>
              {message.Lesson_2.step_1}
            </Text>
            <CheckBoxTxt
              step={lesson2[0].step}
              isDone={lesson2[0].isDone}
              onProgress={onProgress}
            />
            <View style={styles.underLine} />
            {lesson2[0].isDone && (
              <View>
                <Text style={styles.mainLesson_step}>
                  {message.Lesson_2.step_2}
                </Text>
                <View style={{height: 180, marginTop: 20, alignSelf: 'center'}}>
                  <VideoPlayer videoId={'744085304'} />
                </View>
                <CheckBoxTxt
                  step={lesson2[1].step}
                  isDone={lesson2[1].isDone}
                  onProgress={onProgress}
                />
                <View style={styles.underLine} />
              </View>
            )}
            {lesson2[1].isDone && (
              <View>
                <Text style={styles.mainLesson_step}>
                  {message.Lesson_2.step_3}
                </Text>
                <Text style={styles.taskText}>{message.Lesson_2.task}</Text>
                <LessonTextInput
                  input={input}
                  placeholder={'$100 000'}
                  setInput={setInput}
                  disabledChecked={disabledChecked}
                />
                <CheckBoxTxt
                  step={lesson2[2].step}
                  isDone={lesson2[2].isDone}
                  onProgress={onProgress}
                  input1={input}
                  setDisabledChecked={setDisabledChecked}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Lesson_2;

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
  mainBonus: {
    width: DEVICE_WIDTH - 60,
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
    textAlign: 'justify',
    color: '#61646F',
  },
});
