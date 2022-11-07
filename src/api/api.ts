import {instance} from './instance';
import {ResponseLoginType} from '../screens/Login';
import {AxiosResponse} from 'axios';

export const api = {
  login(body: LoginType) {
    console.log('apiBoduy', body);
    return instance.post<LoginType, AxiosResponse<ResponseLoginType>>(
      'wp-json/jwt-auth/v1/token',
      body,
    );
  },
};
export type LoginType = {
  email: string;
  password: string;
};
