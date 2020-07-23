import React, { useEffect, memo, FC } from 'react';
import { 
    NavGameItemWrap,
    NavGameImg
} from './styled';
import { GameItemType } from './Nav';

const NavGameItem:FC<GameItemType> = ({src,gameTitle}) => {
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

export default memo(NavGameItem);