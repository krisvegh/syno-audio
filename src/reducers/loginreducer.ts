import { AnyAction } from 'redux';

const initState: ILoginState = {
  loading: false,
  password: '',
  serverURL: '',
  username: ''
};

export interface ILoginState {
  password: string;
  serverURL: string;
  username: string;
  loading: boolean;
}

const loginReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case 'LOGIN_SET_FIELD':
      return { ...state, [action.payload.name]: action.payload.value };
      break;

    case 'LOGIN_SET_LOADING':
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export default loginReducer;
