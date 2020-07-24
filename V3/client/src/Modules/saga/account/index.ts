import { getAccountSaga, getAccount, GET_ACCOUNT, failAccount } from '../../action/account';
import { request } from '../../../lib/api';
import { call, all, takeEvery, put } from 'redux-saga/effects';


function* getAccountSaga(action:getAccountSaga){
    try {
        const data = yield call(request,`summoner/${action.payload}`);
        console.log(data);
        
    } catch(err) {
        yield put(failAccount());
    }
}

function* accountSaga(){
    yield takeEvery(GET_ACCOUNT, getAccountSaga);
}

export default accountSaga;