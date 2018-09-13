import { IPlayerPageState } from 'src/interfaces/playerPage.interfaces';
import { ILoginState } from '../reducers/loginreducer';

export declare interface IAppstate {
  login: ILoginState;
  playerPage: IPlayerPageState;
}
