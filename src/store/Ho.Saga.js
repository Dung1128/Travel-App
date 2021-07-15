import { call, put, takeLatest } from 'redux-saga/effects';
import { verifyOtpRequest, getOtpRequest, getProfileRequest } from '../api/login';
import {
    VERIFY_OTP_REQUEST,
    GET_OTP_REQUEST,
    GET_PROFILE_REQUEST
} from './Ho.Action';

import { sendNetworkFail } from '../actions';

// get otp
export function* watchGetOTP() {
    yield takeLatest(GET_OTP_REQUEST, handleGetOTP);
}

function* handleGetOTP(action) {
    const response = yield call(getOtpRequest, action.payload.params);

    if (response.ok) {
        action.payload.callback(response)
    } else {
        if (
            response.problem !== 'NETWORK_ERROR' &&
            response.problem !== 'TIMEOUT_ERROR' &&
            response.problem !== 'CONNECTION_ERROR'
        ) {
            action.payload.callback(response)
        } else {
            yield put(sendNetworkFail(response.problem));
        }
    }
}




export function* watchVerifyOtp() {
    yield takeLatest(VERIFY_OTP_REQUEST, handleVerifyOtp);
}

function* handleVerifyOtp(action) {
    const response = yield call(verifyOtpRequest, action.payload.params);

    if (response.ok) {
        action.payload.callback(response)
    } else {
        if (
            response.problem !== 'NETWORK_ERROR' &&
            response.problem !== 'TIMEOUT_ERROR' &&
            response.problem !== 'CONNECTION_ERROR'
        ) {
            action.payload.callback(response)
        } else {
            yield put(sendNetworkFail(response.problem));
        }
    }
}

export function* watchGetProfile() {
    yield takeLatest(GET_PROFILE_REQUEST, handleGetProfile);
}

function* handleGetProfile(action) {
    const response = yield call(getProfileRequest, action.payload.params);
    console.log('handleGetProfile', action)
    if (response.ok) {
        action.payload.callback(response)
    } else {
        if (
            response.problem !== 'NETWORK_ERROR' &&
            response.problem !== 'TIMEOUT_ERROR' &&
            response.problem !== 'CONNECTION_ERROR'
        ) {
            action.payload.callback(response)
        } else {
            yield put(sendNetworkFail(response.problem));
        }
    }
}


