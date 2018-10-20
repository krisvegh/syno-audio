import { combineReducers } from 'redux';
import player from 'src/reducers/playerReducer';
import login from './loginreducer';

const rootReducer = combineReducers({ login, player });

export default rootReducer;
