import { Dispatch } from 'redux';
import { ILoginContainerProps } from '../containers/LoginContainer';
import { IAppstate } from '../store/IAppstate.interface';
import { callApi } from '../utils/apiUtils';
import { convertToFormdata } from '../utils/synoLogin';

export const setInputVal = (pl: SetLoginFieldPayload) => ({
  payload: pl,
  type: 'LOGIN_SET_FIELD'
});

export interface SetLoginFieldPayload {
  name: string;
  value: string;
}

export const setLoading = (payload: boolean) => ({
  payload,
  type: 'LOGIN_SET_LOADING'
});

export const loginAction = (props: ILoginContainerProps) => async (
  dispatch: Dispatch,
  getState: () => IAppstate
) => {
  dispatch(setLoading(true));
  const { login } = getState();
  const resp = await callApi(`/webman/login.cgi?enable_syno_token=yes`, {
    body: convertToFormdata({
      enable_device_token: 'no',
      isIframeLogin: 'no,',
      passwd: login.password,
      username: login.username
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  });
  const { success } = resp;
  if (!success) {
    return;
  }
  props.history.push('/player');
};
