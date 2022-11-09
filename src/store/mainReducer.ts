import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../api/api';

export const getLogin = createAsyncThunk<any, any>(
  'mainReducer/getLogin',
  async params => {
    try {
      console.log('loginReducer', params);
      const response = await api.login(params);
      console.log('responseReducerstatus', response.status);
      console.log('responseReducerdata', response.data);
      console.log('responseReducerheaders', response.headers);
      return response.data;
    } catch (e) {
      return console.log('error', e);
    }
  },
);
export const getLesson = createAsyncThunk<any>(
  'mainReducer/getLesson',
  async () => {
    try {
      const response = await api.lesson();
      console.log('responseReducerstatus', response.status);
      console.log('responseReducerdata', response.data);
      console.log('responseReducerheaders', response.headers);
      return response.data;
    } catch (e) {
      return console.log('error', e);
    }
  },
);

const mainSlice = createSlice({
  name: 'mainReducer',
  initialState: {
    allPokemon: [],
    currentPokemon: {},
  },
  reducers: {},
  // extraReducers: builder => {
  // builder.addCase(getLogin.fulfilled, (state, action) => {
  //   state.allPokemon = action.payload ? action.payload : [];
  //   });
  // },
});
export const mainReducer = mainSlice.reducer;
