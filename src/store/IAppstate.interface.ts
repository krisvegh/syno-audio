import { IBrowserState } from 'src/interfaces/browser.interfaces';
import { ILoginState } from 'src/interfaces/login.interfaces';

export declare interface IAppstate {
  login: ILoginState;
  player: {};
  browser: IBrowserState;
}
