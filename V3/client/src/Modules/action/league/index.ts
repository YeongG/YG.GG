export const GET_LEAGUE = "league/GET_LEAGUE" as const;
export const SUCCESS_LEAGUE = "league/SUCCESS_LEAGUE" as const;
export const FAIL_LEAGUE = "league/FAIL_LEAGUE" as const;

export interface LeagueType {
    leagueId:string,
    queueType:string,
    tier:string,
    rank:string,
    summonerId:string,
    summonerName:string,
    leaguePoints:number,
    wins: number,
    losses: number,
    veteran: boolean,
    inactive: boolean,
    freshBlood: boolean,
    hotStreak: boolean
}

export const getLeague = (payload:string) => ({
    type:GET_LEAGUE,
    payload
});

export const successLeague = (payload:LeagueType[]) => ({
    type:SUCCESS_LEAGUE,
    payload
});

export const failLeague = () => ({
    type:FAIL_LEAGUE,
});

export type LeagueActionType = (
    | ReturnType<typeof successLeague>
    | ReturnType<typeof failLeague>
);

export type GetLeagueSagaType = ReturnType<typeof getLeague>;