import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GradientText from '../common/utils/GradientText';
import MemoPopUpCheck from '../components/svg/PopUpCheck';
import MemoPopUpVector from '../components/svg/PopUpVector';
import {useAppNavigation} from '../types/types';
import {DEVICE_HEIGHT} from '../constans/constants';
import Modal from 'react-native-modal/dist/modal';
import {useAppDispatch} from '../store/store';
import {getLogout} from '../store/authReducer';

const PopUpLeft = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const routeName = navigation.getState();

  console.log('popupLeft:', routeName);
  const onChangeHandlerLeft = () => {
    navigation.goBack();
    dispatch(getLogout());
  };
  const onChangeHandlerStay = () => {
    navigation.canGoBack()
      ? navigation.goBack()
      : navigation.navigate('Lesson1');
  };
  return (
    <Modal
      isVisible={true}
      deviceHeight={DEVICE_HEIGHT + 50}
      backdropOpacity={0.7}
      coverScreen={false}>
      <View style={styles.container}>
        <View style={styles.checkIcon}>
          <MemoPopUpCheck style={{}} />
          <MemoPopUpVector style={{position: 'absolute'}} />
          <View style={styles.circle} />
        </View>

        <GradientText
          text={'Вы точно хотите покинуть 4-х дневный марафон?'}
          style={styles.title}
        />
        <Text style={styles.textDescription}>
          Весь ваш прогресс будет потерян.
        </Text>
        <TouchableOpacity onPress={onChangeHandlerLeft} style={styles.button}>
          <Text style={styles.buttonText}>Покинуть</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onChangeHandlerStay} style={styles.button}>
          <Text style={styles.buttonText}>Остаться</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default PopUpLeft;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 12,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
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
    marginTop: 80,
    color: 'black',
  },
  textDescription: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    color: '#2A334C',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 17,
    borderRadius: 6,
    marginTop: 30,
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
