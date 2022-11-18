import React, {useCallback, useEffect, useState} from 'react';

import {
  Image,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Linking,
  BackHandler,
} from 'react-native';
import {DEVICE_WIDTH} from '../constans/constants';
import {Images} from '../assets/image';
import {message} from '../config/translations/resources/en';
import {getStatusBarHeight} from '../common/deviceInfo';
import VideoPlayer from '../components/VideoPlayers';
import GradientText from '../common/utils/GradientText';
import CheckBoxTxt from '../components/CheckBox';
import LessonTextInput from '../components/LessonTextInput';
import BonusContentWithAudio from '../components/BonusContentWithAudio';
import Header from '../components/Header';
import {useAppDispatch, useAppSelector} from '../store/store';
import {
  setDisabled,
  setLesson1Step,
  setLessonProgress,
  setProgressBar1,
  setRoute,
} from '../store/mainReducer';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const wait = (timeout: any) => {
  // @ts-ignore
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Lesson_1 = () => {
  const lessonNumber = 'lesson1';
  const dispatch = useAppDispatch();
  const lesson1 = useAppSelector(state => state.mainReducer.lesson_1);
  const progressBar1 = useAppSelector(state => state.mainReducer.progressBar1);
  console.log('reduserLesson1', lesson1);

  // const [steps1, setSteps1] = useState<boolean>(false);
  // const [step2, setStep2] = useState<boolean>(false);
  // const [step3, setStep3] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState(false);
  const [progressBar, setProgressBar] = useState<number>(0);
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [input3, setInput3] = useState<string>('');
  const [disabledChecked, setDisabledChecked] = useState<boolean>(false);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', () => true);
    };
  }, []);
  console.log('progressbar', progressBar1);
  useFocusEffect(() => {
    if (lesson1[3].isDone) {
      console.log('lesson1useeffect');
      dispatch(setDisabled({value: true}));
      dispatch(setRoute({value: 'Lesson2'}));
    }
  });
  const onProgress = useCallback(
    async (taskNum: number, isDone: boolean) => {
      if (isDone) {
        setProgressBar(prevState => prevState + 75);
        dispatch(setProgressBar1({value: progressBar}));
      }
      if (!isDone) {
        setProgressBar(prevState => prevState - 75);
        dispatch(setProgressBar1({value: progressBar}));
      }
      const result = lesson1.map(m =>
        m.step === taskNum ? {...m, isDone: isDone} : m,
      );
      dispatch(setLesson1Step(result));
      const email = await AsyncStorage.getItem('dotbig_email');
      const params = {
        email: email,
        lesson: lessonNumber,
        step: taskNum,
      };
      dispatch(setLessonProgress(params));
    },
    [lesson1, dispatch, progressBar],
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'#FFFFFF'}
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60}}>
        {/*<Header />*/}
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
                  width: progressBar1,
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
                <CheckBoxTxt
                  step={lesson1[3].step}
                  isDone={lesson1[3].isDone}
                  onProgress={onProgress}
                />
              </View>
            )}
            {/*<Text style={styles.notAuthText}>{message.alert.notAuth}</Text>*/}
          </View>
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
      {/*<BottomTab step={false} screen={'Lesson_2'} />*/}
    </SafeAreaView>
  );
};
export default Lesson_1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
  },
  play: {
    position: 'absolute',
    marginTop: 359,
    width: 20,
    height: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgBanner: {
    // width: DEVICE_WIDTH,
    // height: DEVICE_HEIGHT,
    // resizeMode: 'contain',
    // position: 'absolute',
    // top: 120,
    // zIndex: -1,
  },

  mainText: {
    paddingHorizontal: 32,
    paddingVertical: 30,
    // fontFamily: 'Inter',
    // fontStyle: 'normal',
    // fontWeight: '800',
    // backgroundColor: 'red',
  },
  mainTextTitleMasked: {
    // fontFamily: 'Inter',
    // fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 24,
    lineHeight: 34,
    color: 'black',
  },
  mainTextTitle: {
    // fontFamily: 'Sniglet',
    // fontStyle: 'normal',
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
    width: DEVICE_WIDTH - 60,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 50,
    // padding: 0,
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
    // width: DEVICE_WIDTH - 50,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 27,
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
    // marginHorizontal: 132,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    alignSelf: 'center',
    marginTop: 20,
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
