import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import auth, {authSaga} from './auth';
import user, {userSaga} from './user';
import movie, {movieSaga} from './movie';
import loading from './loading';

const rootReducer = combineReducers({auth, loading, user, movie});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), movieSaga()]);
}
export default rootReducer;
