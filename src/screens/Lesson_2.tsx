import React, {useCallback, useState} from 'react';
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
} from 'react-native';
import {DEVICE_WIDTH} from '../constans/constants';
import {Images} from '../assets/image';
import {useLessonAppNavigation} from '../types/types';
import {message} from '../config/translations/resources/en';
import {getStatusBarHeight} from '../common/deviceInfo';
import VideoPlayer from '../components/VideoPlayers';
// import MaskedView from '@react-native-masked-view/masked-view';
import GradientText from '../common/utils/GradientText';
// import CheckBox from '@react-native-community/checkbox';
import CheckBoxTxt from '../components/CheckBox';
import LessonTextInput from '../components/LessonTextInput';
import {setLesson2Step, setProgressBar2} from '../store/mainReducer';
import {useAppDispatch, useAppSelector} from '../store/store';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setDisabled, setLessonProgress, setRoute} from '../store/authReducer';
// import Header from '../components/Header';

// import {LinearGradientText} from 'react-native-linear-gradient-text';
// import {useFocusEffect} from '@react-navigation/native';

// import {home} from '../assets/img/uri';

const wait = (timeout: any) => {
  // @ts-ignore
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Lesson_2 = () => {
  const lessonNumber = 'lesson2';
  const dispatch = useAppDispatch();
  const navigation = useLessonAppNavigation();

  const [input, setInput] = useState<string>('');
  const [disabledChecked, setDisabledChecked] = useState<boolean>(false);
  const lesson2 = useAppSelector(state => state.mainReducer.lesson_2);
  const progressBar2 = useAppSelector(state => state.mainReducer.progressBar2);
  const login = useAppSelector(state => state.mainReducer.login);
  const route = useAppSelector(state => state.authReducer.route);
  console.log('route', route);
  useFocusEffect(() => {
    if (lesson2[2].isDone) {
      dispatch(setDisabled({value: true}));
      dispatch(setRoute({value: 'Lesson3'}));
    }
  });
  const onProgress = useCallback(
    (taskNum: number, isDone: boolean) => {
      if (isDone) {
        dispatch(setProgressBar2({value: 100}));
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
        // dispatch(setDisabled({value: true}));
        dispatch(setRoute({value: 'Lesson3'}));
        navigation.navigate('PopUpNext');
      }
    },
    [dispatch, lesson2, login.user_email, navigation],
  );

  console.log('props', navigation);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  // if (true) {
  //   navigation.navigate({
  //     key: 'Lesson_2-F8BBLOuKJCnjYvqdryicj',
  //     params: 'Lesson_3',
  //   });
  // }
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
        contentContainerStyle={{paddingBottom: 70}}>
        {/*<Header />*/}

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
                  width: progressBar2,
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

        {/*<View style={styles.footer}>*/}
        {/*  <Text style={styles.footerText}>*/}
        {/*    {message.home.overview.footerText}*/}
        {/*    <Text onPress={() => {}} style={styles.footerTextAgree}>*/}
        {/*      {message.home.overview.footerTextAgree}*/}
        {/*    </Text>*/}
        {/*  </Text>*/}
        {/*</View>*/}
      </ScrollView>
      {/*<BottomTab step={step3} screen={'Lesson_3'} />*/}
    </SafeAreaView>
  );
};
export default Lesson_2;

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
  header: {
    // width: DEVICE_WIDTH,
    height: 66,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight(0) : 0,
    // marginTop: 10,
    // paddingHorizontal: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B1633',
  },
  logoText: {
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: -2,
    marginRight: 70,
    bottom: 2,
    left: 5,
    resizeMode: 'contain',
    color: '#FFFFFF',
    // position: "absolute",
  },
  loginRegister: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: 'white',
    margin: 2,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  startRegisterText: {
    paddingHorizontal: 8,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 25,
    textAlign: 'center',
    marginBottom: 2,
    padding: 3,
    color: '#FFFFFF',
  },
  burger: {
    width: 45,
    height: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 15,
    // marginHorizontal: 5,
    backgroundColor: '#3C455C',
    // zIndex: 1,
  },
  burgerLine: {
    width: 18,
    height: 1.5,
    margin: 1.5,
    backgroundColor: '#FFFFFF',
    // zIndex: 3,
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
  imgBonus: {
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
    textAlign: 'justify',
    color: '#61646F',
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
