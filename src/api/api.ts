import {instance} from './instance';
import {AxiosResponse} from 'axios';

export const api = {
  autoLogin(url: string) {
    return instance.get(`${url}`);
  },
  login(body: LoginType) {
    return instance.post<LoginType, AxiosResponse<LoginResponseType>>(
      'wp-json/jwt-auth/v1/token',
      body,
    );
  },
  register(body: RegisterType) {
    console.log('apiRegistr:', body);
    return instance.post<RegisterType, AxiosResponse<RegisterResponseType>>(
      'wp-json/wp/v2/users/register',
      body,
    );
  },
  lesson(id: string) {
    return instance.get(`wp-json/wp/v2/lp_course/${id}`);
  },
};
export type LoginType = {
  email: string;
  password: string;
};
export type RegisterType = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
};
export type RegisterResponseType = {
  code: number;
  success: boolean;
  student_id: number;
  autologin: string;
  message: string;
};
export type LoginResponseType = {
  token: string;
  user_email: string;
  user_nicename: string;
  user_display_name: string;
};
