import { call, takeEvery, put } from 'redux-saga/effects';
import { request } from '../../../lib/api';
import { GetLeagueSagaType, GET_LEAGUE, failLeague, successLeague } from '../../action/league';

function* getLeagueSaga(action:GetLeagueSagaType){
    try {
        const leagueData = yield call(request, `league/${action.payload}`);
        yield put(successLeague(leagueData.data));
    } catch(err) {
        yield put(failLeague());    
    }
}

function* leagueSaga(){
    yield takeEvery(GET_LEAGUE, getLeagueSaga);
}

export default leagueSaga;