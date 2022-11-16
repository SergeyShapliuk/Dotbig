import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getStatusBarHeight} from '../common/deviceInfo';

// import {DEVICE_WIDTH} from '../constans/constants';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../assets/image';

// import {useNavigationState} from '@react-navigation/native';
import {useAppSelector} from '../store/store';
import {useLessonAppNavigation} from '../types/types';
// import {useLessonAppNavigation} from '../types/types';

// const wait = (timeout: any) => {
//   // @ts-ignore
//   return new Promise(resolve => setTimeout(resolve, timeout));
// };

type BottomTabPropsType = {
  step?: boolean;
  screen?: string;
};
const BottomTab = ({step, screen}: BottomTabPropsType) => {
  const lessonStep = useAppSelector(state => state.mainReducer.lesson_step);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [falses, setfalses] = useState<boolean>(true);
  const navigation = useLessonAppNavigation();
  console.log('boooorrrwm', disabled);
  // const {state, navigation, descriptors, NavigationContent} =
  //   useNavigationBuilder(TabRouter, {
  //     children: 'tab',
  //     screenOptions: {},
  //     initialRouteName: 'Lesson_1',
  //   });
  // const ref = useRef<any>(null);
  // const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);
  useEffect(() => {
    const disabledBtn = navigation.addListener('blur', () => {
      setDisabled(true);
    });
    return disabledBtn;
    // BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    // return () => {
    //   BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    // };
  }, [disabled, navigation]);
  // const handleBackPress = () => {
  //   if (ref.current) {
  //     ref.current.navigation.goBack();
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // onBack();
  //   // return true;
  // };
  const onBack = () => {
    navigation.goBack();
  };

  const next = () => {
    if (step) {
      // @ts-ignore
      navigation.navigate(screen);
    }
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
      <TouchableOpacity
        onPress={onBack}
        disabled={false}
        activeOpacity={falses ? 0.2 : 0.1}>
        {
          <LinearGradient
            colors={
              falses
                ? ['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']
                : ['#909CA9', '#909CA9']
            }
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            style={styles.linearGradient}>
            <View style={styles.button}>
              <Image
                source={Images.diagonalArrow}
                style={
                  falses
                    ? styles.imgArrow
                    : [styles.imgArrow, {tintColor: '#909CA9'}]
                }
              />
              <Text
                style={
                  falses
                    ? [styles.btnText, {textAlign: 'left'}]
                    : [styles.btnText, {textAlign: 'left', color: '#909CA9'}]
                }>
                Предыдущий урок
              </Text>
            </View>
          </LinearGradient>
        }
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.btnBroker}>
          <Image source={Images.iconScreen} />
          <Text style={styles.btnBrokerText}>Кабинет брокера</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={next} disabled={!step}>
        <LinearGradient
          colors={
            step
              ? ['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']
              : ['#909CA9', '#909CA9']
          }
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.linearGradient}>
          <View style={styles.button}>
            <Text
              style={
                step
                  ? [styles.btnText, {textAlign: 'right'}]
                  : [styles.btnText, {textAlign: 'right', color: '#909CA9'}]
              }>
              Следующий урок
            </Text>
            <Image
              source={Images.diagonalArrow}
              style={!step && {tintColor: '#909CA9'}}
            />
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
    // margin: 0,
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
