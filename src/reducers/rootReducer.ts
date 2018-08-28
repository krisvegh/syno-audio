import { combineReducers } from 'redux';
import playerPage from 'src/reducers/playerPageReducer';
import login from './loginreducer';

const rootReducer = combineReducers({ login, playerPage });

export default rootReducer;
