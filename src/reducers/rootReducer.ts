import { combineReducers } from 'redux';
import player from 'src/reducers/playerReducer';
import browser from './browserReducer';
import login from './loginreducer';

const rootReducer = combineReducers({ login, player, browser });

export default rootReducer;
