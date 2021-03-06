import { AnyAction } from 'redux';
import { ILoginState } from './../interfaces/login.interfaces';

const initState: ILoginState = {
  loading: false,
  password: '',
  serverURL: '',
  synoToken: '',
  username: ''
};

const loginReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case 'LOGIN_SET_FIELD':
      return { ...state, [action.payload.name]: action.payload.value };

    case 'LOGIN_SET_LOADING':
      return { ...state, loading: action.payload };

    case 'LOGIN_SET_SYNO_TOKEN':
      return { ...state, synoToken: action.payload };

    default:
      return state;
  }
};

export default loginReducer;
