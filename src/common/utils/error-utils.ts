import {AxiosError} from 'axios';

type ThunkAPIType = {
  dispatch: (action: any) => any;
  rejectWithValue: Function;
};
export const handleAsyncServerAppError = (
  data: any,
  thunkAPI: ThunkAPIType,
  showError = true,
) => {
  if (showError) {
    console.log('eeerrroorrrrr', data.messages);
  }

  return thunkAPI.rejectWithValue({
    errors: data.messages,
    fieldsErrors: data.fieldsErrors,
  });
};
export const handleAsyncServerNetworkError = (
  error: AxiosError,
  thunkAPI: ThunkAPIType,
  showError = true,
) => {
  if (showError) {
    console.log('werwererrror', error.message);
  }

  return thunkAPI.rejectWithValue({
    errors: [error.message],
    fieldsErrors: undefined,
  });
};
