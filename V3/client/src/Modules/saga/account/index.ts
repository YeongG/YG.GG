import { GetAccountSagaType, GET_ACCOUNT, successAccount, failAccount } from '../../action/account';
import { call, takeEvery, put } from 'redux-saga/effects';
import { request } from '../../../lib/api';
import { newGamedata } from '../../action/gamedata';
import { getLeague } from '../../action/league';

function* getAccountSaga(action:GetAccountSagaType){
    try {
        const accountData = yield call(request, `summoner/${action.payload}`);
        const { id, accountId } = accountData.data;    
        
        yield put(successAccount(accountData.data));
        yield put(getLeague(id));
        yield put(newGamedata(accountId));
    } catch(err) {
        yield put(failAccount());
    }
}

function* accountSaga(){
    yield takeEvery(GET_ACCOUNT, getAccountSaga);
}

export default accountSaga;