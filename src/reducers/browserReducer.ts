import { IBrowserState } from 'src/interfaces/browser.interfaces';
import * as browserActions from '../actions/browserActions';

const initState: IBrowserState = {
  list: [],
  path: ['/'],
  state: 'loading'
};

const browserReducer = (
  state = initState,
  action: browserActions.Actions
): IBrowserState => {
  switch (action.type) {
    case browserActions.SET_STATE: {
      const { payload } = action;
      return { ...state, state: payload };
    }

    case browserActions.POPULATE_FOLDER_LIST: {
      const { payload } = action;
      return { ...state, list: payload };
    }

    default:
      return state;
  }
};

export default browserReducer;
