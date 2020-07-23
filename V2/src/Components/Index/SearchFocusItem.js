import React, { useEffect, memo } from 'react';
// import xLogo from './x.png';
import { 
    SearchFocusItemElements,
    SearchFocusItemText,
} from './styled';

const SearchFocusItem = ({children,to}) => {
    useEffect(() => {
        console.log("SearchFocusItem 랜더링");
    });
    return (
        <SearchFocusItemElements to={to}>
            <SearchFocusItemText>{children}</SearchFocusItemText>
        </SearchFocusItemElements>
    );
}

export default memo(SearchFocusItem);