import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
} from 'react-native';
import {useAppNavigation} from '../types/types';
import {Images} from '../assets/image';
import {message} from '../config/translations/resources/en';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../constans/constants';

const Login = () => {
  const navigation = useAppNavigation();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
  const onRegister = () => {
    navigation.navigate('RegisterScreen');
  };
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
  const onLogin = () => {};
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
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="always">
      <Image source={Images.iconBannerLogin2} style={styles.imgBanner} />
      <View style={{marginTop: 80}}>
        <TouchableOpacity
          style={{marginLeft: 16, width: 50}}
          onPress={onBack}
          hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
          <Image source={Images.iconBack} style={styles.iconBack} />
        </TouchableOpacity>
        <View style={styles.viewLogo}>
          <Image source={Images.LogoSchool} style={styles.logo} />
          <Text style={styles.title}>{message.loginScreen.title}</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps="handled">
        <View style={{paddingHorizontal: 46, marginTop: 35}}>
          <View
            style={[
              styles.viewInput,
              userName.length > 0 ? {borderWidth: 2, borderColor: '#000'} : {},
            ]}>
            <TextInput
              // ref={ref => {
              //   this.username = ref;
              // }}
              value={userName}
              placeholder={message.loginScreen.usernamePlaceholder}
              placeholderTextColor="#9E9E9E"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => setUserName(value)}
            />
            {userName.length > 0 && (
              <Image source={Images.icEnterUsername} style={styles.icEnter} />
            )}
          </View>
          <View
            style={[
              styles.viewInput,
              password.length > 0 ? {borderWidth: 2, borderColor: '#000'} : {},
            ]}>
            <TextInput
              // ref={ref => {
              //   this.password = ref;
              // }}
              secureTextEntry={!showPassword}
              placeholder={message.loginScreen.passwordPlaceholder}
              placeholderTextColor="#9E9E9E"
              style={styles.textInput}
              value={password}
              onChangeText={value => setPassword(value)}
            />
            {password.length > 0 && (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={Images.icEnterPassword} style={styles.icEnter} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.btnSubmit} onPress={onLogin}>
            <Text style={styles.txtSubmit}>{message.loginScreen.btnLogin}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
            <Text style={styles.txtForgot}>
              {message.loginScreen.forgotPassword}
            </Text>
          </TouchableOpacity>
          {/* <View style={styles.viewLine}>
              <View style={styles.line} />
              <Text>or</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.viewButton}>
              <TouchableOpacity>
                <Image
                  source={Images.iconFacebook}
                  style={styles.iconFacebook}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.iconTwitter} style={styles.iconTwitter} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.iconGoogle} style={styles.iconGoogle} />
              </TouchableOpacity>
            </View> */}
          <View style={styles.imgBottom}>
            <Text style={styles.textBottom}>
              {message.loginScreen.registerText}
            </Text>
            <TouchableOpacity onPress={onRegister}>
              <Text
                style={[styles.textBottom, {textDecorationLine: 'underline'}]}>
                {' '}
                {message.loginScreen.register}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  imgBanner: {
    width: (1120 / 1500) * DEVICE_WIDTH,
    height: (1272 / 1500) * DEVICE_WIDTH,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
  },
  imgBottom: {
    marginTop: 10,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textBottom: {
    marginTop: 40,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Sniglet-Regular',
    fontWeight: '400',
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
  },
  title: {
    fontSize: 28,
    fontWeight: '400',
    fontFamily: 'Sniglet-Regular',
  },
  containerImg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
    height: 22,
    width: 22,
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
  btnSubmit: {
    marginTop: 0,
    flex: 1,
    height: 50,
    backgroundColor: '#FFC224',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  txtSubmit: {
    fontFamily: 'Sniglet-Regular',
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
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
  txtForgot: {
    marginTop: 24,
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: '#569EC6',
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
    flex: 1,
    color: '#000',
    backgroundColor: '#F3F3F3',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 2,
    borderColor: '#F3F3F3',
  },
});
