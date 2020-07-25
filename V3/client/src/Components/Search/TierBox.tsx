import React, { useEffect, useMemo, memo, FC } from 'react';
import Bronze from './img/Emblem_Bronze.png';
import Challenger from './img/Emblem_Challenger.png';
import Diamond from './img/Emblem_Diamond.png';
import Gold from './img/Emblem_Gold.png';
import GrandMaster from './img/Emblem_Grandmaster.png';
import Iron from './img/Emblem_Iron.png';
import Master from './img/Emblem_Master.png';
import Platinum from './img/Emblem_Platinum.png';
import Silver from './img/Emblem_Silver.png';
import { LeagueType } from '../../Modules/action/league';
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

interface TierBoxType {
    tierData:LeagueType
}

type RankTypeStr = (
    | "RANKED_FLEX_SR"
    | "RANKED_SOLO_5x5"
);

type TierStr = (
    | "Bronze"
    | "Challenger"
    | "Diamond"
    | "Gold"
    | "GrandMaster"
    | "Iron"
    | "Master"
    | "Platinum"
    | "Silver"
);

const TierBox:FC<TierBoxType> = ({tierData}) => {
    const {
        queueType,
        rank,
        tier,
        wins,
        losses,
        leaguePoints
    } = tierData;

    useEffect(() => {
        console.log("TierBox 랜더링");
    })
    
    const winRate:string = useMemo(() => ((wins/(wins+losses))*100).toFixed(2),[]);
    const tierStr:TierStr = useMemo(() => (tier.toLowerCase().charAt(0).toUpperCase() + tier.toLowerCase().slice(1) as TierStr),[]);

    return (
        <TierBoxWrap>
            {
                <>
                    <StyledImgWrap>
                        <StyledImg src={tierImgSrcObj[tierStr]} />
                    </StyledImgWrap>
                    <SummonerInfoWrap>
                        <div>{queueTypeToKorean[queueType as RankTypeStr]}랭크</div>
                        <div>{tier} {rank}</div>
                        <div><LeaguePorint>{leaguePoints} LP</LeaguePorint> {wins}승 {losses}패</div>
                        <div>승률 {winRate}%</div>
                    </SummonerInfoWrap>
                </>
            }
        </TierBoxWrap>
    );
}

export default memo(TierBox);