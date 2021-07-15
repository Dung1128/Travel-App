import {
    SAVE_PROFILE,
    APP_REMOVE_LOGGED_USER,
} from './Ho.Action';
const initProfile = {
    user: null,
}

export const profile = (state = initProfile, action) => {
    switch (action.type) {
        case SAVE_PROFILE:
            return {
                ...state,
                user: action.payload.data,
            };
        case APP_REMOVE_LOGGED_USER:
            return { ...state, ...initProfile };
        default:
            return state;
    }
};




