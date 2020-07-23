import React, { useEffect, memo } from 'react';
import championJSON from './chamiponJSON.json';
import spellJSON from './spellJSON.json';
import Summoner from './Summoner';
import { 
    GameItemWrap,
    GameStats,
    // GameType,
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
} from './styled';

const GameItem = ({gameData}) => {
    useEffect(() => {
        console.log("GameItem 랜더링");
    },[]);

    const {
        participants:playerGameDataArray,
        participantIdentities:playerDataArray,
        summonerData : {
            championId,
            spell1Id,
            spell2Id,
            stats:{
                assists,
                champLevel,
                deaths,
                item0,
                item1,
                item2,
                item3,
                item4,
                item5,
                item6,
                kills,
                win,
                perk0,
                perkSubStyle
            }
        }
    } = gameData;

    const itemArray = [item0,item1,item2,item6,item3,item4,item5,""];
    const playerGameDataArray1 = playerGameDataArray.slice(0,5);
    const playerGameDataArray2 = playerGameDataArray.slice(5,10);

    const playerDataArray1 = playerDataArray.slice(0,5);
    const playerDataArray2 = playerDataArray.slice(5,10);

    return (
        <GameItemWrap isWin={win}>
            <GameStats>
                {/* <GameType>솔랭</GameType> */}
                <Bar/>
                <GameResult isWin={win}>{win ? "승리" : "패배"}</GameResult>
            </GameStats>
            <GameSettingInfo>
                <ImgsWrap>
                    <ChampionImg src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/champion/${(championJSON[championId].engName).replace(/ /g,"")}.png`} />
                    <SpellWrap>
                        <Spell src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/spell/${spellJSON[spell1Id]}.png`} />
                        <Spell src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/spell/${spellJSON[spell2Id]}.png`} />
                    </SpellWrap>
                    <SpellWrap>
                        <Roon src={`https://opgg-static.akamaized.net/images/lol/perk/${perk0}.png?image=q_auto,w_22&v=1591083841`} />
                        <Roon src={`https://opgg-static.akamaized.net/images/lol/perkStyle/${perkSubStyle}.png?image=q_auto,w_22&v=1591083841`} />
                    </SpellWrap>
                </ImgsWrap>
                <ChampionName>{championJSON[championId].krName}</ChampionName>
            </GameSettingInfo>
            <KDAWrap>
                <KDA>
                    <span>{kills}</span> / <span>{deaths}</span> / <span>{assists}</span>
                </KDA>
                <KDARatio>{((kills+assists)/deaths).toFixed(2)} 평점</KDARatio>
            </KDAWrap>
            <Stats>
                <div>{champLevel} 레벨</div>
                {/* <div>221 (6.1) CS</div>
                <div>킬관여 43%</div> */}
            </Stats>
            <Items>
                {itemArray.map((id,index) => (
                    <Item 
                        src={(id && `http://ddragon.leagueoflegends.com/cdn/10.14.1/img/item/${id}.png`) || "https://opgg-static.akamaized.net/images/pattern/opacity.1.png"} 
                        key={index}
                    />
                ))}
            </Items>
            <PlayersName>
                <TeamWrap>
                    {
                        playerGameDataArray1.map((playerData,index) => (
                            <Summoner 
                                nickname={playerDataArray1[index].player.summonerName} 
                                championName={championJSON[playerData.championId].engName}
                                key={playerData.championId} 
                            />
                        ))  
                    }
                </TeamWrap>
                <TeamWrap>
                    {
                        playerGameDataArray2.map((playerData,index) => (
                            <Summoner 
                                nickname={playerDataArray2[index].player.summonerName} 
                                championName = {championJSON[playerData.championId].engName}
                                key={playerData.championId} 
                            />
                        ))  
                    }
                </TeamWrap>
            </PlayersName>
        </GameItemWrap>
    );
}

export default memo(GameItem);
