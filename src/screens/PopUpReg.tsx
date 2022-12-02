import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../assets/image';
import {PopUpRegProps, useAppNavigation} from '../types/types';
import Modal from 'react-native-modal/dist/modal';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../constans/constants';

const PopUpReg = ({route}: PopUpRegProps) => {
  const navigation = useAppNavigation();
  // const [active, setActive] = useState<boolean>(route.params.modal);

  const onChangeHandler = () => {
    console.log('routrPopup:', route);
    navigation.goBack();
  };
  return (
    <Modal
      isVisible={true}
      // deviceWidth={DEVICE_WIDTH}
      // deviceHeight={DEVICE_HEIGHT}
      backdropOpacity={0.5}
      coverScreen={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 0}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.imgButton}
            onPress={onChangeHandler}
            hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
            <Image source={Images.iconBack} style={styles.iconBack} />
          </TouchableOpacity>
          <Image
            source={Images.bonus1}
            style={{
              // marginTop: StatusBar.currentHeight,
              width: '95%',
              height: DEVICE_HEIGHT - 100,
              resizeMode: 'contain',
              marginVertical: 20,
            }}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};
export default PopUpReg;

const styles = StyleSheet.create({
  container: {
    height: DEVICE_HEIGHT - 70,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 12,
    // padding: 20,
    marginVertical: 20,
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
    top: 30,
    // bottom: 0,
    right: 20,
    // left: 0,
    zIndex: 10,
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
