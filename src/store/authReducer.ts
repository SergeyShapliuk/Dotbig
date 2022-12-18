import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {api, ForgotType} from '../api/api';
import {message} from '../config/translations/resources/en';
import {CourseType} from '../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const initializeApp = createAsyncThunk<any, string>(
  'authReducer/initializeApp',
  async (token, {dispatch}) => {
    try {
      if (token) {
        console.log('getToken', token);
        dispatch(getLesson(token));
        dispatch(setIsLoggedIn({value: true}));
      }
    } catch (error) {
      return console.log('error', error);
    }
  },
);
export const getLogout = createAsyncThunk<any>(
  'authReducer/getLogout',
  async (_, {dispatch}) => {
    try {
      const key = await AsyncStorage.multiRemove([
        'NAVIGATION_STATE_V1',
        'persist:root',
      ]);
      dispatch(setIsLoggedIn({value: false}));
      console.log('reducerKey', key);
    } catch (e) {
      return console.log('error', e);
    }
  },
);

export const getForgot = createAsyncThunk<any, ForgotType>(
  'authReducer/getForgot',
  async (email, {dispatch}) => {
    console.log('redicerFogot:', email);
    dispatch(setAppStatus('loading'));
    try {
      const response = await api.forgot(email);
      if (response.status === 200 || response.status === 201) {
        dispatch(setAppStatus('succeeded'));
        Alert.alert('', message.forgotScreen.message);
      }
    } catch (e) {
      dispatch(setAppStatus('failed'));
      return console.log('error', e);
    }
  },
);
export const getLesson = createAsyncThunk<any, any>(
  'authReducer/getLesson',
  async (localToken, {dispatch}) => {
    try {
      console.log('token', localToken);
      const response = await api.lesson(localToken);
      if (response.status === 200 || response.status === 201) {
        return console.log('lesson----', JSON.stringify(response.data));
      }
    } catch (e) {
      dispatch(setAppStatus('failed'));
      return console.log('error', e);
    }
  },
);
export const setLessonProgress = createAsyncThunk<any, any>(
  'authReducer/setLessonProgress',
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

const authSlice = createSlice({
  name: 'authReducer',
  initialState: {
    isLoggedIn: false as boolean,
    isLoading: false as boolean,
    isInitialized: false as boolean,
    status: 'idle' as RequestStatusType,
    disabled: false as boolean,
    route: '' as string,
    burgerList: false,
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
  },
  extraReducers: builder => {
    builder
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(initializeApp.fulfilled, (state, action) => {
        state.isInitialized = true;
      })
      .addCase(getLesson.fulfilled, (state, action) => {
        state.course = action.payload ? action.payload : {};
      });
  },
});
export const authReducer = authSlice.reducer;
export const {setIsLoggedIn, setDisabled, setRoute, setBurgerList} =
  authSlice.actions;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export const setAppStatus = createAction<RequestStatusType>(
  'authReducer/setAppStatus',
);
