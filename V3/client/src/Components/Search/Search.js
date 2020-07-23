import React, { useEffect, useState, useRef } from 'react';
// import PrevRankItem from './PrevRankItem';
import TierBox from './TierBox';
import GameItem from './GameItem';
import { requestAPI, getMatchesData, getGameDataArr } from '../../lib/api';
import { add } from '../../Modules/searchPlayerName';
import {
    Header,
    SearchWrap, 
    Global,
    PrevRankWrap,
    ProfileWrap,
    ProfileImgWrap,
    ProfileDataWrap,
    NowPlayGameBtn,
    BodySideWrap,
    Body,
    BodyMainWrap
} from './styled';
import { useDispatch } from 'react-redux';

const Search = ({match}) => {
    
    const [ summonerData, setSummonerData ] = useState(null);
    const [ summonerTierData, setSummonerTierData ] = useState(null);
    const [ leagueData, setLeagueData ] = useState(null);

    const  endIndex = useRef(10);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Search 랜더링");
    });
    useEffect(() => {
        const { userName } = match.params;

        (async() => {
            try {
                const { data : summonerData } = await requestAPI(`summoner/v4/summoners/by-name/${userName}`);

                dispatch(add(userName));
                setSummonerData(summonerData);
                
                const { data : summonerTierData } = await requestAPI(`league/v4/entries/by-summoner/${summonerData.id}`);
                setSummonerTierData(summonerTierData);
                
                // const soloRankData = summonerTierData.find(data => data.queueType === "RANKED_SOLO_5x5") || null;
                // 솔로랭크데이터 없으면 NULL

                const {
                    data:{
                        matches:matchData
                    }
                } = await getMatchesData(summonerData.accountId, endIndex.current-10, endIndex.current);
                const gameData = await getGameDataArr(matchData);
                
                setLeagueData(gameData);

            } catch(err) {
                console.log(err);
            }
        })();
    },[]);

    return (
        <>
            <Global/>
            <SearchWrap>
                <Header>
                    <PrevRankWrap>
                        {/* {seasonTierData.map(({season, rank}) => <PrevRankItem 
                            season={season}
                            rank={rank}
                            key={season}
                        />)} */}
                    </PrevRankWrap>
                    { summonerData && (
                        <ProfileWrap>
                            <ProfileImgWrap src={`http://ddragon.leagueoflegends.com/cdn/10.13.1/img/profileicon/${summonerData.profileIconId}.png`} />
                            <ProfileDataWrap>
                                <span>{summonerData.name}</span>
                                <NowPlayGameBtn>인게임 정보</NowPlayGameBtn>
                            </ProfileDataWrap>          
                        </ProfileWrap>
                    )}
                </Header>
                <Body>
                    <BodySideWrap>
                        {summonerTierData && summonerTierData.map(data => 
                            (<TierBox 
                                key={data.queueType} 
                                tierData={data} 
                            />)
                        )}
                    </BodySideWrap>
                    <BodyMainWrap>
                        {leagueData && leagueData.map(gameData => 
                            (<GameItem 
                                key={gameData.gameId} 
                                gameData={gameData}
                            />)
                        )}
                    </BodyMainWrap>
                </Body>
            </SearchWrap>
        </>
    );
}

export default Search;