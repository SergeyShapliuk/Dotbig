import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  api,
  LessonStepType,
  LoginResponseType,
  RegisterResponseType,
} from '../api/api';
import {Alert} from 'react-native';
import {setAppStatus, setIsLoggedIn} from './authReducer';

export const getRegister = createAsyncThunk<any, any>(
  'mainReducer/getRegister',
  async (registerParams, {dispatch}) => {
    console.log('getReg:', registerParams);
    dispatch(setAppStatus('loading'));
    try {
      const response = await api.register(registerParams);
      if (response.status === 200 || response.status === 201) {
        dispatch(setAppStatus('succeeded'));
        console.log('autologinREducer', response.data.student_id);
        Alert.alert('', response.data.message);
        return response.data;
      }
    } catch (e) {
      dispatch(setAppStatus('failed'));
      Alert.alert('', 'Введите правильные данные ');
      return console.log('error', e);
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
