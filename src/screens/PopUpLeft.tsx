import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import GradientText from '../common/utils/GradientText';
import MemoPopUpCheck from '../components/svg/PopUpCheck';
import MemoPopUpVector from '../components/svg/PopUpVector';
import {useAppNavigation} from '../types/types';
import {DEVICE_HEIGHT} from '../constans/constants';
import Modal from 'react-native-modal/dist/modal';
import {useAppDispatch} from '../store/store';


const PopUpLeft = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const routeName = navigation.getState();
  console.log('popupLeft:', routeName);
  const onChangeHandler = () => {
    // dispatch(setIsLoggedIn({value: true}));
    navigation.navigate('Lesson1');
  };
  return (
    <Modal
      isVisible={true}
      // deviceWidth={DEVICE_WIDTH}
      deviceHeight={DEVICE_HEIGHT + 50}
      backdropOpacity={0.7}
      coverScreen={false}>
      <View style={styles.container}>
        {/*<TouchableOpacity*/}
        {/*  style={styles.imgButton}*/}
        {/*  onPress={() => navigation.goBack()}*/}
        {/*  hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>*/}
        {/*  <Image source={Images.iconBack} style={styles.iconBack} />*/}
        {/*</TouchableOpacity>*/}
        <View style={styles.checkIcon}>
          <MemoPopUpCheck style={{}} />
          <MemoPopUpVector style={{position: 'absolute'}} />
          <View style={styles.circle} />
        </View>
        <GradientText
          text={'Вы точно хотите покинуть 4-х дневный марафон?'}
          style={styles.title}
        />
        <TouchableOpacity onPress={onChangeHandler} style={styles.button}>
          <Text style={styles.buttonText}>Покинуть</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('Lesson1')
          }
          style={styles.button}>
          <Text style={styles.buttonText}>Остаться</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default PopUpLeft;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 12,
    // marginVertical: 100,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  // imgButton: {
  //   position: 'absolute',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: 22,
  //   height: 22,
  //   borderRadius: 50,
  //   backgroundColor: '#e0e0e1',
  //   // opacity: 0.15,
  //   resizeMode: 'contain',
  //   top: 20,
  //   // bottom: 0,
  //   right: 20,
  //   // left: 0,
  // },
  // iconBack: {
  //   // height: 22,
  //   // width: 22,
  //   color: '#FFFFFF',
  //   resizeMode: 'contain',
  // },
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