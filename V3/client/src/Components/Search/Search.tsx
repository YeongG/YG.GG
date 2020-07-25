import React, { useEffect, FC, SyntheticEvent, useCallback, MouseEvent } from 'react';
import TierBox from './TierBox';
import GameItem from './GameItem';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '../../Modules/action/account';
import { stateType } from '../../Modules/reducer';
import {
    Header,
    SearchWrap, 
    Global,
    ProfileWrap,  
    ProfileImgWrap,
    ProfileDataWrap,
    NowPlayGameBtn,
    BodySideWrap,
    Body,
    BodyMainWrap,
    MoreButton
} from './styled';   
import { updateGamedata } from '../../Modules/action/gamedata';

interface MatchParams {
    username:string
}

const Search:FC<RouteComponentProps<MatchParams>> = ({match}) => {
    const dispatch = useDispatch();
    const state = useSelector((state:stateType) => state);
    const { 
        account:summonerData,
        league:summonerTierData,
        gamedata:leagueData,
    } = state; 

    const moreBtnClick = useCallback((e:MouseEvent<HTMLDivElement>) => {
        dispatch(updateGamedata());
    },[dispatch])

    const imgError = useCallback((e:SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = "http://ddragon.leagueoflegends.com/cdn/10.13.1/img/profileicon/0.png"
    },[]);

    useEffect(() => {
        dispatch(getAccount(match.params.username));
    },[]);

    useEffect(() => {
        console.log("Search 랜더링");
    });

    return (
        <>
            <Global/>
            <SearchWrap>
                <Header>
                    { summonerData && (
                        <ProfileWrap>
                            <ProfileImgWrap onError={imgError} src={`http://ddragon.leagueoflegends.com/cdn/10.13.1/img/profileicon/${summonerData.profileIconId}.png`} />
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
                        <MoreButton onClick={moreBtnClick}>더 보기</MoreButton>
                    </BodyMainWrap>
                </Body>
            </SearchWrap>
        </>
    );
}

export default Search;