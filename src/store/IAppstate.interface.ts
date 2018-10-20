import { IPlayerState } from 'src/interfaces/player.interfaces';
import { ILoginState } from '../reducers/loginreducer';

export declare interface IAppstate {
  login: ILoginState;
  player: IPlayerState;
}
