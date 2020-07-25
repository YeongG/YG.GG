import { AccountActionType, AccountType, SUCCESS_ACCOUNT, FAIL_ACCOUNT } from '../../action/account';

export type AccountStateType = AccountType | null;

const accountReducer = (
    state:AccountStateType = null,  
    action:AccountActionType
):AccountStateType => {
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

export default accountReducer;