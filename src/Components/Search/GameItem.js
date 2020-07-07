import React from 'react';
import { 
    GameItemWrap,
    GameStats,
    GameType,
    Bar,
    GameResult,
    ImgsWrap,
    ChampionImg,
    GameSettingInfo,
    SpellWrap,
    Spell,
    Roon,
    ChampionName,
    KDAWrap,
    KDA,
    KDARatio
} from './styled';

const GameItem = () => {
    return (
        <GameItemWrap>
            <GameStats>
                <GameType>솔랭</GameType>
                <Bar/>
                <GameResult isWin="true">승리</GameResult>
            </GameStats>
            <GameSettingInfo>
                <ImgsWrap>
                    <ChampionImg src="https://opgg-static.akamaized.net/images/lol/champion/TahmKench.png?image=q_auto,w_46&v=1591083841" />
                    <SpellWrap>
                        <Spell src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,w_22&v=1591083841" />
                        <Spell src="https://opgg-static.akamaized.net/images/lol/spell/SummonerSnowball.png?image=q_auto,w_22&v=1591083841" />
                    </SpellWrap>
                    <SpellWrap>
                        <Roon src="https://opgg-static.akamaized.net/images/lol/perk/8437.png?image=q_auto,w_22&v=1591083841/" />
                        <Roon src="https://opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto,w_22&v=1591083841" />
                    </SpellWrap>
                </ImgsWrap>
                <ChampionName>세트</ChampionName>
            </GameSettingInfo>
            <KDAWrap>
                <KDA>
                    <span>7</span> / <span>7</span> / <span>7</span>
                </KDA>
                <KDARatio>3:00 평점</KDARatio>
            </KDAWrap>
        </GameItemWrap>
    );
}

export default GameItem;
