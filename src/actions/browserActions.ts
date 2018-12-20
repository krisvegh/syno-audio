import { Dispatch } from 'redux';
import { createAction } from 'src/actions/createAction';
import { IFolder } from 'src/interfaces/folders.interfaces';
import { IPlayerProps } from 'src/interfaces/player.interfaces';
import { IAppstate } from 'src/store/IAppstate.interface';
import { convertToFormdata } from 'src/utils/synoLogin';
import { ActionsUnion } from './createAction';

export const SET_STATE = '[BROWSER] SET_STATE';
export const POPULATE_FOLDER_LIST = '[BROWSER] POPULATE_FOLDER_LIST';

export const actions = {
  populateFoldersList: (list: IFolder[]) =>
    createAction(POPULATE_FOLDER_LIST, list),

  setBrowserState: (state: 'loading' | 'ready') =>
    createAction(SET_STATE, state)
};

export const fetchFolders = (props: IPlayerProps) => async (
  dispatch: Dispatch,
  getState: () => IAppstate
) => {
  dispatch(actions.setBrowserState('loading'));
  const { login } = getState();
  const resp = await fetch('/webapi/AudioStation/folder.cgi', {
    body: convertToFormdata({
      additional: 'song_tag,song_audio,song_rating',
      api: 'SYNO.AudioStation.Folder',
      library: 'shared',
      limit: 1000,
      method: 'list',
      sort_by: 'title',
      sort_direction: 'DESC',
      version: 2
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-SYNO-TOKEN': localStorage.getItem('synoToken') || login.synoToken
    },
    method: 'POST'
  });
  const { data, error } = await resp.json();
  dispatch(actions.setBrowserState('ready'));
  dispatch(actions.populateFoldersList(data.items));
  console.log(data);
  if (error) {
    props.history.push('login');
  }
};

export type Actions = ActionsUnion<typeof actions>;
