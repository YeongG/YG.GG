import React from 'react';
import { SummonerWrap } from './styled';

const Summoner = ({championName,nickname}) => {


    return (
        <SummonerWrap>
            <img alt="img" src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/champion/${(championName).replace(/ /g,"")}.png`} /> 
            <div>{nickname}</div>
        </SummonerWrap>
    );
}

export default Summoner;