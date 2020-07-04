import styled from 'styled-components';

export const NavWrap = styled.div`

`;

export const IndexWrap = styled.div`
    background-color:#5383e8;  
    min-width: 1080px;
    min-height: 100%;
    height:100vh;
`;

export const Header = styled.header`
    display:flex;
    height:60px;
    background-color:#232f46;
    align-items:center;
`;

export const HeaderH1 = styled.h1`
    padding:15px 20px;
    font-size: 25px;
    text-align: center;
    color:white;
    box-sizing:border-box;
    background-color:#5383e8;
    height:100%;
`;

export const NavGameListWrap = styled.div`
    flex:1;
    display:flex;
    height:100%;
`;

export const NavGameItemWrap = styled.div`
    height:100%;
    color: #c3cbd1;
    padding:0 10px;
    display:flex;
    align-items:center;
    cursor:pointer;
`;

export const NavGameImg = styled.img`
    margin-right:5px;
`;

export const Menu = styled.div`
    background: #5383e8;
    height: 48px;
    border-bottom: 1px solid #4171d6;
    box-sizing: border-box;
    display:flex;
    justify-content:center;
    width:1300px;
`;

export const MenuItem = styled.div`
    border:3px solid transparent;
    padding:13px 12px;
    font-size: 15px;
    color:#b3cdff;
    transition:0.1s;
    cursor:pointer;
    &:hover {
        color:white;
        font-weight:bolder;
        border-bottom:3px solid white;
    }
`;