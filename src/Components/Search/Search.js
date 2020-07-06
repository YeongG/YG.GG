import React, { useEffect } from 'react';
import PrevRankItem from './PrevRankItem';
import {
    Header,
    SearchWrap,
    Global,
    PrevRankWrap,
    ProfileWrap,
    ProfileImgWrap,
    ProfileDataWrap
} from './styled';

const Search = ({match}) => {
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
                        </ProfileDataWrap>
                    </ProfileWrap>
                </Header>
            </SearchWrap>
        </>
    );
}

export default Search;