import React, {useEffect, useState} from 'react';
import {
  // Alert,
  BackHandler,
  Image,
  // Keyboard,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useAppNavigation} from '../types/types';
import {Images} from '../assets/image';
import {message} from '../config/translations/resources/en';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../constans/constants';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal/dist/modal';
import {BlurView} from '@react-native-community/blur';

const Register = () => {
  const navigation = useAppNavigation();
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);
  const handleBackPress = () => {
    onBack();
    return true;
  };
  // const onRegister = () => {
  //   navigation.navigate('RegisterScreen');
  // };
  // const validate = () => {
  //   if (!userName || userName.length === 0) {
  //     Alert.alert('', message.loginScreen.usernameEmpty);
  //     return false;
  //   }
  //   if (!password || password.length === 0) {
  //     Alert.alert('', message.loginScreen.passwordEmpty);
  //     return false;
  //   }
  //   return true;
  // };
  const onLogin = () => {
    navigation.goBack();
    navigation.navigate('LoginScreen');
  };
  // const onLogin = async () => {
  //   Keyboard.dismiss();
  //   const {dispatch} = this.props;
  //   if (!validate()) {
  //     return;
  //   }
  //   dispatch(setLoading(true));
  //   const {username, password} = this.state;
  //   const params = {
  //     username,
  //     password,
  //   };
  //   const response = await Client.login(params);
  //   dispatch(setLoading(false));
  //
  //   if (response && response?.token) {
  //     dispatch(saveUserToken(response.token));
  //     dispatch(setUser(response));
  //     setToken(response.token);
  //
  //     const {navigation} = this.props;
  //
  //     if (navigation.state.params?.screen) {
  //       const responseUser = await Client.getUser(response.user_id);
  //       dispatch(setUser(responseUser));
  //       if (
  //         navigation.state.params?.screen === 'CoursesDetailsScreen' &&
  //         navigation.state.params?.id
  //       ) {
  //         navigation.navigate('CoursesDetailsScreen', {
  //           id: navigation.state.params.id,
  //         });
  //       } else {
  //         navigation.navigate(navigation.state.params.screen);
  //       }
  //     } else {
  //       dispatch(reset(['HomeTabScreen']));
  //     }
  //   } else if (response.code.includes('incorrect_password')) {
  //     Alert.alert('', t('loginScreen.passwordNotCorrect'));
  //   } else if (response.code.includes('invalid_username')) {
  //     Alert.alert('', t('loginScreen.usernameNotCorrect'));
  //   } else {
  //     Alert.alert('', t('loginScreen.notFound'));
  //   }
  // };
  const onBack = () => {
    navigation.goBack();
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
        keyboardVerticalOffset={-280}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={styles.container}>
        <View style={styles.modalContainer}>
          {/*<BlurView*/}
          {/*  style={styles.absolute}*/}
          {/*  blurType="light"*/}
          {/*  blurAmount={10}*/}
          {/*  reducedTransparencyFallbackColor="white"*/}
          {/*/>*/}
          <TouchableOpacity
            style={styles.imgButton}
            onPress={onBack}
            hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
            <Image source={Images.iconBack} style={styles.iconBack} />
          </TouchableOpacity>
          <View style={styles.viewLogo}>
            <Text style={styles.title}>{message.registerScreen.title}</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyboardShouldPersistTaps="handled">
            <View style={{paddingHorizontal: 25, marginTop: 12}}>
              <Text style={styles.label}>Имя</Text>
              <View
                style={[
                  styles.viewInput,
                  userName.length > 0
                    ? {borderWidth: 2, borderColor: '#000'}
                    : {},
                ]}>
                <TextInput
                  // ref={ref => {
                  //   this.username = ref;
                  // }}
                  value={userName}
                  placeholder={message.registerScreen.usernamePlaceholder}
                  placeholderTextColor="#9E9E9E"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={value => setUserName(value)}
                />
                {userName.length > 0 && (
                  <Image
                    source={Images.icEnterUsername}
                    style={styles.icEnter}
                  />
                )}
              </View>
              <Text style={styles.label}>Email</Text>
              <View
                style={[
                  styles.viewInput,
                  email.length > 0 ? {borderWidth: 2, borderColor: '#000'} : {},
                ]}>
                <TextInput
                  // ref={ref => {
                  //   this.password = ref;
                  // }}
                  // secureTextEntry={!showPassword}
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
              <Text style={styles.label}>Телефон</Text>
              <View
                style={[
                  styles.viewInput,
                  userName.length > 0
                    ? {borderWidth: 2, borderColor: '#000'}
                    : {},
                ]}>
                <TextInput
                  // ref={ref => {
                  //   this.username = ref;
                  // }}
                  value={phone}
                  placeholder={message.registerScreen.phonePlaceholder}
                  placeholderTextColor="#9E9E9E"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={value => setPhone(value)}
                />
                {phone.length > 0 && (
                  <Image source={Images.iconPhone} style={styles.icEnter} />
                )}
              </View>
              <LinearGradient
                colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 1}}
                style={styles.linearGradient}>
                <TouchableOpacity onPress={onLogin} style={styles.btnSubmit}>
                  <Text style={styles.txtSubmit}>
                    {message.registerScreen.btnSubmit}
                  </Text>
                  <Image source={Images.diagonalArrow} style={styles.arrow} />
                </TouchableOpacity>
              </LinearGradient>

              <Text style={styles.txtQuestion}>
                {message.registerScreen.question}
              </Text>
              <TouchableOpacity onPress={onLogin}>
                <Text
                  style={[
                    styles.textBottom,
                    {textDecorationLine: 'underline'},
                  ]}>
                  {' '}
                  {message.registerScreen.linkLogin}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 200,
    // width: DEVICE_WIDTH,
    // justifyContent: 'center',
    // alignSelf: 'center',
    // backgroundColor: 'white',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContainer: {
    opacity: 1,
    width: DEVICE_WIDTH,
    backgroundColor: 'rgba(11, 22, 51, 0.7)',
    boxShadow: 'rgba(0, 0, 0, 0.55)',
    borderRadius: 10,
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
    marginTop: 2,
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
    lineHeight: 31,
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
    marginBottom: 5,
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
    height: 49,
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
    marginTop: 12,
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
    marginBottom: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F3F3F3',
  },
});
