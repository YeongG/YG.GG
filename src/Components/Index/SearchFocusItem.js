import React, { useEffect, memo } from 'react';
import xLogo from './x.png';
import { 
    SearchFocusItemElements,
    SearchFocusItemText,
} from './styled';

const SearchFocusItem = ({children}) => {
    useEffect(() => {
        console.log("SearchFocusItem 랜더링");
    });
    return (
        <SearchFocusItemElements>
            <SearchFocusItemText>{children}</SearchFocusItemText>
        </SearchFocusItemElements>
    );
}

export default memo(SearchFocusItem);