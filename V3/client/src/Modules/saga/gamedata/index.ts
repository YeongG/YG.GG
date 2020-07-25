import { put, call, select, takeLatest } from 'redux-saga/effects';
import { resetIndex, addIndex } from '../../action/index';
import { NEW_GAMEDATA, failGamedata, successNewGamedata, UPDATE_GAMEDATA, successUpdateGamedata } from '../../action/gamedata';
import { requestPost, MatchType, matchlistToGamedata } from '../../../lib/api'; 


interface actionType {
    type:string,
    payload?:string
}

function* newGamedataSaga(action:actionType){
    yield put(resetIndex());
    try {
        const matchlistData = yield call(requestPost, "matchlist", {
            accountId:action.payload,
            beginIndex:0
        });

        const MatchTypeArr = matchlistData.data.matches as MatchType[];
        const gameData = yield call(matchlistToGamedata, MatchTypeArr);
        yield put(successNewGamedata(gameData));
    } catch(err) {
        yield put(failGamedata());
    }
}

function* updateGamedataSaga(action:actionType){
    try {
        const index = yield select(state => state.index);
        const accountId = yield select(state => state.account.accountId);
        yield put(addIndex());

        const matchlistData = yield call(requestPost, "matchlist", {
            accountId,
            beginIndex:index+10
        });

        const MatchTypeArr = matchlistData.data.matches as MatchType[];
        const gameData = yield call(matchlistToGamedata, MatchTypeArr);
        yield put(successUpdateGamedata(gameData));
    } catch(err) {
        yield put(failGamedata());
    }

}

function* gamedataSaga(){
    yield takeLatest(NEW_GAMEDATA, newGamedataSaga);
    yield takeLatest(UPDATE_GAMEDATA, updateGamedataSaga);
}

export default gamedataSaga;