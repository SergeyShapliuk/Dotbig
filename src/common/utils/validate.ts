import {Alert} from 'react-native';
import {message} from '../../config/translations/resources/en';

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email)) {
    Alert.alert('', message.registerScreen.validEmail);
    return re.test(email);
  }
  return re.test(email);
};
