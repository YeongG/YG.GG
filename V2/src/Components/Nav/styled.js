import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration:none;
    color:unset;
`; 

export const NavWrap = styled.div`
    background-color:#5383e8;
`;

export const Header = styled.header`
    display:flex;
    height:60px;
    align-items:center;
    background-color:#232f46;
    min-width:1200px;
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
    box-sizing: border-box;
    display:flex;
    justify-content:center;
    width:1300px;
    height:100%;
`;

export const MenuItem = styled.div`
    border:3px solid transparent;
    padding:11px 12px;
    height:100%;
    font-size: 15px;
    color:#b3cdff;
    transition:0.2s;
    cursor:pointer;
    box-sizing:border-box;
    &:hover {
        color:white;
        font-weight:bolder;
        border-bottom:3px solid white;
    }
`;

export const MenuWrap = styled.div`
    background: #5383e8;
    height: 48px;
    border-bottom: 1px solid #4171d6;
`;