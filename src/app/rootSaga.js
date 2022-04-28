import { all } from 'redux-saga/effects';
import authSaga from 'features/auth/authSaga';
import todoSaga from 'features/todos/todoSaga';

export default function* rootSaga() {
  yield all([authSaga(), todoSaga()]);
}
