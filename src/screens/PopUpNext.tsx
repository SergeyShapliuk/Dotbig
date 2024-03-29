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
import GradientText from '../common/utils/GradientText';
import MemoPopUpCheck from '../components/svg/PopUpCheck';
import MemoPopUpVector from '../components/svg/PopUpVector';
import {useAppNavigation} from '../types/types';
import {useAppDispatch, useAppSelector} from '../store/store';
import Modal from 'react-native-modal/dist/modal';
import {setDisabled} from '../store/authReducer';
import {getStatusBarHeight} from '../common/deviceInfo';

const PopUpActive = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const route = useAppSelector(state => state.authReducer.route);

  const onChangeHandler = () => {
    console.log('routrPopup:', route);
    navigation.goBack();
    // @ts-ignore
    navigation.navigate(route);
    dispatch(setDisabled({value: false}));
  };
  return (
    <Modal
      isVisible={true}
      backdropOpacity={0.5}
      coverScreen={false}
      style={styles.modal}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imgButton}
          onPress={() => navigation.goBack()}
          hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
          <Image source={Images.iconBack} style={styles.iconBack} />
        </TouchableOpacity>
        <View style={styles.checkIcon}>
          <MemoPopUpCheck />
          <MemoPopUpVector style={{position: 'absolute'}} />
          <View style={styles.circle} />
        </View>
        <GradientText text={'Поздравляем!'} style={styles.title} />
        <Text style={styles.textDescription}>
          Вскоре с Вами свяжется куратор для проверки домашнего задания! А пока
          переходите к следующему уроку
        </Text>
        <TouchableOpacity onPress={onChangeHandler} style={styles.button}>
          <Text style={styles.buttonText}>Следующий урок </Text>
          <Image source={Images.diagonalArrow} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default PopUpActive;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 12,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  modal: {
    paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
  },
  imgButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: '#e0e0e1',
    resizeMode: 'contain',
    top: 20,
    right: 20,
  },
  iconBack: {
    color: '#FFFFFF',
    resizeMode: 'contain',
  },
  circle: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: '#D58EA4',
  },
  checkIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '900',
    fontSize: 27,
    lineHeight: 34,
    textAlign: 'center',
    marginTop: 100,
    color: 'black',
  },
  textDescription: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 20,
    color: '#2A334C',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 17,
    borderRadius: 6,
    marginVertical: 20,
    backgroundColor: '#0E1D45',
  },
  buttonText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
    paddingHorizontal: 10,
    color: '#FFFFFF',
  },
});
