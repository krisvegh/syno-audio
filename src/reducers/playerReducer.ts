import { AnyAction } from 'redux';
import { IPlayerState } from '../interfaces/player.interfaces';

const initState: IPlayerState = {
  isFolderListLoading: false
};

const player = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case 'PLAYER_SET_FOLDER_LIST_LOADING':
      return { ...state, folderListLoading: action.payload };

    default:
      return state;
  }
};

export default player;
