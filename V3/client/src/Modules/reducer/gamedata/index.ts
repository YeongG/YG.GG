import { GameType } from '../../action/gamedata/interface';
import { GamedataActionType, SUCCESS_NEW_GAMEDATA, SUCCESS_UPDATE_GAMEDATA, FAIL_GAMEDATA } from '../../action/gamedata';

export type GamedataStateType = GameType[] | null;

const gamedataReducer = (
    state:GamedataStateType = null,
    action:GamedataActionType
):GamedataStateType => {
    switch(action.type) {
        case SUCCESS_NEW_GAMEDATA: {
            return action.payload;
        }
        case SUCCESS_UPDATE_GAMEDATA: {
            if(!state) return state;
            return state.concat(action.payload);
        }
        case FAIL_GAMEDATA: {
            return state;
        }
        default: {
            return state;
        }
    }
};

export default gamedataReducer;