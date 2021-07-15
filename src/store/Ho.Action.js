export const GET_OTP_REQUEST = 'GET_OTP_REQUEST';
export const getOtpRequest = params => {
    return { type: GET_OTP_REQUEST, payload: params };
};

export const VERIFY_OTP_REQUEST = 'VERIFY_OTP_REQUEST';
export const verifyOtpRequest = params => {
    return { type: VERIFY_OTP_REQUEST, payload: params };
};

export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const getProfileRequest = params => {
    return { type: GET_PROFILE_REQUEST, payload: params };
};



export const SAVE_PROFILE = 'SAVE_PROFILE';
export const saveProfile = data => {
    return {
        type: SAVE_PROFILE,
        payload: { data },
    };
}

export const APP_REMOVE_LOGGED_USER = "APP_REMOVE_LOGGED_USER";
export const removeLoggedUser = () => {
    return {
        type: APP_REMOVE_LOGGED_USER,
    };
};
