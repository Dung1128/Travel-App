import { combineReducers } from 'redux';
import { profile } from './store/Ho.Reducer'

import { CLEAR_NETWORK_FAIL, SEND_NETWORK_FAIL } from './actions';
const initialState = { fetching: false, data: null, err: null };

const initSetting = {
  theme: {
    bg1: '#fff',
    bg2: '#f0f2f5',
    textColor1: '#050505',
    textColor2: 'rgba(5, 5, 5, 0.5)',
    borderColor: 'rgba(202, 203, 208, 0.5)'
  },
  language: 'vi'
}


const setting = (state = initSetting, { type, payload }) => {
  switch (type) {
    case 'setting/changeTheme':
      return { ...state, theme: payload };
    case 'setting/changeLanguage':
      return { ...state, language: payload };
    default:
      return state;
  }
};

const sendNetworkFail = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NETWORK_FAIL:
      return {
        err: action.payload.err,
      };
    case CLEAR_NETWORK_FAIL:
      return {
        err: null,
      };
    default:
      return state;
  }
};

const appReducer = combineReducers({
  sendNetworkFail,
  profile,
  setting,
});

const rootReducer = (state, action) => {
  if (action.type === 'APP_REMOVE_LOGGED_USER') {
    state = undefined;
  }
  return appReducer(state, action);
};


export default rootReducer;
