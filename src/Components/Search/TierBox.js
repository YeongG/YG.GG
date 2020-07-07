import React, { useEffect } from 'react';
import { 
    TierBoxWrap,
    StyledImg,
    StyledImgWrap,
    SummonerInfoWrap,
    LeaguePorint
} from './styled';

const TierBox = ({data}) => {
    useEffect(() => {
        console.log("TierBox 랜더링");
    });
    const {
        type,
        rank,
        tier,
        win,
        lose
    } = data;
    
    return (
        <TierBoxWrap>
            <StyledImgWrap>
                <StyledImg src="https://opgg-static.akamaized.net/images/medals/platinum_1.png?image=q_auto&v=1" />
            </StyledImgWrap>
            <SummonerInfoWrap>
                <div>{type}</div>
                <div>{rank} {tier}</div>
                <div><LeaguePorint>{}LP</LeaguePorint> {win}승 {lose}패</div>
                <div>승률 51%</div>
                <div>리 신의 경호대</div>
            </SummonerInfoWrap>
        </TierBoxWrap>
    );
}

export default TierBox;