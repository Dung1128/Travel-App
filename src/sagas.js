import { all, fork } from 'redux-saga/effects';
import {
  watchVerifyOtp,
  watchGetOTP,
  watchGetProfile
} from './store/Ho.Saga';

export default function* rootSaga() {
  yield all([
    watchGetOTP(),
    watchVerifyOtp(),
    watchGetProfile()
  ]);
}
