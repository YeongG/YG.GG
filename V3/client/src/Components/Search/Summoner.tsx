import React, { FC, MouseEvent } from 'react';
import { SummonerWrap } from './styled';

interface SummonerType {
    championName:string,
    nickname:string,
    onClick:(e:MouseEvent<HTMLDivElement>) => void,
}

const Summoner:FC<SummonerType> = ({championName, nickname, onClick}) => {

    return (
        <SummonerWrap>
            <img alt="img" src={`http://ddragon.leagueoflegends.com/cdn/10.15.1/img/champion/${(championName).replace(/ /g,"")}.png`} /> 
            <div onClick={onClick}>{nickname}</div>
        </SummonerWrap>
    );
}

export default Summoner;