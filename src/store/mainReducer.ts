import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  api,
  LessonStepType,
  LoginResponseType,
  LoginType,
  RegisterResponseType,
} from '../api/api';
import {Alert} from 'react-native';
import {setAppStatus, setIsLoggedIn} from './authReducer';
import {message} from '../config/translations/resources/en';

export const getRegister = createAsyncThunk<any, any>(
  'mainReducer/getRegister',
  async (registerParams, {dispatch}) => {
    console.log('getReg:', registerParams);
    dispatch(setAppStatus('loading'));
    try {
      const response = await api.register(registerParams);
      if (response.status === 200 || response.status === 201) {
        const paramLogin: LoginType = {
          username: registerParams.email,
          password: registerParams.password,
        };
        dispatch(getLogin(paramLogin));
        console.log('autologinREducer', response.data.student_id);
        return response.data;
      }
    } catch (e) {
      // @ts-ignore
      if (e.response.data.message === message.registerScreen.messageEmail) {
        dispatch(setAppStatus('failed'));
        Alert.alert(
          '',
          'Такая электронная почта уже зарегистрирована. Поробуйте сбросить пароль.',
        );
      } else {
        Alert.alert('', 'Попробуйте ещё раз ввести ваши данные.');
      }
    }
  },
);
export const getLogin = createAsyncThunk<any, any>(
  'mainReducer/getLogin',
  async (loginParams, {dispatch}) => {
    dispatch(setAppStatus('loading'));
    try {
      const response = await api.login(loginParams);
      if (response.status === 200 || response.status === 201) {
        dispatch(setAppStatus('succeeded'));
        dispatch(setIsLoggedIn({value: false}));
        return response.data;
      }
    } catch (e) {
      dispatch(setAppStatus('failed'));
      Alert.alert('', 'Введите правильные данные ');
      return console.log('error', e);
    }
  },
);
export const getLink = createAsyncThunk<any, string>(
  'mainReducer/getLink',
  async token => {
    try {
      const response = await api.link(token);
      if (response.status === 200 || response.status === 201) {
        console.log('reduxcerUrl:', response.data);
        return response.data.url;
      }
    } catch (e) {
      return console.log('error', e);
    }
  },
);
const mainSlice = createSlice({
  name: 'mainReducer',
  initialState: {
    register: {} as RegisterResponseType,
    login: {} as LoginResponseType,
    progressBar1: 0 as number,
    progressBar2: 0 as number,
    progressBar3: 0 as number,
    lesson_1: [
      {step: 1, isDone: false},
      {step: 2, isDone: false},
      {step: 3, isDone: false},
      {step: 4, isDone: false},
    ] as LessonStepType[],
    lesson_2: [
      {step: 1, isDone: false},
      {step: 2, isDone: false},
      {step: 3, isDone: false},
    ] as LessonStepType[],
    lesson_3: [
      {step: 1, isDone: false},
      {step: 2, isDone: false},
      {step: 3, isDone: false},
    ] as LessonStepType[],
    lesson_4: [
      {step: 1, isDone: false},
      {step: 2, isDone: false},
    ] as LessonStepType[],
    link: '' as string,
  },
  reducers: {
    setProgressBar1(state, action: PayloadAction<{value: number}>) {
      state.progressBar1 = state.progressBar1 + action.payload.value;
    },
    setProgressBar2(state, action: PayloadAction<{value: number}>) {
      state.progressBar2 = state.progressBar2 + action.payload.value;
    },
    setProgressBar3(state, action: PayloadAction<{value: number}>) {
      state.progressBar3 = state.progressBar3 + action.payload.value;
    },
    setLesson1Step(state, action: PayloadAction<LessonStepType[]>) {
      state.lesson_1 = action.payload;
    },
    setLesson2Step(state, action: PayloadAction<LessonStepType[]>) {
      state.lesson_2 = action.payload;
    },
    setLesson3Step(state, action: PayloadAction<LessonStepType[]>) {
      state.lesson_3 = action.payload;
    },
    setLesson4Step(state, action: PayloadAction<LessonStepType[]>) {
      state.lesson_4 = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getLogin.fulfilled, (state, action) => {
        state.login = action.payload ? action.payload : {};
      })
      .addCase(getRegister.fulfilled, (state, action) => {
        state.register = action.payload ? action.payload : {};
      })
      .addCase(getLink.fulfilled, (state, action) => {
        console.log('reducerLinl', state.link);
        state.link = action.payload ? action.payload : state.link;
      });
  },
});
export const mainReducer = mainSlice.reducer;
export const {
  setProgressBar1,
  setProgressBar2,
  setProgressBar3,
  setLesson1Step,
  setLesson2Step,
  setLesson3Step,
  setLesson4Step,
} = mainSlice.actions;
