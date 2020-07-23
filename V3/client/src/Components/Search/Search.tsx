import React, { useEffect, useState, useRef, FC } from 'react';
import TierBox from './TierBox';
import GameItem from './GameItem';
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
import { RouteComponentProps } from 'react-router';      

type SearchType = RouteComponentProps;

const Search:FC<SearchType> = ({match}) => {
        
    useEffect(() => { 
        console.log("Search 랜더링");
    });               
   
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
                    {/* { summonerData && (
                        <ProfileWrap>
                            <ProfileImgWrap src={`http://ddragon.leagueoflegends.com/cdn/10.13.1/img/profileicon/${summonerData.profileIconId}.png`} />
                            <ProfileDataWrap>
                                <span>{summonerData.name}</span>
                                <NowPlayGameBtn>인게임 정보</NowPlayGameBtn>
                            </ProfileDataWrap>          
                        </ProfileWrap>
                    )} */}
                </Header>
                <Body>
                    <BodySideWrap>
                        {/* {summonerTierData && summonerTierData.map(data => 
                            (<TierBox 
                                key={data.queueType} 
                                tierData={data} 
                            />)
                        )} */}
                    </BodySideWrap>
                    <BodyMainWrap>
                        {/* {leagueData && leagueData.map(gameData => 
                            (<GameItem 
                                key={gameData.gameId} 
                                gameData={gameData}
                            />)
                        )} */}
                    </BodyMainWrap>
                </Body>
            </SearchWrap>
        </>
    );
}

export default Search;