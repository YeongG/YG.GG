import React, { FC } from 'react';
import { SummonerWrap } from './styled';

interface SummonerType {
    championName:string,
    nickname:string,
}

const Summoner:FC<SummonerType> = ({championName,nickname}) => {

    return (
        <SummonerWrap>
            <img alt="img" src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/champion/${(championName).replace(/ /g,"")}.png`} /> 
            <div>{nickname}</div>
        </SummonerWrap>
    );
}

export default Summoner;