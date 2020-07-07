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
    KDARatio,
    Stats,
    Item,
    Items,
    PlayersName,
    TeamWrap,
    SummonerWrap
} from './styled';

const itemUrl = [
    "https://opgg-static.akamaized.net/images/lol/item/3031.png?image=q_auto,w_22&v=1591083841",
    "https://opgg-static.akamaized.net/images/lol/item/3031.png?image=q_auto,w_22&v=1591083841",
    "https://opgg-static.akamaized.net/images/lol/item/3031.png?image=q_auto,w_22&v=1591083841",
    "https://opgg-static.akamaized.net/images/lol/item/3031.png?image=q_auto,w_22&v=1591083841",
    "https://opgg-static.akamaized.net/images/lol/item/3031.png?image=q_auto,w_22&v=1591083841",
    "https://opgg-static.akamaized.net/images/lol/item/3031.png?image=q_auto,w_22&v=1591083841",
    "https://opgg-static.akamaized.net/images/lol/item/3031.png?image=q_auto,w_22&v=1591083841",
    ""
]

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
            <Stats>
                <div>레벨17</div>
                <div>221 (6.1) CS</div>
                <div>킬관여 43%</div>
            </Stats>
            <Items>
                {itemUrl.map((src,index) => <Item key={index} src={src || "https://opgg-static.akamaized.net/images/pattern/opacity.1.png"} />)}
            </Items>
            <PlayersName>
                <TeamWrap>
                    <SummonerWrap>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQrz69so01gGN2PgnhcdVTCHQvPVAZ9Yk0zg&usqp=CAU" /> 
                        <div>한쿡사람ㅇㄴㅁ</div>
                    </SummonerWrap>
                </TeamWrap>
                <TeamWrap></TeamWrap>
            </PlayersName>
        </GameItemWrap>
    );
}

export default GameItem;
