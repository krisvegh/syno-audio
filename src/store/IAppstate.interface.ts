import { IPlayerPageState } from 'src/reducers/playerPageReducer';
import { ILoginState } from '../reducers/loginreducer';

export declare interface IAppstate {
  login: ILoginState;
  playerPage: IPlayerPageState;
}
