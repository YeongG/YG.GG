const express = require("express");
const api = express.Router();
const axios = require("axios");
const { request } = require("../../lib/api");

api.get("/summoner/:userName",async (req, res) => {
    const { userName } = req.params;
    try {
        const { data : accountData} = await request(`summoner/v4/summoners/by-name/${encodeURI(userName)}`);
        res.json(accountData);
    } catch(err) {
        res.status(400).json({message:"유저가 존재하지 않음"});
    }
});

api.get("/league/:userId",async (req, res) => {
    const { userId } = req.params;
    try {
        const { data : leagueData} = await request(`league/v4/entries/by-summoner/${userId}`);
        res.json(leagueData);
    } catch(err) {
        res.status(400).json({message:"ID가 존재하지 않음"});
    }
});

api.post("/matchlist", async (req, res) => {
    const { 
        accountId,
        beginIndex = 0,
        endIndex = 20,
     } = req.body;
    try {
        console.log(1);
        const { data : macthListData } = await axios.get(`https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${process.env.API_KEY}&beginIndex=${beginIndex}&endIndex=${endIndex}`);
        res.json(macthListData);
    } catch(err) {
        res.status(400).json({message:"ID가 존재하지 않음"});
    } 
});

api.post("/gameData", async (req, res) => {
    const { idArray } = req.body;
    try {
        const gameDataArray = [];
        await Promise.all(idArray.map(async gameId => {
            gameDataArray.push((await request(`match/v4/matches/${gameId}`)).data);
        })) 
        res.json(gameDataArray);
    } catch(err) {
        console.log(err);
        res.status(400).json({message:"ID가 존재하지 않음"});
    }
});

module.exports = api;