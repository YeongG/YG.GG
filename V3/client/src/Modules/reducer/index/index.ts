import { IndexActionType, RESET_INDEX, ADD_INDEX } from '../../action/index';

type IndexType = number;

const indexReducer = (
    state:IndexType = 0,
    action:IndexActionType
):IndexType => {
    switch(action.type) {
        case RESET_INDEX: {
            return 0;
        }
        case ADD_INDEX: {
            return state + 10;
        }
        default: {
            return state;
        }
    }
}

export default indexReducer;