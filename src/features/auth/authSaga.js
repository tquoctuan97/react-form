import { fork, take, call, delay, put } from 'redux-saga/effects';
import { authActions } from './authSlice';

function* handleRegister(payload) {}

function* handleLogin(payload) {
  yield delay(2000);
  localStorage.setItem('access-token', 'fake-token');
  yield put(authActions.loginSuccess());
}

function* handleLogout() {
  localStorage.removeItem('access-token');
}

function* watchFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access-token'));

    if (!isLoggedIn) {
      const actionRegister = yield take(authActions.register.type);
      yield call(handleRegister, actionRegister.payload);

      const actionLogin = yield take(authActions.login.type);
      yield call(handleLogin, actionLogin.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchFlow);
}
