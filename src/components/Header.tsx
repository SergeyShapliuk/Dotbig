import React, {useCallback} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../assets/image';
import LinearGradient from 'react-native-linear-gradient';
import BurgerButton from './BurgerButton';
import {useAppSelector} from '../store/store';

const Header = () => {
  const url = useAppSelector(state => state.mainReducer.link);
  const onLinking = useCallback(async () => {
    console.log('link', url);
    if (url) {
      await Linking.openURL(url);
    } else {
      return false;
    }
  }, [url]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.iconHome} />
        <Text style={styles.logoText}>Dotbig</Text>
        <LinearGradient
          colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
          start={{x: 0.0, y: 0.25}}
          end={{x: 1.0, y: 1.0}}
          style={styles.linearGradient}>
          <TouchableOpacity onPress={onLinking}>
            <Text style={styles.startRegisterText}>Кабинет</Text>
          </TouchableOpacity>
        </LinearGradient>
        <BurgerButton />
      </View>
    </SafeAreaView>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // paddingTop: Platform.OS === 'ios' ? getStatusBarHeight(0) : 0,
  },
  header: {
    height: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B1633',
  },
  logoText: {
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: -1,
    marginRight: 70,
    bottom: 2,
    left: 5,
    resizeMode: 'contain',
    color: '#FFFFFF',
  },
  loginRegister: {
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
});
