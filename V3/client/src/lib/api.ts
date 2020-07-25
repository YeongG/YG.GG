import axios from 'axios';
import { GameType, PlayerGameDataType } from '../Modules/action/gamedata/interface';
const SERVER_ADRESS = "http://localhost:4000/api/";


export interface MatchType {
    gameId:number,
    champion:number,
    queue:number,
    season:number,
    timestamp:number,
    role:string,
    lane:string,
    platformId:string,    
}

export const request = (url:string) => axios.get(SERVER_ADRESS + url);
export const requestPost = (url:string, body:object) => axios.post(SERVER_ADRESS + url, body);
const matchlistFilter = (array:MatchType[]) => array.map(({champion, gameId}) => ({champion, gameId}));
export const gamedataFilter = (array:GameType[]):void => {
    array.forEach(now => {
        const player = now.participants.find((now2) => now2.championId === now.champion) as PlayerGameDataType;
        now.summonerData = player;
    });
}
export const matchlistToGamedata = async(array:MatchType[]) => {
    const filterArray = matchlistFilter(array);
    
    const gameDataArr = await requestPost("gameData",{
        idArray:filterArray
    });
    gamedataFilter(gameDataArr.data as GameType[]); 

    return (gameDataArr.data as GameType[]);
}