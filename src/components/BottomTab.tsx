import React, {useCallback} from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../assets/image';
import {useAppDispatch, useAppSelector} from '../store/store';
import {useAppNavigation} from '../types/types';
import {setDisabled} from '../store/authReducer';

const BottomTab = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const disabled = useAppSelector(state => state.authReducer.disabled);
  const route = useAppSelector(state => state.authReducer.route);
  const link = useAppSelector(state => state.mainReducer.link);

  const onBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  const next = () => {
    // @ts-ignore
    navigation.navigate(route);
    dispatch(setDisabled({value: false}));
  };
  const onLinking = useCallback(async () => {
    if (link.url) {
      await Linking.openURL(link.url);
    } else {
      return false;
    }
  }, [link.url]);
  return (
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
      <LinearGradient
        colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
        start={{x: 0.0, y: 0.25}}
        end={{x: 1.0, y: 1.0}}
        style={styles.linearGradient}>
        <TouchableOpacity onPress={onLinking}>
          <View style={styles.btnBroker}>
            <Image source={Images.iconScreen} />
            <Text style={styles.btnBrokerText}>Кабинет брокера</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
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
  );
};
export default BottomTab;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 80,
    bottom: 0,
    backgroundColor: '#0B1633',
  },
  linearGradient: {
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
    borderRadius: 7,
    // backgroundColor: '#909CA9',
  },
  btnText: {
    width: 77,
    color: '#FFFFFF',
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
