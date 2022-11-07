import axios from 'axios';

const BASE_URL = 'https://ru.dotbig.study/';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3J1LmRvdGJpZy5zdHVkeSIsImlhdCI6MTY2NzM5ODI4OSwibmJmIjoxNjY3Mzk4Mjg5LCJleHAiOjE2NjgwMDMwODksImRhdGEiOnsidXNlciI6eyJpZCI6IjU2In19fQ.z3bxQG5UFCZndAo2VLe9qlw6LCoe4TXDLJf8qDdtPHw';

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
