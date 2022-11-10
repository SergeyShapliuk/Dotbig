import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {api, LoginResponseType, RegisterResponseType} from '../api/api';

export const initializeApp = createAsyncThunk<any, any>(
  'mainReducer/initializeApp',
  async (url, {dispatch}) => {
    try {
      const res = await api.autoLogin(url);
      if (res.status === 200 || res.status === 201) {
        dispatch(setIsLoggedIn({value: true}));
      }
    } catch (error) {
      return console.log('error', error);
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
        return response.data;
      }
    } catch (e) {
      return console.log('error', e);
    }
  },
);
export const getRegister = createAsyncThunk<any, any>(
  'mainReducer/getRegister',
  async (registerParams, {dispatch}) => {
    console.log('getReg:', registerParams);
    dispatch(setAppStatus({status: 'loading'}));
    try {
      const response = await api.login(registerParams);
      if (response.status === 200 || response.status === 201) {
        dispatch(setAppStatus({status: 'succeeded'}));
        return response.data;
      }
    } catch (e) {
      return console.log('error', e);
    }
  },
);
export const getLesson = createAsyncThunk<any, string>(
  'mainReducer/getLesson',
  async (id, {dispatch}) => {
    dispatch(setAppStatus({status: 'loading'}));
    try {
      const response = await api.lesson(id);
      if (response.status === 200 || response.status === 201) {
        dispatch(setAppStatus({status: 'succeeded'}));
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
    register: {} as RegisterResponseType,
  },
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{value: boolean}>) {
      state.isLoggedIn = action.payload.value;
    },
    setAppStatus(state, action: PayloadAction<RequestStatusType>) {
      state.status = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(initializeApp.fulfilled, (state, action) => {
        state.isInitialized = true;
      })
      // .addCase(setAppStatus.fulfilled, (state, action) => {
      //   state.status = action.payload.status;
      // })
      .addCase(getLogin.fulfilled, (state, action) => {
        state.login = action.payload ? action.payload : {};
      })
      .addCase(getRegister.fulfilled, (state, action) => {
        state.register = action.payload ? action.payload : {};
      });
  },
});
export const mainReducer = mainSlice.reducer;
export const {setIsLoggedIn} = mainSlice.actions;

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
