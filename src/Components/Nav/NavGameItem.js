import React from 'react';
import { 
    NavGameItemWrap,
    NavGameImg
} from './styled';

const NavGameItem = ({src,gameTitle}) => {
    return (
        <NavGameItemWrap>
            <NavGameImg src={src} />
            <span>{gameTitle}</span>
        </NavGameItemWrap>
    );
}

export default NavGameItem;