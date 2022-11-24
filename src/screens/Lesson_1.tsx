import React, {useCallback, useEffect, useState} from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Linking,
  BackHandler,
  Platform,
} from 'react-native';
import {DEVICE_WIDTH} from '../constans/constants';
import {Images} from '../assets/image';
import {message} from '../config/translations/resources/en';
import VideoPlayer from '../components/VideoPlayers';
import GradientText from '../common/utils/GradientText';
import CheckBoxTxt from '../components/CheckBox';
import LessonTextInput from '../components/LessonTextInput';
import BonusContentWithAudio from '../components/BonusContentWithAudio';
import {useAppDispatch, useAppSelector} from '../store/store';
import {setLesson1Step, setProgressBar1} from '../store/mainReducer';
import {useAppNavigation} from '../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {setDisabled, setLessonProgress, setRoute} from '../store/authReducer';
import {getStatusBarHeight} from '../common/deviceInfo';

const Lesson_1 = () => {
  // const getAll = async () => {
  //   // let keys = [];
  //   try {
  //     // const keys = await AsyncStorage.getAllKeys();
  //     const clear = await AsyncStorage.removeItem('persist:root');
  //     console.log('allKeysren', clear);
  //
  //     // console.log('allKeys', keys);
  //   } catch (e) {
  //     console.log('asybcstor', e);
  //   }
  //   // console.log('allKeys', keys);
  // };
  //
  // getAll();
  // const navigationGroup = useGroupNavigation();

  const lessonNumber = 'lesson1';
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const lesson1 = useAppSelector(state => state.mainReducer.lesson_1);
  const progressBar1 = useAppSelector(state => state.mainReducer.progressBar1);
  const login = useAppSelector(state => state.mainReducer.login);

  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [input3, setInput3] = useState<string>('');
  const [disabledChecked, setDisabledChecked] = useState<boolean>(false);
  const handleBackPress = useCallback(() => {
    navigation.navigate('PopUpLeft');
    return true;
  }, [navigation]);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [handleBackPress]);
  useFocusEffect(
    useCallback(() => {
      if (lesson1[3].isDone) {
        dispatch(setDisabled({value: true}));
        dispatch(setRoute({value: 'Lesson2'}));
      }
    }, [dispatch, lesson1]),
  );
  const onProgress = useCallback(
    (taskNum: number, isDone: boolean) => {
      if (isDone) {
        dispatch(setProgressBar1({value: 25}));
        const result = lesson1.map(m =>
          m.step === taskNum ? {...m, isDone: isDone} : m,
        );
        dispatch(setLesson1Step(result));
        const params = {
          email: login.user_email,
          lesson: lessonNumber,
          step: taskNum,
        };
        dispatch(setLessonProgress(params));
      }
      if (lesson1[3].step === taskNum) {
        dispatch(setRoute({value: 'Lesson2'}));
        navigation.navigate('PopUpNext');
      }
    },
    [dispatch, lesson1, login.user_email, navigation],
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
        contentContainerStyle={{paddingBottom: 60}}>
        <View style={styles.mainText}>
          <GradientText text={'Урок 1'} style={styles.mainTextTitleMasked} />
          <Text style={styles.mainTextTitle}>{message.Lesson_1.title}</Text>
          <Text style={styles.mainTextDescription}>
            {message.Lesson_1.description}
          </Text>
        </View>
        <View style={styles.main}>
          <VideoPlayer videoId={'741155263'} />
          <View style={styles.mainBonus}>
            <Text style={styles.mainBonusTitle}>
              {message.Lesson_1.bonusTitle1}
            </Text>
            <BonusContentWithAudio />
            <Text style={styles.mainBonusDescription}>
              {message.Lesson_1.bonus1}
            </Text>
          </View>
          <View style={styles.mainBonus}>
            <Text style={styles.mainBonusTitle}>
              {message.Lesson_1.bonusTitle2}
            </Text>
            <TouchableOpacity
              style={styles.btnBonus}
              onPress={() =>
                Linking.openURL(
                  'https://ru.dotbig.study/files/dotbig/lesson1/bonus.pdf',
                )
              }>
              <Image source={Images.btnBonus} style={styles.imgBonus2} />
              <Text style={styles.mainBonusLink}>
                {message.Lesson_1.bonus2}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mainLesson}>
            <Text style={styles.mainLessonText}>
              {message.Lesson_1.taskTitle}
            </Text>
            <View style={styles.progressBar}>
              <View
                style={{
                  width: `${progressBar1}%`,
                  backgroundColor: '#8046A2',
                  borderRadius: 6,
                }}
              />
            </View>
            <View style={styles.underLine} />
            <Text style={styles.mainLesson_step}>
              {message.Lesson_1.step_1}
            </Text>
            <CheckBoxTxt
              step={lesson1[0].step}
              isDone={lesson1[0].isDone}
              onProgress={onProgress}
            />
            <View style={styles.underLine} />

            {lesson1[0].isDone && (
              <View>
                <Text style={styles.mainLesson_step}>
                  {message.Lesson_1.step_2}
                </Text>
                <View style={{height: 180, marginTop: 20, alignSelf: 'center'}}>
                  <VideoPlayer videoId={'741155263'} />
                </View>
                <CheckBoxTxt
                  step={lesson1[1].step}
                  isDone={lesson1[1].isDone}
                  onProgress={onProgress}
                />
                <View style={styles.underLine} />
              </View>
            )}
            {lesson1[1].isDone && (
              <View>
                <Text style={styles.mainLesson_step}>
                  {message.Lesson_1.step_3}
                </Text>
                <Text style={styles.taskText}>{message.Lesson_1.task_1}</Text>
                <LessonTextInput
                  input={input1}
                  placeholder={'$18 000'}
                  setInput={setInput1}
                  disabledChecked={disabledChecked}
                />

                <Text style={styles.taskText}>{message.Lesson_1.task_2}</Text>
                <LessonTextInput
                  input={input2}
                  placeholder={'$450 000'}
                  setInput={setInput2}
                  disabledChecked={disabledChecked}
                />
                <Text style={styles.taskText}>{message.Lesson_1.task_3}</Text>
                <LessonTextInput
                  input={input3}
                  placeholder={'$15 000 000'}
                  setInput={setInput3}
                  disabledChecked={disabledChecked}
                />
                <CheckBoxTxt
                  step={lesson1[2].step}
                  isDone={lesson1[2].isDone}
                  onProgress={onProgress}
                  input1={input1}
                  input2={input2}
                  input3={input3}
                  setDisabledChecked={setDisabledChecked}
                />
                <View style={styles.underLine} />
              </View>
            )}
            {lesson1[2].isDone && (
              <View>
                <Text style={styles.mainLesson_step}>
                  {message.Lesson_1.step_4}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      'https://ru.dotbig.study/redirect-personal-account/?email={{email}}',
                    )
                  }
                  style={styles.button}>
                  <Text style={styles.buttonText}>
                    Перейдите в ваш личный кабинет
                  </Text>
                  <Image source={Images.diagonalArrow} />
                </TouchableOpacity>
                <CheckBoxTxt
                  step={lesson1[3].step}
                  isDone={lesson1[3].isDone}
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
export default Lesson_1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
  },
  mainText: {
    marginTop: 20,
    paddingHorizontal: 32,
    paddingVertical: 30,
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
    // fontFamily: 'Inter',
    // fontStyle: 'normal',
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

  imgBonus2: {
    marginBottom: 20,
    borderRadius: 6,
  },
  mainBonusDescription: {
    textAlign: 'center',
    color: '#0B1633',
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
    textAlign: 'left',
    color: '#61646F',
  },
  textInput: {
    width: DEVICE_WIDTH - 60,
    alignSelf: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FCFCFD',
    color: '#8A8C95',
    fontFamily: 'Inter',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  button: {
    width: DEVICE_WIDTH - 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 17,
    borderRadius: 6,
    marginTop: 20,
    backgroundColor: '#0E1D45',
  },
  buttonText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
    paddingHorizontal: 10,
    color: '#FFFFFF',
  },
});
