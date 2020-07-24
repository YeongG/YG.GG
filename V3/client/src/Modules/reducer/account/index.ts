import { accountAction, GET_ACCOUNT, SUCCESS_ACCOUNT, FAIL_ACCOUNT } from "../../action/account";

export interface accountStateType {
    accountId:string,
    id:string,
    name:string,
    profileIconId:number,
    puuid:string,
    revisionDate:string,
    summonerLevel:number,
}

const initialState:accountStateType = {
    accountId:"",
    id:"",
    name:"",
    profileIconId:0,
    puuid:"",
    revisionDate:"",
    summonerLevel:0
}

const accountReducers = (
    state:accountStateType = initialState,
    action:accountAction,
):accountStateType => {
    switch(action.type) {
        case SUCCESS_ACCOUNT: {
            return action.payload;
        }
        case FAIL_ACCOUNT: {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default accountReducers;