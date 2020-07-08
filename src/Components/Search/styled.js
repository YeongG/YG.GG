import styled, { createGlobalStyle, css } from 'styled-components';

export const Global = createGlobalStyle`
    body {
        background-color:rgb(242, 242, 242);
    }
`;

export const SearchWrap = styled.div`

`;

export const Header = styled.header`
    width:1000px;
    margin:0 auto;
    padding:20px;
`;

export const Body = styled.div`
    width:1000px;
    margin:0 auto;
    padding:20px;
    display:flex;
`;

export const BodyMainWrap = styled.div`
    flex:1;
    box-sizing:border-box;
    padding:0 10px;
    font-size: 12px;
`;

export const BodySideWrap = styled.div`
    width:300px;
    font-size:12px;
`;

export const PrevRankWrap = styled.div`
    padding-bottom:30px;
    display:flex;
`;

export const PrevRankItemWrap = styled.div`
    padding:3px 4px 2px 4px;
    margin-right:3px;
    background-color:#e0e3e3;
    color:#657070;
    font-size:11px;
    border:1px solid #ced3d3;
    border-radius:3px;
`;

export const ProfileWrap = styled.div`
    width:100%;
    display:flex;
`;

export const ProfileImgWrap = styled.img`
    width:100px;
    height:100px;
    background-color:red;
`;

export const ProfileDataWrap = styled.div`
    margin:0 20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    & > span {
        color: #242929;
        font-size: 20px;
        font-weight: bold;
    }
`;

export const NowPlayGameBtn = styled.button`
    border: 1px solid #288b8b;
    background: #36a4a4;
    color: #f2f2f2;
    padding:10px;
    border-radius: 2px;
    font-size: 14px;
`;

export const TierBoxWrap = styled.div`
    width: 100%;
    color: #879292;
    position: relative;
    background-color: #f2f2f2;
    padding: 5px 0;
    border: 1px solid #cdd2d2;
    box-shadow: 0 1px #dcdfdf;
    background: #f2f2f2;
    border-radius: 2px;
    display:flex;
    margin-bottom:10px;

    & > div {
        flex:1;
    }
`;

export const StyledImg = styled.img`
    width:70%;
`;

export const StyledImgWrap = styled.div`
    text-align: center;
`;

export const SummonerInfoWrap = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    & > div {
        margin:2px 0;
    }
    & > div:nth-child(1) {
        font-size: 13px;
        color: #879292;
    }
    & > div:nth-child(2) {
        font-size: 17px;
        font-weight: bold;
        color: #1f8ecd;
    }
`;

export const LeaguePorint = styled.span`
    color: #555e5e;
    font-weight: bold;
`;

export const GameItemWrap = styled.div`
    border-radius:3px;
    margin-bottom:8px;
    border: 1px solid #cdd2d2;
    width: 689px;
    display:flex;

    & > div {
        box-sizing:border-box;
        padding:10px 0;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    ${props => props.isWin ? css`
        border-color: #99b9cf;
        background-color: #a3cfec;
    ` : css`
        background-color: #e2b6b3;
        border-color: #cea7a7;
    `};
`;

export const GameStats = styled.div`
    width: 70px;
    text-align:center;
`;

export const GameType = styled.div`
    text-align: center;
    font-size: 11px;
    color: #555;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Bar = styled.div`
    background: #99b9cf;
    display: block;
    width: 27px;
    margin: 5px auto;
    height: 2px;
`;

export const GameResult = styled.div`
    color:${({isWin}) => isWin ? "#1a78ae" : "#c6443e"};
    font-weight:bold;
`;

export const GameSettingInfo = styled.div`
    width:100px;
`;

export const ImgsWrap = styled.div`
    display:flex;
`;

export const ChampionImg = styled.img`
    width:46px;
    height:46px;
    border-radius:100%;
`;


export const Spell = styled.img`
    border-radius:3px;
    width:22px;
    height:22px;
`;

export const Roon = styled.img`
    border-radius:100%;

    &:nth-child(1) {
        background-color:black; 
    }
`;

export const SpellWrap = styled.div`
    margin-left:2px;
`;

export const ChampionName = styled.div`
    text-align:center;
    margin-top: 8px;
    font-size: 11px;
    color: #555;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const KDAWrap = styled.div`
    font-size:11px;
    text-align:center;
    width:113px;
`;

export const KDA = styled.div`
    color: #879292;
    font-size: 15px;
    white-space: nowrap;
    & > span {
        font-weight:bold;
    }

    & > span:nth-child(1) {
        color: #555e5e;
    }

    & > span:nth-child(3) {
        color: #555e5e;
    }

    & > span:nth-child(2) {
        color:#c6443e;
    }
`;

export const KDARatio = styled.div`
    color: #555e5e;
    font-size: 12px;
    font-weight: bold;
    margin-top: 6px;
`;

export const Stats = styled.div`
    width:90px;
    font-size: 12px;
    text-align: center;
    color: #555e5e;
    & > div {
        margin:1px 0;
    }
    & > div:nth-child(3) {
        color:#c6443e;
    }
`;

export const Items = styled.div`
    width:110px;
    flex-wrap:wrap;
    align-content:center;
    
    flex-direction:row !important;
`;

export const Item = styled.div`
    background-image:url(${({src}) => src});
    background-size:cover;
    width:22px;
    height:22px;
    border-radius:3px;
    margin-top:2px;
    margin-right:2px;
`;

export const PlayersName = styled.div`
    width:170px;
    flex-direction:row !important;
`;

export const TeamWrap = styled.div`
    flex:1;
    height:100%;
`;

export const SummonerWrap = styled.div`
    width: 80px;
    height: 18px;
    margin-left: 3px;
    text-align: left;
    font-size: 11px;
    color: #555;
    display:flex;
    align-items:center;

    & > img {
        width: 16px;
        height: 16px;
    }

    & > div {
        margin-left:3px;
        flex:1;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
`;