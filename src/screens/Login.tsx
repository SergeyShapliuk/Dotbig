import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';
import {useAppNavigation} from '../types/types';
import {Images} from '../assets/image';
import {message} from '../config/translations/resources/en';
import {DEVICE_HEIGHT} from '../constans/constants';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal/dist/modal';
import {useAppDispatch, useAppSelector} from '../store/store';
import {validateEmail} from '../common/utils/validate';
import {getLogin} from '../store/mainReducer';

import {LoginType} from '../api/api';
import {useFocusEffect} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const token = useAppSelector(state => state.mainReducer.login.token);
  const status = useAppSelector(state => state.authReducer.status);

  useFocusEffect(() => {
    setModal(true);
    return () => {
      setModal(false);
    };
  });

  const onForgot = () => {
    navigation.navigate('ForgotScreen');
  };
  const validate = () => {
    if (!email || email.length === 0) {
      Alert.alert('', message.loginScreen.userEmailEmpty);
      return false;
    }
    if (!password || password.length === 0) {
      Alert.alert('', message.loginScreen.passwordEmpty);
      return false;
    }
    return true;
  };
  const onLogin = async () => {
    Keyboard.dismiss();
    if (!validate()) {
      return;
    }
    if (!validateEmail(email)) {
      return;
    }
    const params: LoginType = {
      username: email,
      password: password,
    };
    await dispatch(getLogin(params));
    if (!token) {
      return;
    } else {
      setEmail('');
      setPassword('');
    }
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <Modal
      isVisible={modal}
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
            <Spinner visible={status === 'loading'} color={'#A968A0'} />
            <View style={{paddingHorizontal: 25, marginTop: 15}}>
              <Text style={styles.label}>Email</Text>
              <View
                style={[
                  styles.viewInput,
                  email.length > 0 ? {borderWidth: 2, borderColor: '#000'} : {},
                ]}>
                <TextInput
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
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 6,
    color: '#FFFFFF',
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
    height: 50,
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
    marginTop: 22,
    fontFamily: 'Inter',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: '#FFFFFF',
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
