import { Dispatch } from 'redux';
import { IPlayerProps } from 'src/interfaces/player.interfaces';
import { IAppstate } from 'src/store/IAppstate.interface';
import { convertToFormdata } from 'src/utils/synoLogin';

export const setPlayerListLoading = (payload: boolean) => ({
  payload,
  type: 'PLAYER_SET_LIST_LOADING'
});

export const populateFoldersList = (payload: any) => ({
  payload,
  type: 'PLAYER_POPULATE_FOLDERS_LIST'
});

export const fetchFolders = (props: IPlayerProps) => async (
  dispatch: Dispatch,
  getState: () => IAppstate
) => {
  dispatch(setPlayerListLoading(true));
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
  console.log(data, error);
  if (error) {
    props.history.push('login');
  }
};
