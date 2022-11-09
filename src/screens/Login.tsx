import React, {useEffect, useState} from 'react';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {useAppNavigation} from '../types/types';
import {Images} from '../assets/image';
import {message} from '../config/translations/resources/en';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../constans/constants';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal/dist/modal';
// import {useAppDispatch} from '../store/store';

// import {getLogin} from '../store/mainReducer';

const Login = () => {
  // const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);
  useEffect(() => {
    console.log('effect');
  }, []);
  const handleBackPress = () => {
    onBack();
    return true;
  };
  const onForgot = () => {
    navigation.goBack();
    navigation.navigate('ForgotScreen');
  };
  // const validate = () => {
  //   if (!email || email.length === 0) {
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
    console.log('onlogin');
    Keyboard.dismiss();
    console.log('onlogin1');
    navigation.navigate('Lessons', {screen: 'Lesson_1'});
    // if (!validate()) {
    //   return;
    // }
    // dispatch(setLoading(true));

    const params = {
      email,
      password,
    };
    console.log('params', params);
    // const response = await api.login(params);

    // dispatch(
    //   getLogin({username: 'aliosha.valenok@gmail.com', password: '12345678Aa'}),
    // );
    // dispatch(getLesson());
    //
    // if (response && response?.token) {
    //   dispatch(saveUserToken(response.token));
    //   dispatch(setUser(response));
    //   setToken(response.token);

    // if (navigation.state.params.screen) {
    //   const responseUser = await Client.getUser(response.user_id);
    //   dispatch(setUser(responseUser));
    //   if (
    // navigation.state.params?.screen === 'CoursesDetailsScreen' &&
    // navigation.state.params?.id)
    // {
    // navigation.navigate('CoursesDetailsScreen', {
    //   id: navigation.state.params.id,
    // });
    //     } else {
    //       // navigation.navigate(navigation.state.params.screen);
    //     }
    //   } else {
    //     // dispatch(reset(['HomeTabScreen']));
    //   }
    // } else if (response.code.includes('incorrect_password')) {
    //   Alert.alert('', message.loginScreen.passwordNotCorrect);
    // } else if (response.code.includes('invalid_username')) {
    //   Alert.alert('', message.loginScreen.usernameNotCorrect);
    // } else {
    //   Alert.alert('', message.loginScreen.notFound);
    // }
  };
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
        keyboardVerticalOffset={-320}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={styles.container}>
        <View style={styles.headerModal}>
          <View style={styles.viewLogo}>
            <Text style={styles.title}>{message.loginScreen.title}</Text>
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
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{paddingBottom: 0}}>
          <View style={styles.modalContainer}>
            <View style={{paddingHorizontal: 25, marginTop: 15}}>
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
                  autoCapitalize="none"
                  autoCorrect={false}
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
              <Text style={styles.label}>Пароль</Text>
              <View
                style={[
                  styles.viewInput,
                  password.length > 0
                    ? {borderWidth: 2, borderColor: '#000'}
                    : {},
                ]}>
                <TextInput
                  // ref={ref => {
                  //   this.username = ref;
                  // }}
                  secureTextEntry={!showPassword}
                  value={password}
                  placeholder={message.loginScreen.passwordPlaceholder}
                  placeholderTextColor="#9E9E9E"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={value => setPassword(value)}
                />
                {password.length > 0 && (
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}>
                    <Image
                      source={Images.icEnterPassword}
                      style={styles.icEnter}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <LinearGradient
                colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 1}}
                style={styles.linearGradient}>
                <TouchableOpacity onPress={onLogin} style={styles.btnSubmit}>
                  <Text style={styles.txtSubmit}>
                    {message.loginScreen.btnSubmit}
                  </Text>
                  <Image source={Images.diagonalArrow} style={styles.arrow} />
                </TouchableOpacity>
              </LinearGradient>

              <Text style={styles.txtQuestion}>
                {message.loginScreen.forgotPassword}
              </Text>
              <TouchableOpacity onPress={onForgot}>
                <Text
                  style={[
                    styles.textBottom,
                    {textDecorationLine: 'underline'},
                  ]}>
                  {' '}
                  {message.loginScreen.linkLogin}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default Login;

export type ResponseLoginType = {
  token: string;
  user_email: string;
  user_nicename: string;
  user_display_name: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: DEVICE_WIDTH,
    // justifyContent: 'center',
    // alignSelf: 'center',
    // backgroundColor: '#0B1633',
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // opacity: 0.7,
  },
  headerModal: {
    backgroundColor: 'rgba(11, 22, 51, 0.7)',
    boxShadow: 'rgba(0, 0, 0, 0.55)',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modalContainer: {
    backgroundColor: 'rgba(11, 22, 51, 0.7)',
    boxShadow: 'rgba(0, 0, 0, 0.55)',
    paddingBottom: 20,
    // backdropFilter: 3.5,
  },
  modal: {
    justifyContent: 'flex-end',
    // marginBottom: 10,
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
