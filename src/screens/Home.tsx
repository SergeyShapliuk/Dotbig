import React, {useCallback, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
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
} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../constans/constants';
import {Images} from '../assets/image';
import {useAppNavigation} from '../types/types';
import {message} from '../config/translations/resources/en';
import {getStatusBarHeight} from '../common/deviceInfo';
import VideoPlayer from '../components/VideoPlayer';
// import GradientText from '../common/utils/GradientText';
import GradientText from 'react-native-gradient-texts';

// import {home} from '../assets/img/uri';

const wait = (timeout: any) => {
  // @ts-ignore
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = () => {
  const navigation = useAppNavigation();
  const [refreshing, setRefreshing] = useState(false);
  // const play = useRef<any>();
  // const onRefresh = async () => {
  //   setRefreshing({
  //     refreshing: true,
  //     loading1: true,
  //     loading2: true,
  //     loading3: true,
  //     loading4: true,
  //   });
  //   await this.onGetData();
  //   this.setState({refreshing: false});
  // };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#0B1633"
        barStyle="default"
        networkActivityIndicatorVisible={true}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <View style={styles.header}>
          <Image source={Images.iconHome} style={styles.iconHome} />
          <Text style={styles.logoText}>Dotbig</Text>
          {/*{!user?.token && (*/}
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <LinearGradient
              colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={styles.linearGradient}>
              <View style={styles.loginRegister}>
                <Text style={styles.startRegisterText}>{message.login}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {/*// )}*/}
        </View>

        <Image source={Images.bannerHome} style={styles.imgBanner} />
        <View style={styles.mainContent}>
          <View style={styles.textContent}>
            <Text style={styles.mainTextDescription}>
              {message.home.overview.description}
            </Text>
            <Text style={styles.mainTextTitle}>
              Как
              <Text style={{color: '#D58EA4'}}>
                {message.home.overview.titleMasked}
              </Text>
              {/*<GradientText*/}
              {/*  text={'10.000$'}*/}
              {/*  style={styles.mainTextTitleMasked}*/}
              {/*/>*/}
              {message.home.overview.title}
            </Text>
          </View>
          <VideoPlayer />
          <LinearGradient
            colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.buttonStart}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.buttonStartText}>Начать обучение</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              {message.home.overview.footerText}
              <Text onPress={() => {}} style={styles.footerTextAgree}>
                {message.home.overview.footerTextAgree}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1633',
    paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
  },
  play: {
    // position: 'absolute',
    // marginTop: 359,
    // width: 20,
    // height: 20,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  // linearGradientUp: {
  //   position: 'absolute',
  //   width: 416,
  //   height: 416,
  //   left: -208,
  //   top: -208,
  //   opacity: 0.28,
  // },
  // gradientUp: {
  //   position: 'absolute',
  //   width: 416,
  //   height: 416,
  //   left: -108,
  //   top: -108,
  //   borderRadius: 50,
  //   backgroundColor: '#314d94',
  //   opacity: 0.05,
  // },
  // gradientUps: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  // },
  header: {
    // width: DEVICE_WIDTH,
    height: 66,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight(0) : 0,
    // marginTop: 10,
    // paddingHorizontal: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  iconHome: {
    width: 24.15,
    height: 19.04,
    // marginLeft: 30,
    // right: '77%',
    resizeMode: 'contain',
  },

  logoText: {
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: -2,
    marginRight: 70,
    bottom: 2,
    left: 5,
    resizeMode: 'contain',
    color: '#0B1633',
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
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 2,
    color: '#000000',
  },
  imgBanner: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    resizeMode: 'contain',
    position: 'absolute',
    top: 120,
    zIndex: -1,
  },
  mainContent: {
    // width: DEVICE_WIDTH,
    // height: (550 / 375) * DEVICE_WIDTH,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // color: '#000',
    // fontWeight: '500',
    // marginHorizontal: 5,
  },
  textContent: {
    marginTop: 45,
    marginHorizontal: 32,
  },
  mainTextDescription: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    // padding: 50,
    color: '#FFFFFF',
  },
  mainTextTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 34,
    textAlign: 'center',
    // padding: 50,
    // marginTop: 10,
    color: '#FFFFFF',
  },
  mainTextTitleMasked: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 24,
    // margin: 2,
    textAlign: 'center',
    // left: 10,
    // padding: 60,
    marginTop: 27,
    color: 'black',
  },
  buttonStart: {
    width: DEVICE_WIDTH - 50,
    marginHorizontal: 32,
    marginTop: 60,
    borderRadius: 6,
    padding: 15,
    backgroundColor: 'blue',
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
    // top: 140,
    marginTop: 35,
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
});
