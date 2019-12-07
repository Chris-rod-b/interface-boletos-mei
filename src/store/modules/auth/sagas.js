import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'api/login_check', {
    email,
    password,
  });
  const { token } = response.data;

  yield put(signInSuccess(token));
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
