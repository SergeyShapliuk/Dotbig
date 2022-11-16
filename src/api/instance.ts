import axios from 'axios';

const BASE_URL = 'https://ru.dotbig.study/';

// const token =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3J1LmRvdGJpZy5zdHVkeSIsImlhdCI6MTY2ODI4MDczMSw\n' +
//   'ibmJmIjoxNjY4MjgwNzMxLCJleHAiOjE2Njg4ODU1MzEsImRhdGEiOnsidXNlciI6eyJpZCI6IjExNyJ9fX0.JQOT3dOEOE5ihQyTVGRva9uVFkr23YG\n' +
//   'ls2feSFFZfJA';
export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
