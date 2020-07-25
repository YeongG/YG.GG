import { GameType } from "./interface";

export const NEW_GAMEDATA = "gamedata/NEW_GAMEDATA" as const;
export const SUCCESS_NEW_GAMEDATA = "gamedata/SUCCESS_NEW_GAMEDATA" as const;

export const UPDATE_GAMEDATA = "gamadata/UPDATE_GAMEDATA" as const;
export const SUCCESS_UPDATE_GAMEDATA = "gamedata/SUCCESS_UPDATE_GAMEDATA" as const;

export const FAIL_GAMEDATA = "gamedata/FAIL_GAMEDATA" as const;

export const newGamedata = (payload:string) => ({
    type:NEW_GAMEDATA,
    payload
});

export const successNewGamedata = (payload:GameType[]) => ({
    type:SUCCESS_NEW_GAMEDATA,
    payload,
});

export const successUpdateGamedata = (payload:GameType[]) => ({
    type:SUCCESS_UPDATE_GAMEDATA,
    payload,
});

export const updateGamedata = () => ({
    type:UPDATE_GAMEDATA,
});

export const failGamedata = () => ({
    type:FAIL_GAMEDATA,
})

export type GamedataActionType = (
    | ReturnType<typeof successNewGamedata>
    | ReturnType<typeof successUpdateGamedata>
    | ReturnType<typeof updateGamedata>
    | ReturnType<typeof failGamedata>
);