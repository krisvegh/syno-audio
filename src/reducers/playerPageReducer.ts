import { AnyAction } from 'redux';
import { IPlayerPageState } from './../interfaces/playerPage.interfaces';

const initState: IPlayerPageState = {
  isFolderListLoading: false
};

const playerPage = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case 'PLAYERPAGE_SET_FOLDER_LIST_LOADING':
      return { ...state, folderListLoading: action.payload };

    default:
      return state;
  }
};

export default playerPage;
