import { AnyAction } from 'redux';

const initState: IPlayerPageState = {
  isFolderListLoading: false
};

export interface IPlayerPageState {
  isFolderListLoading: boolean;
}

const playerPage = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case 'PLAYERPAGE_SET_FOLDER_LIST_LOADING':
      return { ...state, folderListLoading: action.payload };

    default:
      return state;
  }
};

export default playerPage;
