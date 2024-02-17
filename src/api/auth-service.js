// https://connections-api.herokuapp.com/users/signup
import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  timeout: 30000,
});

export const signUpRequest = body => authInstance.post('/users/signup', body);

export const logInRequest = body => authInstance.post('/users/login', body);
