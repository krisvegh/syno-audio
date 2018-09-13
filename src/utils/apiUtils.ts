import { ILoginState } from 'src/reducers/loginreducer';
import { convertToFormdata } from './synoLogin';
// export const isLoggedIn =

export const APIlogIn = async (login: ILoginState) => {
  const resp = await fetch(`/webman/login.cgi?enable_syno_token=yes`, {
    body: convertToFormdata({
      enable_device_token: 'no',
      isIframeLogin: 'no,',
      passwd: login.password,
      username: login.username
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie: 'stay_login=1;'
    },
    method: 'POST'
  });
  return resp.json();
};
