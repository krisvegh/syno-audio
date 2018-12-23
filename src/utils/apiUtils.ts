import { ILoginState } from 'src/interfaces/login.interfaces';
import { setCookie } from './cookies';
import { convertToFormdata } from './synoLogin';

export const APIlogIn = async (login: ILoginState) => {
  setCookie('serverUrl', login.serverURL, 1);
  const resp = await fetch(`/webman/login.cgi?enable_syno_token=yes`, {
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
  return resp.json();
};

export const checkToken = async () => {
  const resp = await fetch('/webman/login.cgi', {
    method: 'GET'
  });
  return resp.json();
};
