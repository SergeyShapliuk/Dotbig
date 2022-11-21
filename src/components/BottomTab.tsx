import React from 'react';
import {
  Image,
  Linking,
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
import {useAppDispatch, useAppSelector} from '../store/store';
import {useLessonAppNavigation} from '../types/types';
import {setDisabled} from '../store/authReducer';

// import {useLessonAppNavigation} from '../types/types';

// const wait = (timeout: any) => {
//   // @ts-ignore
//   return new Promise(resolve => setTimeout(resolve, timeout));
// };

const BottomTab = () => {
  const dispatch = useAppDispatch();

  const disabled = useAppSelector(state => state.authReducer.disabled);
  const route = useAppSelector(state => state.authReducer.route);
  // const [disabled, setDisabled] = useState<boolean>(true);
  const lesson1 = useAppSelector(state => state.mainReducer.lesson_1);
  const lesson2 = useAppSelector(state => state.mainReducer.lesson_2);
  const lesson3 = useAppSelector(state => state.mainReducer.lesson_3);
  const lesson4 = useAppSelector(state => state.mainReducer.lesson_4);
  const navigation = useLessonAppNavigation();
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', () => true);
  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', () => true);
  //   };
  // }, []);
  const sdjasd = navigation;
  console.log('boooorrrwm', disabled);
  console.log('routeBottomtab', sdjasd);
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
  // useEffect(() => {
  //   if (lesson1[3].isDone) {
  //     console.log('bottomdisabled', lesson1[3].isDone);
  //     setDisabled(true);
  //   }
  //   // BackHandler.addEventListener('hardwareBackPress', handleBackPress);
  //   // return () => {
  //   //   BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  //   // };
  // }, []);
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
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  const next = () => {
    console.log('nextBut', route);
    // @ts-ignore
    navigation.navigate(route);
    dispatch(setDisabled({value: false}));

    // if (lesson2[2].isDone) {
    //   console.log('nextBut');
    //   navigation.navigate('Lesson_3');
    //   dispatch(setDisabled({value: false}));
    // }
    // if (lesson3[2].isDone) {
    //   console.log('nextBut');
    //   navigation.navigate('Lesson_4');
    //   dispatch(setDisabled({value: false}));
    // }
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
      <TouchableOpacity onPress={onBack} disabled={false}>
        {
          <LinearGradient
            colors={['#EAB9AC', '#D58EA4', '#A968A0', '#7070a2']}
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
        }
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://ru.dotbig.study/redirect-personal-account/?email={{email}}',
          )
        }>
        <View style={styles.btnBroker}>
          <Image source={Images.iconScreen} />
          <Text style={styles.btnBrokerText}>Кабинет брокера</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={next} disabled={!disabled}>
        <LinearGradient
          colors={
            disabled
              ? ['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']
              : ['#909CA9', '#909CA9']
          }
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.linearGradient}>
          <View style={styles.button}>
            <Text
              style={
                disabled
                  ? [styles.btnText, {textAlign: 'right'}]
                  : [styles.btnText, {textAlign: 'right', color: '#909CA9'}]
              }>
              Следующий урок
            </Text>
            <Image
              source={Images.diagonalArrow}
              style={!disabled && {tintColor: '#909CA9'}}
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
