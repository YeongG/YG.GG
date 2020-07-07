import React, { useEffect, useMemo } from 'react';
import Bronze from './Emblem_Bronze.png';
import Challenger from './Emblem_Challenger.png';
import Diamond from './Emblem_Diamond.png';
import Gold from './Emblem_Gold.png';
import GrandMaster from './Emblem_Grandmaster.png';
import Iron from './Emblem_Iron.png';
import Master from './Emblem_Master.png';
import Platinum from './Emblem_Platinum.png';
import Silver from './Emblem_Silver.png';
import { 
    TierBoxWrap,
    StyledImg,
    StyledImgWrap,
    SummonerInfoWrap,
    LeaguePorint
} from './styled';

const tierImgSrcObj = {
    Bronze,
    Challenger,
    Diamond,
    Gold,
    GrandMaster,
    Iron,
    Master,
    Platinum,
    Silver
};

const queueTypeToKorean = {
    RANKED_FLEX_SR:"자유",
    RANKED_SOLO_5x5:"솔로",
};

const TierBox = ({tierData}) => {
    useEffect(() => {
        console.log("TierBox 랜더링");
    });
    const {
        queueType,
        rank,
        tier,
        wins,
        losses,
        leaguePoints
    } = tierData;
    
    const winRate = useMemo(() => ((wins/(wins+losses))*100).toFixed(2),[]);

    return (
        <TierBoxWrap>
            <StyledImgWrap>
                <StyledImg src={tierImgSrcObj[tier.toLowerCase().charAt(0).toUpperCase() + tier.toLowerCase().slice(1)]} />
            </StyledImgWrap>
            <SummonerInfoWrap>
                <div>{queueTypeToKorean[queueType]}랭크</div>
                <div>{tier} {rank}</div>
                <div><LeaguePorint>{leaguePoints} LP</LeaguePorint> {wins}승 {losses}패</div>
                <div>승률 {winRate}%</div>
            </SummonerInfoWrap>
        </TierBoxWrap>
    );
}

export default TierBox;