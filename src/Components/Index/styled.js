import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const Global = createGlobalStyle`
    body {
        background-color:#5383e8;  
    }
`

export const IndexWrap = styled.div`  
    width:1000px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const LogoWrap = styled.div`
    margin:40px 0;
`;

export const SearchForm = styled.form`
    width:624px;
    background:#fff;
    border-radius:2px;
    position:relative;
`;

export const SearchInput = styled.input`
    width:100%;
    display:block;
    padding:15px 150px 18px 17px;
    background:none;
    border:none;
    font-size:14px;
    color:#9b9b9b;
    box-sizing:border-box;
    outline:none;
`;

export const SubmitButton = styled.button`
    background-color:rgb(0,169,255);
    height:30px;
    width:50px;
    border:none;
    border-radius:3px;
    font-weight:bolder;
    color:white;    
    position: absolute;
    right:10px;
    top:10px;
    font-size:18px;
`;

export const SearchFocusWrap = styled.div`
    background-color:#fff;
    box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.5);
`;

export const SearchFocusIntroduce = styled.div`
    text-align:center;
    color:#4a4a4a;
    padding:12px;
    font-size:15px;
`;

export const SearchFocusItemWrap = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
`;

export const SearchFocusItemElements = styled(Link)`
    width:33.3%;
    display:block;
    font-size:13px;
    box-sizing:border-box;
    padding:3px 15px;
    color:#666;
    display:flex;
    justify-content:space-around;
`;

export const SearchFocusItemText = styled.div`
    flex:1;
    cursor:pointer;
    text-align:center;
`;

export const SearchFocusItemStart = styled.div`
    width: 20px;
    height: 20px;
    background-position: center center;
    background-repeat: no-repeat;
    background-image:${props => `url(${props.src})`};
`;