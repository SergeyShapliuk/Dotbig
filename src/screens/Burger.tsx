import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../assets/image';
import LinearGradient from 'react-native-linear-gradient';
// import GradientText from '../common/utils/GradientText';
import {message} from '../config/translations/resources/en';

import {getStatusBarHeight} from '../common/deviceInfo';
import {DEVICE_WIDTH} from '../constans/constants';
import {useAppNavigation} from '../types/types';

const Burger = () => {
  const navigation = useAppNavigation();
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
        <View style={styles.header}>
          <Image source={Images.iconHome} />
          <Text style={styles.logoText}>Dotbig</Text>
          {/*{!user?.token && (*/}
          <LinearGradient
            colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
            start={{x: 0.0, y: 0.25}}
            end={{x: 1.0, y: 1.0}}
            style={styles.linearGradient}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.startRegisterText}>Кабинет</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity>
            <View style={styles.burger}>
              <View style={styles.burgerLine} />
              <View style={styles.burgerLine} />
              <View style={styles.burgerLine} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mainText}>
          <View style={styles.mainTitle}>
            <Text style={styles.title}>Обучение</Text>
            <Text style={styles.title}>1/4</Text>
          </View>

          <TouchableOpacity style={{marginTop: 30}}>
            <LinearGradient
              colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={styles.linearGradient}>
              <View style={styles.lessonBtn}>
                <View style={styles.mainTitle}>
                  <Text style={styles.title}>Урок 1</Text>
                  <Text style={styles.title}>38 мин</Text>
                </View>
                <View style={styles.underLine} />
                <View style={styles.descriptionBlock}>
                  <Text style={styles.mainTextDescription}>
                    {message.Lesson_1.title} {message.Lesson_1.description}
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

          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => {
              navigation.navigate('Lessons', {screen: 'Lesson_2'});
            }}>
            {/*<LinearGradient*/}
            {/*  colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}*/}
            {/*  start={{x: 0.0, y: 1.0}}*/}
            {/*  end={{x: 1.0, y: 1.0}}*/}
            {/*  style={styles.linearGradient}>*/}
            <View style={styles.lessonBtn}>
              <View style={styles.mainTitle}>
                <Text style={styles.title}>Урок 2</Text>
                <Text style={styles.title}>40 мин</Text>
              </View>
              <View style={styles.underLine} />
              <View style={styles.descriptionBlock}>
                <Text style={styles.mainTextDescription}>
                  {message.Lesson_2.title} {message.Lesson_2.description}
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
            {/*</LinearGradient>*/}
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop: 20}}>
            {/*<LinearGradient*/}
            {/*  colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}*/}
            {/*  start={{x: 0.0, y: 1.0}}*/}
            {/*  end={{x: 1.0, y: 1.0}}*/}
            {/*  style={styles.linearGradient}>*/}
            <View style={styles.lessonBtn}>
              <View style={styles.mainTitle}>
                <Text style={styles.title}>Урок 3</Text>
                <Text style={styles.title}>57 мин</Text>
              </View>
              <View style={styles.underLine} />
              <View style={styles.descriptionBlock}>
                <Text style={styles.mainTextDescription}>
                  {message.Lesson_3.title} {message.Lesson_3.description}
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
            {/*</LinearGradient>*/}
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop: 20}}>
            {/*<LinearGradient*/}
            {/*  colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}*/}
            {/*  start={{x: 0.0, y: 1.0}}*/}
            {/*  end={{x: 1.0, y: 1.0}}*/}
            {/*  style={styles.linearGradient}>*/}
            <View style={styles.lessonBtn}>
              <View style={styles.mainTitle}>
                <Text style={styles.title}>Урок 4</Text>
                <Text style={styles.title}>59 мин</Text>
              </View>
              <View style={styles.underLine} />
              <View style={styles.descriptionBlock}>
                <Text style={styles.mainTextDescription}>
                  {message.Lesson_4.title} {message.Lesson_4.description}
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
            {/*</LinearGradient>*/}
          </TouchableOpacity>
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
    paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
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
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 6,
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
