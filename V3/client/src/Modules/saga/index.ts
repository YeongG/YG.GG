import { all } from "redux-saga/effects";
import accountSaga from '../saga/account';
import leagueSaga from '../saga/league';
import gamedataSaga from '../saga/gamedata';


function* rootSaga(){
    yield all([
        accountSaga(),
        leagueSaga(),
        gamedataSaga(),
    ]);
} 

export default rootSaga;