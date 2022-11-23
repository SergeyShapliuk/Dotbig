import React, {useCallback, useEffect, useState} from 'react';
import {
  BackHandler,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Keyboard,
} from 'react-native';
import {useAppNavigation} from '../types/types';
import {Images} from '../assets/image';
import {message} from '../config/translations/resources/en';
import {DEVICE_HEIGHT} from '../constans/constants';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal/dist/modal';
import PhoneInput from 'react-native-phone-number-input';
import {useAppDispatch, useAppSelector} from '../store/store';
import {getRegister} from '../store/mainReducer';
import {RegisterType} from '../api/api';
import {
  validateEmail,
  validatePhone,
  validateUserName,
} from '../common/utils/validate';
import {useFocusEffect} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

const Register = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [formattedValue, setFormattedValue] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const status = useAppSelector(state => state.authReducer.status);
  const success = useAppSelector(state => state.mainReducer.register);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
    return true;
  }, [navigation]);
  const onLoginForm = () => {
    navigation.navigate('LoginScreen');
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [handleBackPress]);
  useFocusEffect(() => {
    setModal(true);
    return () => {
      setModal(false);
    };
  });

  const validate = () => {
    if (!userName || userName.length === 0) {
      Alert.alert('', message.registerScreen.usernameEmpty);
      return false;
    }
    if (!email || email.length === 0) {
      Alert.alert('', message.registerScreen.emailEmpty);
      return false;
    }
    if (!phone || phone.length === 0) {
      Alert.alert('', message.registerScreen.phoneEmpty);
      return false;
    }
    return true;
  };

  const onLogin = async () => {
    Keyboard.dismiss();
    if (!validate()) {
      return;
    }
    if (
      !validateUserName(userName) ||
      !validateEmail(email) ||
      !validatePhone(phone)
    ) {
      return;
    }
    const userNames = userName.replace(/^ +| +$|( ) +/g, '$1').split(' ');
    const params: RegisterType = {
      first_name: userNames[0],
      last_name: userNames[1],
      username: email,
      email: email,
      phone: formattedValue,
      password: password,
    };
    if (!success) {
      return;
    } else {
      Alert.alert(`Пользователь ${email} успешно зарегистрирован`);
      navigation.goBack();
      navigation.navigate('LoginScreen');
      dispatch(getRegister(params));
      setUserName('');
      setEmail('');
      setPassword('');
      setPhone('');
    }
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <Modal
      isVisible={modal}
      deviceHeight={DEVICE_HEIGHT + 50}
      backdropTransitionInTiming={700}
      backdropTransitionOutTiming={700}
      backdropOpacity={0.7}
      style={styles.modal}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-110}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={styles.container}>
        <View style={styles.headerModal}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{message.registerScreen.title}</Text>
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
          contentContainerStyle={{paddingTop: 0}}>
          <View style={styles.modalContainer}>
            <Spinner visible={status === 'loading'} color={'#A968A0'} />
            <View style={{marginHorizontal: 25, marginTop: 12}}>
              <Text style={styles.label}>Имя</Text>
              <View
                style={[
                  styles.viewInput,
                  userName.length > 0
                    ? {borderWidth: 2, borderColor: '#000'}
                    : {},
                ]}>
                <TextInput
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
                  secureTextEntry={!showPassword}
                  value={password}
                  placeholder={message.loginScreen.passwordPlaceholder}
                  placeholderTextColor="#9E9E9E"
                  maxLength={15}
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
              <Text style={styles.label}>Телефон</Text>
              <View
                style={[
                  styles.viewInput,
                  userName.length > 0
                    ? {borderWidth: 2, borderColor: '#000'}
                    : {},
                ]}>
                <PhoneInput
                  defaultValue={phone}
                  defaultCode="IT"
                  layout="first"
                  placeholder={message.registerScreen.phonePlaceholder}
                  onChangeText={text => {
                    setPhone(text);
                  }}
                  onChangeFormattedText={text => {
                    setFormattedValue(text);
                  }}
                  withDarkTheme
                  withShadow
                  codeTextStyle={{
                    fontSize: 14,
                    marginRight: 12,
                    marginLeft: -15,
                  }}
                  textInputStyle={{
                    fontSize: 14,
                    margin: -10,
                    marginBottom: -11,
                  }}
                  containerStyle={styles.textInputPhone}
                />
                {formattedValue.length > 0 && (
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
              <TouchableOpacity onPress={onLoginForm}>
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
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
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
  },
  modal: {
    justifyContent: 'flex-end',
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
    top: 10,
    right: 10,
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
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  titleText: {
    fontFamily: 'Inter',
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 5,
    color: '#FFFFFF',
  },
  textInput: {
    flex: 1,
    height: 45,
    color: '#000',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    backgroundColor: '#FCFCFD',
  },
  textInputPhone: {
    height: 55,
    fontFamily: 'Inter',
    fontSize: 14,
    marginHorizontal: -10,
    backgroundColor: '#FCFCFD',
  },
  icEnter: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    backgroundColor: '#FCFCFD',
  },
  iconBack: {
    resizeMode: 'contain',
  },
  linearGradient: {
    marginTop: 10,
    borderRadius: 6,
  },
  btnSubmit: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 49,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
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
    width: 10,
    height: 10,
    resizeMode: 'contain',
    color: '#EEF5F8',
  },
  txtQuestion: {
    marginTop: 12,
    fontFamily: 'Inter',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  viewInput: {
    color: '#000',
    backgroundColor: '#FCFCFD',
    borderRadius: 6,
    marginBottom: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F3F3F3',
  },
});
