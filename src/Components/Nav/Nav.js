import React from 'react';
import NavGameItem from './NavGameItem';
import {
    Header,
    HeaderH1,
    NavGameListWrap,
    NavWrap,
    Menu,
    MenuItem
} from './styled';

const gameItemArray = [
    {
        src:"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg",
        gameTitle:"리그오브레전드"
    },
    {
        src:"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-next-gray.svg",
        gameTitle:"NEXT",
    },
    {
        src:"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-pubg-gray.svg",
        gameTitle:"배틀그라운드"
    },
    {
        src:"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-overwatch-gray.svg",
        gameTitle:"오버워치",
    },
    {
        src:"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-fortnite-gray.svg",
        gameTitle:"포트나이트",
    },
    {
        src:"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-r-6-gray.svg",
        gameTitle:"레인보우식스 시즈",
    },
    {
        src:"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-gray.svg",
        gameTitle:"톡피지지"
    },
];

const Nav = () => {
    return (
        <NavWrap>
            <Header>
                <HeaderH1>YG.GG</HeaderH1>
                <NavGameListWrap>
                    {
                        gameItemArray.map(gameItem => <NavGameItem 
                            src={gameItem.src}
                            gameTitle={gameItem.gameTitle}
                        />)
                    }
                </NavGameListWrap>
            </Header>
            <Menu>
                <MenuItem>#집에있자</MenuItem>
                <MenuItem>챔피언 분석</MenuItem>
                <MenuItem>우르프</MenuItem>
                <MenuItem>랭킹</MenuItem>
                <MenuItem>통계</MenuItem>
                <MenuItem>프로관전</MenuItem>
                <MenuItem>멀티서치</MenuItem>
                <MenuItem>커뮤니티</MenuItem>
            </Menu>
        </NavWrap>
    );
}

export default Nav;