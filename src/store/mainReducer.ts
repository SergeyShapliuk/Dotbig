import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {api, ForgotType, LessonStepType, LoginResponseType} from '../api/api';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {message} from '../config/translations/resources/en';
import {CourseType} from '../types/types';

export const initializeApp = createAsyncThunk<any, void>(
  'mainReducer/initializeApp',
  async (_, {dispatch}) => {
    try {
      dispatch(setIsLoggedIn({value: true}));
    } catch (error) {
      return console.log('error', error);
    }
  },
);
export const getRegister = createAsyncThunk<any, any>(
  'mainReducer/getRegister',
  async (registerParams, {dispatch}) => {
    console.log('getReg:', registerParams);
    dispatch(setAppStatus({status: 'loading'}));
    try {
      const response = await api.register(registerParams);
      if (response.status === 200 || response.status === 201) {
        dispatch(setAppStatus({status: 'succeeded'}));
        console.log('autologinREducer', response.data.student_id);
        await AsyncStorage.setItem(
          'student_id',
          response.data.student_id.toString(),
        );
        Alert.alert('', response.data.message);

        return response.data.student_id;
      }
    } catch (e) {
      Alert.alert('', 'Попробуйте ещё раз');
      return console.log('error', e);
    }
  },
);
export const getLogin = createAsyncThunk<any, any>(
  'mainReducer/getLogin',
  async (loginParams, {dispatch}) => {
    dispatch(setAppStatus({status: 'loading'}));
    try {
      const response = await api.login(loginParams);
      if (response.status === 200 || response.status === 201) {
        dispatch(setAppStatus({status: 'succeeded'}));
        await AsyncStorage.setItem('dotbig_token', response.data.token);
        dispatch(setIsLoggedIn({value: true}));
        return response.data;
      }
    } catch (e) {
      Alert.alert('', 'Попробуйте ещё раз');
      return console.log('error', e);
    }
  },
);
export const getForgot = createAsyncThunk<any, ForgotType>(
  'mainReducer/getForgot',
  async (email, {dispatch}) => {
    console.log('redicerFogot:', email);
    dispatch(setAppStatus({status: 'loading'}));
    try {
      const response = await api.forgot(email);
      if (response.status === 200 || response.status === 201) {
        dispatch(setAppStatus({status: 'succeeded'}));
        Alert.alert('', message.forgotScreen.message);
      }
    } catch (e) {
      return console.log('error', e);
    }
  },
);
export const getLesson = createAsyncThunk<any>(
  'mainReducer/getLesson',
  async (_, {dispatch}) => {
    try {
      const localToken = await AsyncStorage.getItem('dotbig_token');
      const localId = await AsyncStorage.getItem('student_id');
      if (localToken && localId) {
        console.log('token', localToken);
        console.log('id', localId);
        const response = await api.lesson(localToken);
        if (response.status === 200 || response.status === 201) {
          dispatch(initializeApp());
          return response.data;
        }
      }
    } catch (e) {
      return console.log('error', e);
    }
  },
);
export const setLessonProgress = createAsyncThunk<any, any>(
  'mainReducer/getLesson',
  async (params, {dispatch}) => {
    console.log('setLesssonProgressReducer:', params);
    try {
      const localToken = await AsyncStorage.getItem('dotbig_token');
      const localId = await AsyncStorage.getItem('student_id');
      if (localToken && localId) {
        console.log('token', localToken);
        console.log('id', localId);
        const response = await api.lesson(localToken);
        if (response.status === 200 || response.status === 201) {
          dispatch(initializeApp());
          return response.data;
        }
      }
    } catch (e) {
      return console.log('error', e);
    }
  },
);

const mainSlice = createSlice({
  name: 'mainReducer',
  initialState: {
    isLoggedIn: false as boolean,
    isLoading: false as boolean,
    isInitialized: false as boolean,
    status: 'idle' as RequestStatusType,
    login: {} as LoginResponseType,
    student_id: '' as string,
    lesson_step: {} as LessonStepType,
    course: {} as CourseType,
  },
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{value: boolean}>) {
      state.isLoggedIn = action.payload.value;
    },
    setAppStatus(state, action: PayloadAction<RequestStatusType>) {
      state.status = action.payload;
    },
    setLessonStep(state, action: PayloadAction<LessonStepType>) {
      state.lesson_step = {...state, ...action.payload};
    },
  },
  extraReducers: builder => {
    builder
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(initializeApp.fulfilled, (state, action) => {
        state.isInitialized = true;
      })
      .addCase(getRegister.fulfilled, (state, action) => {
        state.student_id = action.payload ? action.payload : '';
      })
      .addCase(getLesson.fulfilled, (state, action) => {
        state.course = action.payload ? action.payload : {};
      })
      .addCase(getLogin.fulfilled, (state, action) => {
        state.login = action.payload ? action.payload : {};
      });
  },
});
export const mainReducer = mainSlice.reducer;
export const {setIsLoggedIn, setLessonStep} = mainSlice.actions;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type InitialStateType = {
  // происходит ли сейчас взаимодействие с сервером
  status: RequestStatusType;
  // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
  error: string | null;
  // true когда приложение проинициализировалось (проверили юзера, настройки получили и т.д.)
  isInitialized: boolean;
};

const setAppStatus = createAction<{status: RequestStatusType}>(
  'mainReducer/setAppStatus',
);
// const setLessonsStep = createAction<{lesson_step: LessonStepType}>(
//   'mainReducer/setAppStatus',
// );
