import {Alert} from 'react-native';
import {message} from '../../config/translations/resources/en';

export const validateUserName = (userName: string) => {
  const re =
    /([a-zA-Z,а-яА-Я,0-9][^...]{1,30})[\s]{1,30}([a-zA-Z,а-яА-Я,0-9][^...]{1,30})/;
  if (!re.test(userName)) {
    console.log('userNmae:', re.test(userName));
    Alert.alert('', message.registerScreen.validUserName);
    return re.test(userName);
  }
  console.log('email', re.test(userName));
  return re.test(userName);
};
export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email)) {
    Alert.alert('', message.registerScreen.validEmail);
    return re.test(email);
  }
  console.log('email', re.test(email));
  return re.test(email);
};
export const validatePhone = (phone: string) => {
  const re = /^\d+$/;
  if (!re.test(phone)) {
    Alert.alert('', message.registerScreen.validPhone);
    return re.test(phone);
  }
  console.log('phone', re.test(phone));
  return re.test(phone);
};
