import axios from 'axios';
import moment from 'moment';
import { put, select } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';
import { BASE_URL, SIGN_IN_URL } from '@/utils/environment';
import ToastPopUp from '@/utils/Toast.android';
import { usersSlice } from '../slices/features/users/slice';
import { type AccessTokenInfo, type LoginResponse } from '../types/types';
// import { type RootState } from '..';

const { call } = Effects;

const apiUrl = BASE_URL + '/' + SIGN_IN_URL;

interface IPayload {
  email: string;
  password: string;
}

interface IGetUserActionPayload {
  payload: {
    email: string;
    password: string;
  };
  type: string;
}

const loginAPI = async (payload: IPayload): Promise<LoginResponse | undefined> => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestData = {
      email: payload.email,
      password: payload.password
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await axios.post(apiUrl, requestData, config);
    return response.data;
  } catch (error) {
    console.error('Error in loginAPI:', error);
    return undefined; // Or you could return a specific error object here
  }
};

export function* loginSaga(
  payload: IGetUserActionPayload
): Generator<any, void, AccessTokenInfo | undefined | any> {
  try {
    const response: any = yield call(loginAPI, payload.payload);

    if (response !== undefined) {
      // update org tree
      yield put(usersSlice.actions.getUserSuccessAction(response.data));

      // yield put(updateGlobalLoader(false));
    } else {
      // case undefined
      const data = 'The email or password you entered is incorrect. Please try again.';
      ToastPopUp(data);
      yield put(usersSlice.actions.getUserErrorAction('Login failed')); // Handle error case
    }
  } catch (error) {
    // if (callback) {
    //   callback({ success: false, data: null });
    // }
  }
}
