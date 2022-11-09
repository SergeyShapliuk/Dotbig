import React, {useEffect, useRef} from 'react';
import {
  BackHandler,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getStatusBarHeight} from '../common/deviceInfo';
import {useAppNavigation} from '../types/types';
// import {DEVICE_WIDTH} from '../constans/constants';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../assets/image';

// const wait = (timeout: any) => {
//   // @ts-ignore
//   return new Promise(resolve => setTimeout(resolve, timeout));
// };
const BottomTab = () => {
  const navigation = useAppNavigation();
  const ref = useRef<any>(null);
  // const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);
  const handleBackPress = () => {
    if (ref.current) {
      ref.current.navigation.goBack();
      return true;
    } else {
      return false;
    }
    // onBack();
    // return true;
  };
  const onBack = () => {
    navigation.goBack();
  };

  const next = () => {
    navigation.navigate('Lessons', {screen: 'Lesson_4'});
  };
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView
    //     refreshControl={
    //       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //     }
    //     showsVerticalScrollIndicator={false}
    //     contentContainerStyle={{paddingBottom: 0}}>
    //     <View />
    //   </ScrollView>
    <View style={styles.tabContainer}>
      <TouchableOpacity onPress={onBack}>
        <LinearGradient
          colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.linearGradient}>
          <View style={styles.button}>
            <Image source={Images.diagonalArrow} style={styles.imgArrow} />
            <Text style={[styles.btnText, {textAlign: 'left'}]}>
              Предыдущий урок
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.btnBroker}>
          <Image source={Images.iconScreen} />
          <Text style={styles.btnBrokerText}>Кабинет брокера</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={next}>
        <LinearGradient
          colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.linearGradient}>
          <View style={styles.button}>
            <Text style={[styles.btnText, {textAlign: 'right'}]}>
              Следующий урок
            </Text>
            <Image source={Images.diagonalArrow} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
    // </SafeAreaView>
  );
};
export default BottomTab;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
  },
  tabContainer: {
    // position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    // width: DEVICE_WIDTH,
    height: 80,
    bottom: 0,
    backgroundColor: '#0B1633',
  },
  linearGradient: {
    // // alignItems: 'center',
    // justifyContent: 'flex-start',
    borderRadius: 7,
  },
  imgArrow: {
    transform: [{scaleX: -1}],
  },
  btnBrokerText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 12,
    textAlign: 'center',
    letterSpacing: 0.3,
    marginBottom: 4,
    color: '#C9CFDF',
  },
  btnBroker: {
    width: 88,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#909CA9',
  },
  btnText: {
    width: 77,
    color: '#FFFFFF',
    // paddingHorizontal: 8,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 11,
    letterSpacing: 0.3,
    lineHeight: 12,

    marginBottom: 2,
  },
  button: {
    width: 109,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#0B1633',
    margin: 2,
  },
});
