import { LeagueType, LeagueActionType, SUCCESS_LEAGUE, FAIL_LEAGUE } from "../../action/league";

export type LeagueStateType = LeagueType[] | null;

const leagueReducer = (
    state:LeagueStateType = null,
    action:LeagueActionType
):LeagueStateType => {
    switch(action.type) {
        case SUCCESS_LEAGUE: {
            return action.payload;
        }
        case FAIL_LEAGUE: {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default leagueReducer;