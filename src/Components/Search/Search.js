import React, { useEffect, useState } from 'react';
import PrevRankItem from './PrevRankItem';
import TierBox from './TierBox';
import GameItem from './GameItem';
import { requestAPI } from '../../lib/api';
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
    // const state = 
    const [ summonerData, setSummonerData ] = useState(null);
    const [ summonerTierData, setSummonerTierData ] = useState(null);
    const [ leagueData, setLeagueData ] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Search 랜더링");
    });
    useEffect(() => {
        const { userName } = match.params;
        (async() => {
            try {
                const { data : summonerData } = await requestAPI(`summoner/v4/summoners/by-name/${userName}`)
                dispatch(add(userName));
                setSummonerData(summonerData);
                

                const { data : summonerTierData } = await requestAPI(`league/v4/entries/by-summoner/${summonerData.id}`);
                const soloRankData = summonerTierData.find(data => data.queueType === "RANKED_SOLO_5x5") || null;
                // 솔로랭크데이터 없으면 NULL

                setSummonerTierData(summonerTierData);
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
                        {summonerTierData && summonerTierData.map(data => <TierBox key={data.queueType} tierData={data} />)}
                    </BodySideWrap>
                    <BodyMainWrap>
                        {/* {gameItem.map((data,index) => <GameItem key={index} gameId = {data.id}/>)} */}
                    </BodyMainWrap>
                </Body>
            </SearchWrap>
        </>
    );
}

export default Search;