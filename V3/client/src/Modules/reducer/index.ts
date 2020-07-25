import { combineReducers } from 'redux';
import accountReducer from './account';
import leagueReducer from './league';
import indexReducer from './index/index';
import gamedataReducer from './gamedata';

const rootReducer = combineReducers({
    account:accountReducer,
    league:leagueReducer,
    index:indexReducer,
    gamedata:gamedataReducer,
});

export default rootReducer;
export type stateType = ReturnType<typeof rootReducer>;