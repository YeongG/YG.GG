import React, { useEffect } from 'react';
import PrevRankItem from './PrevRankItem';
import TierBox from './TierBox';
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

const seasonTierData = [
    {
        season:"S7",
        rank:"Siliver",
    },
    {
        season:"S8",
        rank:"Gold",
    },
    {
        season:"S9",
        rank:"Platinum",
    }
];

const tierData = [
    {
        type:"솔로랭크",
        rank:"GOLD",
        tier:1,
        win:20,
        lose:24
    }
]

const Search = ({match}) => {
    useEffect(() => {
        const { userName } = match.params;
    },[]);

    return (
        <>
            <Global/>
            <SearchWrap>
                <Header>
                    <PrevRankWrap>
                        {seasonTierData.map(({season, rank}) => <PrevRankItem 
                            season={season}
                            rank={rank}
                            key={season}
                        />)}
                    </PrevRankWrap>
                    <ProfileWrap>
                        <ProfileImgWrap></ProfileImgWrap>
                        <ProfileDataWrap>
                            <span>회색빛돌고래</span>
                            <NowPlayGameBtn>인게임 정보</NowPlayGameBtn>
                        </ProfileDataWrap>          
                    </ProfileWrap>
                </Header>
                <Body>
                    <BodySideWrap>
                        {tierData.map(data => <TierBox data={data} />)}
                    </BodySideWrap>
                    <BodyMainWrap>dsa</BodyMainWrap>
                </Body>
            </SearchWrap>
        </>
    );
}

export default Search;