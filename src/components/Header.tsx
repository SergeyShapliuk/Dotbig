import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../assets/image';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from '../common/deviceInfo';
import BurgerButton from './BurgerButton';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Images.iconHome} />
      <Text style={styles.logoText}>Dotbig</Text>
      {/*{!user?.token && (*/}
      <LinearGradient
        colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
        start={{x: 0.0, y: 0.25}}
        end={{x: 1.0, y: 1.0}}
        style={styles.linearGradient}>
        <TouchableOpacity>
          <Text style={styles.startRegisterText}>Кабинет</Text>
        </TouchableOpacity>
      </LinearGradient>
      <BurgerButton />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
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
});
