import React from 'react';
import xLogo from './x.png';
import { 
    SearchFocusItemElements,
    SearchFocusItemText,
} from './styled';

const SearchFocusItem = ({children}) => {
    return (
        <SearchFocusItemElements>
            <SearchFocusItemText>{children}</SearchFocusItemText>
        </SearchFocusItemElements>
    );
}

export default SearchFocusItem;