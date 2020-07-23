import React, { useEffect, memo, FC } from 'react';
import { 
    SearchFocusItemElements,
    SearchFocusItemText,
} from './styled';

interface SearchFocusItemProps {
    to:string,
    children:string
}

const SearchFocusItem:FC<SearchFocusItemProps> = ({children,to}) => {
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