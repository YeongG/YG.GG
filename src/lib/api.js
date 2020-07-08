import axios from 'axios';

const API_KEY = "RGAPI-37b6de4a-b8c8-4eea-b243-148b12a64b2e";

export const requestAPI = subUrl => axios.get(`/lol/${subUrl}?api_key=${API_KEY}`);
export const getMatchesData = (accountId,startIndex,endIndex) => axios.get(`/lol/match/v4/matchlists/by-account/${accountId}?beginIndex=${startIndex}&endIndex=${endIndex}&api_key=${API_KEY}`);
export const getGameDataArr = async(matchDataArr) => {
    const gameDataArr = new Array(matchDataArr.length);
    await Promise.all(matchDataArr.map(async (gameId,index) => {
        const { data } = await requestAPI(`match/v4/matches/${gameId.gameId}`);
        gameDataArr[index] = data;
    }));   
    gameDataArr.forEach((gameData,index) => {
        const searchSummonerData = gameData.participants.find(playerData => playerData.championId === matchDataArr[index].champion);
        gameData.summonerData = searchSummonerData;
    });
    return gameDataArr;
}
