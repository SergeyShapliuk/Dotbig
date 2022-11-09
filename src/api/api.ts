import {instance} from './instance';
import {ResponseLoginType} from '../screens/Login';
import {AxiosResponse} from 'axios';

export const api = {
  login(body: LoginType) {
    console.log('apiBoduy', body);
    console.log('apiBoduyHeader', instance.post);
    return instance.post<LoginType, AxiosResponse<ResponseLoginType>>(
      'wp-json/jwt-auth/v1/token',
      body,
    );
  },
  lesson() {
    return instance.get('wp-json/wp/v2/lp_course/13203');
  },
};
export type LoginType = {
  email: string;
  password: string;
};
