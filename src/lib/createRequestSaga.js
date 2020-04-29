import {call, put} from 'redux-saga/effects';
import {finishLoading, startLoading} from '../modules/loading';

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); //로딩시작
    try {
      const response = yield call(request, action.payload); // fn, args ... 함수의 인자로 인식
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true,
      });
    }
    yield put(finishLoading(type)); //로딩시작
  };
}
