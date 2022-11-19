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
      const localToken = await AsyncStorage.getItem('dotbig_token');
      if (localToken !== null) {
        console.log('getToken', localToken);
        dispatch(getLesson(localToken));
        dispatch(setIsLoggedIn({value: true}));
      }
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
        await AsyncStorage.setItem('dotbig_email', response.data.user_email);
        // dispatch(setIsLoggedIn({value: true}));
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
export const getLesson = createAsyncThunk<any, any>(
  'mainReducer/getLesson',
  async (localToken, {dispatch}) => {
    try {
      console.log('token', localToken);
      const response = await api.lesson(localToken);
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
    } catch (e) {
      return console.log('error', e);
    }
  },
);
export const setLessonProgress = createAsyncThunk<any, any>(
  'mainReducer/setLessonProgress',
  async params => {
    console.log('setLesssonProgressReducer:', params);
    try {
      const response = await api.stepLesson(params);
      if (response.status === 200 || response.status === 201) {
        console.log('responseStep', response.data.message);
        return response.data;
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
    disabled: false as boolean,
    route: '' as string,
    progressBar1: 0 as number,
    progressBar2: 0 as number,
    progressBar3: 0 as number,
    burgerList: false,
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
    course: {} as CourseType,
  },
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{value: boolean}>) {
      console.log('setIsLoggedIn:', action.payload.value);
      state.isLoggedIn = action.payload.value;
    },
    setAppStatus(state, action: PayloadAction<RequestStatusType>) {
      state.status = action.payload;
    },
    setDisabled(state, action: PayloadAction<{value: boolean}>) {
      state.disabled = action.payload.value;
    },
    setRoute(state, action: PayloadAction<{value: string}>) {
      state.route = action.payload.value;
    },
    setBurgerList(state, action: PayloadAction<{value: boolean}>) {
      state.burgerList = action.payload.value;
    },
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(initializeApp.fulfilled, (state, action) => {
        state.isInitialized = true;
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
export const {
  setIsLoggedIn,
  setDisabled,
  setRoute,
  setBurgerList,
  setProgressBar1,
  setProgressBar2,
  setProgressBar3,
  setLesson1Step,
  setLesson2Step,
  setLesson3Step,
  setLesson4Step,
} = mainSlice.actions;

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
