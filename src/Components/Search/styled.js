import styled, { createGlobalStyle } from 'styled-components';

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

export const ProfileImgWrap = styled.div`
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