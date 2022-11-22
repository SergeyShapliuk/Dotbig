import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MemoPopUpCheck from '../components/svg/PopUpCheck';
import MemoPopUpVector from '../components/svg/PopUpVector';
import {Images} from '../assets/image';
import GradientText from '../common/utils/GradientText';
import { useAppNavigation } from "../types/types";
import Modal from 'react-native-modal/dist/modal';

const PopUpCongrats = () => {
  const navigation = useAppNavigation();
  return (
    <Modal
      isVisible={true}
      // deviceWidth={DEVICE_WIDTH}
      // deviceHeight={DEVICE_HEIGHT + 50}
      backdropOpacity={0.5}
      coverScreen={false}>
      <View style={styles.container}>
        <Image source={Images.imgBackground} />
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
        <GradientText text={'Поздравляем!'} style={styles.title} />
        <Text style={styles.textTitle}>Вы завершили курс.</Text>
        <Text style={styles.textDescription}>
          Вскоре с Вами свяжется куратор для активации доступа к специальному
          предложению от компании Dotbig
        </Text>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Перейдите в Ваш личный кабинет</Text>
          <Image source={Images.diagonalArrow} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default PopUpCongrats;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 12,
    // marginVertical: 100,
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
    color: 'black',
  },
  textTitle: {
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 27,
    marginTop: 15,
    color: '#2A334C',
  },
  textDescription: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 15,
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
    textAlign: 'center',
    paddingHorizontal: 10,
    color: '#FFFFFF',
  },
});
