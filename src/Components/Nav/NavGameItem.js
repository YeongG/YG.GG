import React, { useEffect } from 'react';
import { 
    NavGameItemWrap,
    NavGameImg
} from './styled';

const NavGameItem = ({src,gameTitle}) => {
    useEffect(() => {
        console.log("NavGameItem 랜더링");
    });
    return (
        <NavGameItemWrap>
            <NavGameImg src={src} />
            <span>{gameTitle}</span>
        </NavGameItemWrap>
    );
}

export default NavGameItem;