import { todoActions } from './todoSlice';
import { takeEvery, call, put } from 'redux-saga/effects';
import todoApi from '../../api/todoApi';

function* fetchTodoList() {
  try {
    const response = yield call(todoApi.getAll);
    yield put(todoActions.fecthTodoListSuccess(response));
  } catch (error) {
    yield put(todoActions.fecthTodoListFailed());
  }
}

function* addTodo(action) {
  try {
    yield call(todoApi.add, action.payload);
    yield put(todoActions.fetchTodoList());
  } catch (error) {
    console.log(error);
  }
}

function* updateTodo(action) {
  try {
    const currentTodo = action.payload;

    const updateTodo = {
      id: currentTodo._id,
      author: currentTodo.author,
      complete: !currentTodo.complete,
      text: currentTodo.text,
    };

    yield call(todoApi.update, updateTodo);
    yield put(todoActions.fetchTodoList());
  } catch (error) {
    console.log(error);
  }
}

function* deleteTodo(action) {
  try {
    yield call(todoApi.delete, action.payload);
    yield put(todoActions.fetchTodoList());
  } catch (error) {
    console.log(error);
  }
}

export default function* todoSaga() {
  yield takeEvery(todoActions.fetchTodoList, fetchTodoList);
  yield takeEvery(todoActions.add, addTodo);
  yield takeEvery(todoActions.update, updateTodo);
  yield takeEvery(todoActions.delete, deleteTodo);
}
