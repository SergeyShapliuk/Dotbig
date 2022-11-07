import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Image,
  Text,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {useAppNavigation} from '../types/types';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../constans/constants';
import {Images} from '../assets/image';
import Modal from 'react-native-modal/dist/modal';
import {message} from '../config/translations/resources/en';
import LinearGradient from 'react-native-linear-gradient';

const Forgot = () => {
  const navigation = useAppNavigation();
  const [email, setEmail] = useState<string>('');
  const [hidden, setHidden] = useState<boolean>(false);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const _keyboardDidShow = () => {
    setHidden(true);
  };

  const _keyboardDidHide = () => {
    setHidden(false);
  };

  const handleBackPress = () => {
    onBack(); // works best when the goBack is async
    return true;
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onSend = async () => {
    //   if (!ValidateEmail(email)) {
    //     Alert.alert('Please enter a valid email address');
    //     return;
    //   }
    //   try {
    //     const response = await Client.resetEmail({ user_login: email });
    //     if (response.code === 'success') {
    //       Alert.alert(response.message);
    //     } else {
    //       Alert.alert(response?.message);
    //     }
    //   } catch (e:string) {
    //     Alert.alert(e);
    //   }
  };

  return (
    <Modal
      isVisible={true}
      // deviceWidth={DEVICE_WIDTH}
      deviceHeight={DEVICE_HEIGHT + 50}
      backdropOpacity={0.7}
      coverScreen={false}
      style={styles.modal}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-380}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={styles.container}>
        <View style={styles.headerModal}>
          <View style={styles.viewLogo}>
            <Text style={styles.title}>{message.forgot.title}</Text>
          </View>
          <TouchableOpacity
            style={styles.imgButton}
            onPress={onBack}
            hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
            <Image source={Images.iconBack} style={styles.iconBack} />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.modalContainer}>
            <View style={{paddingHorizontal: 25, marginTop: 25}}>
              <Text style={styles.label}>Введите ваш Email</Text>
              <View
                style={[
                  styles.viewInput,
                  email.length > 0 ? {borderWidth: 2, borderColor: '#000'} : {},
                ]}>
                <TextInput
                  // ref={ref => {
                  //   this.password = ref;
                  // }}

                  placeholder={message.registerScreen.emailPlaceholder}
                  placeholderTextColor="#9E9E9E"
                  style={styles.textInput}
                  value={email}
                  onChangeText={value => setEmail(value)}
                />
                {email.length > 0 && (
                  <Image source={Images.icEnterEmail} style={styles.icEnter} />
                )}
              </View>
              <LinearGradient
                colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 1}}
                style={styles.linearGradient}>
                <TouchableOpacity onPress={onSend} style={styles.btnSubmit}>
                  <Text style={styles.txtSubmit}>
                    {message.forgot.btnSubmit}
                  </Text>
                  <Image source={Images.diagonalArrow} style={styles.arrow} />
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
        {!hidden && <Text>Helloerterterte</Text>}
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerModal: {
    backgroundColor: 'rgba(11, 22, 51, 0.7)',
    boxShadow: 'rgba(0, 0, 0, 0.55)',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modalContainer: {
    width: DEVICE_WIDTH,
    backgroundColor: 'rgba(11, 22, 51, 0.7)',
    boxShadow: 'rgba(0, 0, 0, 0.55)',
    paddingBottom: 20,
    // backdropFilter: 3.5,
  },
  modal: {
    justifyContent: 'flex-end',
    marginBottom: 10,
    margin: 0,
  },
  imgButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: '#0B1633',
    resizeMode: 'contain',
    // position: 'absolute',
    top: 10,
    // bottom: 0,
    right: 10,
    // left: 0,
  },
  imgBottom: {
    marginTop: 10,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textBottom: {
    marginTop: 5,
    fontSize: 13,
    lineHeight: 22,
    color: '#A363A1',
    fontFamily: 'Inter',
    fontWeight: '500',
    textAlign: 'center',
  },
  logo: {
    height: (98 / 375) * DEVICE_WIDTH,
    width: (73 / 375) * DEVICE_WIDTH,
    resizeMode: 'contain',
    // position: "absolute",
  },
  viewLogo: {
    alignSelf: 'center',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 24,
    lineHeight: 41,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  containerImg: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 10,
    flex: 1,
  },
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 6,
    color: '#FFFFFF',
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
  textInput: {
    flex: 1,
    height: 45,
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  icEnter: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    top: DEVICE_HEIGHT / 2 - 20,
  },
  nextButton: {
    height: (264 / 375) * DEVICE_WIDTH,
    width: (264 / 375) * DEVICE_WIDTH,
    resizeMode: 'contain',
  },
  iconBack: {
    // height: 22,
    // width: 22,
    resizeMode: 'contain',
  },
  txtAccept: {
    fontFamily: 'Poppins',
    fontSize: 13,
    color: '#9E9E9E',
    fontWeight: '400',
  },
  iconCheck: {
    fontSize: 22,
    color: '#9E9E9E',
    marginRight: 12,
  },
  linearGradient: {
    marginTop: 10,
    borderRadius: 6,
  },
  btnSubmit: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 50,
    // marginVertical: 15,
    // backgroundColor: '#FFC224',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    // alignSelf: 'stretch',
    // alignContent: 'flex-end',
    borderRadius: 6,
  },
  txtSubmit: {
    fontFamily: 'Inter',
    fontSize: 15,
    lineHeight: 25,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  arrow: {
    // position: 'absolute',
    // marginLeft: 42,
    width: 10,
    height: 10,
    resizeMode: 'contain',
    color: '#EEF5F8',
  },
  line: {
    width: 90,
    height: 1,
    backgroundColor: '#DBDBDB',
  },
  iconFacebook: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  iconTwitter: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  iconGoogle: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  txtQuestion: {
    marginTop: 22,
    fontFamily: 'Inter',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  viewLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 250,
    alignSelf: 'center',
    marginTop: 71,
  },
  viewButton: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
    alignSelf: 'center',
  },
  viewInput: {
    color: '#000',
    backgroundColor: '#F3F3F3',
    borderRadius: 6,
    marginBottom: 16,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F3F3F3',
  },
});
