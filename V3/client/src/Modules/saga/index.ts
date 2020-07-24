import { all } from "redux-saga/effects";
import accountSaga from "./account";

function* rootSaga(){
    yield all([accountSaga()]);
} 

export default rootSaga;