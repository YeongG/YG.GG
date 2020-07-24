import { combineReducers } from 'redux';
import accountReducers from './account';

const rootReducer = combineReducers({
    account:accountReducers,
});

export default rootReducer;
export type stateType = ReturnType<typeof rootReducer>;