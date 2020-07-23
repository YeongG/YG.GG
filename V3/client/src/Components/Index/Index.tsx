import React, { 
    useState, 
    useCallback, 
    useEffect,
    FC
} from 'react';
import logo from './img/logo.png';
import SearchFocusItem from './SearchFocusItem';
import {
    Global,
    IndexWrap, 
    LogoWrap,
    SearchForm,
    SearchInput,
    SubmitButton,
    SearchFocusWrap,
    SearchFocusIntroduce,
    SearchFocusItemWrap
} from './styled';
const Index:FC = () => {
    return (
        <>
            <Global/>
            <IndexWrap>
                <LogoWrap>
                    <img alt="img" src={logo} />
                </LogoWrap>
                <SearchForm>
                    <SearchInput placeholder="소환사명" />
                    <SubmitButton>.GG</SubmitButton>
                    {/* { isFocus && (
                    <SearchFocusWrap>
                        <SearchFocusIntroduce>최근검색</SearchFocusIntroduce>
                        <SearchFocusItemWrap>
                            {lastLySearchName.map(playerName => (
                                <SearchFocusItem to={`/search/${playerName}`} key={playerName}>{playerName}</SearchFocusItem>
                            ))}
                        </SearchFocusItemWrap>
                    </SearchFocusWrap>
                    )} */}
                </SearchForm>
            </IndexWrap>
        </>
    );
}

export default Index;