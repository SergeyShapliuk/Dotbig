import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../assets/image';
import GradientText from '../common/utils/GradientText';
import MemoPopUpCheck from '../components/svg/PopUpCheck';
import MemoPopUpVector from '../components/svg/PopUpVector';
import { useAppNavigation, useLessonAppNavigation } from "../types/types";
import {DEVICE_HEIGHT} from '../constans/constants';
import Modal from 'react-native-modal/dist/modal';

const PopUpActive = () => {
  const navigation = useAppNavigation();
  return (
    <Modal
      isVisible={true}
      // deviceWidth={DEVICE_WIDTH}
      deviceHeight={DEVICE_HEIGHT + 50}
      backdropOpacity={0.7}
      coverScreen={false}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imgButton}
          onPress={() => navigation.goBack()}
          hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
          <Image source={Images.iconBack} style={styles.iconBack} />
        </TouchableOpacity>
        <View style={styles.checkIcon}>
          <MemoPopUpCheck style={{}} />
          <MemoPopUpVector style={{position: 'absolute'}} />
          <View style={styles.circle} />
        </View>
        <GradientText text={'Активируйте свой счет'} style={styles.title} />
        <Text style={styles.textDescription}>
          Активируйте брокерский счет в Dotbig.
        </Text>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Перейдите в кабинет</Text>
          <Image source={Images.diagonalArrow} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default PopUpActive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 32,
    marginVertical: 150,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  imgButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: '#e0e0e1',
    // opacity: 0.15,
    resizeMode: 'contain',
    top: 20,
    // bottom: 0,
    right: 20,
    // left: 0,
  },
  iconBack: {
    // height: 22,
    // width: 22,
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
    marginTop: 120,
    color: 'black',
  },
  textDescription: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 20,
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
