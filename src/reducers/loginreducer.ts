import { Action } from 'redux';

const initState: ILoginState = {
  password: '',
  serverURL: '',
  username: ''
};

interface ILoginState {
  password: string;
  serverURL: string;
  username: string;
}

const loginReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case '':
      return state;
      break;

    default:
      return state;
  }
};

export default loginReducer;
