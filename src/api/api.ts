import {instance} from './instance';
import {AxiosResponse} from 'axios';

export const api = {
  register(body: RegisterType) {
    return instance.post<RegisterType, AxiosResponse<RegisterResponseType>>(
      'wp-json/wp/v2/users/register',
      body,
    );
  },
  login(body: LoginType) {
    return instance.post<LoginType, AxiosResponse<LoginResponseType>>(
      'wp-json/jwt-auth/v1/token',
      body,
    );
  },
  forgot(email: ForgotType) {
    console.log('forgot', email);
    return instance.post<ForgotType, AxiosResponse<ForgotResponseType>>(
      'wp-json/wp/v2/users/forgot-password',
      email,
    );
  },
  lesson(token: string) {
    console.log('token', token);
    return instance.get('wp-json/wp/v2/lp_course/13203', {
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  stepLesson(body: LessonProgressType) {
    console.log('stepLessonApi', body);
    return instance.post<
      LessonProgressType,
      AxiosResponse<LessonProgressResponseType>
    >('wp-json/wp/v2/users/set-step-endpoint', body);
  },
};
export type LoginType = {
  username: string;
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
export type ForgotType = {
  email: string;
};
export type ForgotResponseType = {
  code: number;
  success: boolean;
  message: string;
};
export type LessonStepType = {
  step: number;
  isDone: boolean;
};
export type LessonProgressType = {
  email: string;
  lesson: string;
  step: number;
};
export type LessonProgressResponseType = {
  code: number;
  success: boolean;
  message: string;
};
