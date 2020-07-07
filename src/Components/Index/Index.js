import React, { 
    useState, 
    useCallback, 
    useEffect 
} from 'react';
import logo from './logo.png';
import SearchFocusItem from './SearchFocusItem';
import {
    Global,
    IndexWrap, 
    LogoWrap,
    SearchForm,
    SearchInput,
    SubmitButton,
    SearchFocusWrap,
    SearchFocusIntroduce,
    SearchFocusItemWrap
} from './styled';

const Index = ({history}) => {

    useEffect(() => {
        console.log("Index 랜더링");
    });
    const [isFocus, setIsFocus] = useState(false);
    const [lastlySearchName,setLastlySearchName] = useState([]);
    const [playerName,setPlayerName] = useState("");

    const changeFocus = useCallback(e => {
        setIsFocus(prev => !prev);
    },[]);

    const changePlayerName = useCallback(e => {
        setPlayerName(e.target.value);
    },[]);

    useEffect(() => {
        const lastlySearchName = window.localStorage.getItem("lastlySearchName") || "[]";
        const jsonLastlySearchName = JSON.parse(lastlySearchName);

        setLastlySearchName(jsonLastlySearchName);
    },[]);

    const onSubmit = useCallback(e => {
        e.preventDefault();
            
        const jsonLastlySearchName = JSON.stringify(lastlySearchName);
        window.localStorage.setItem("lastlySearchName",jsonLastlySearchName);

        history.push(`/search/${playerName}`);
    },[playerName]);

    return (
        <>
            <Global/>
            <IndexWrap>
                <LogoWrap>
                    <img src={logo} />
                </LogoWrap>
                <SearchForm onSubmit={onSubmit} onFocus={changeFocus} onBlur={changeFocus}>
                    <SearchInput onChange={changePlayerName} value={playerName} placeholder="소환사명" />
                    <SubmitButton>.GG</SubmitButton>
                    {isFocus && (
                    <SearchFocusWrap>
                        <SearchFocusIntroduce>최근검색</SearchFocusIntroduce>
                        <SearchFocusItemWrap>
                            {lastlySearchName.map(playerName => (
                                <SearchFocusItem key={playerName}>{playerName}</SearchFocusItem>
                            ))}
                        </SearchFocusItemWrap>
                    </SearchFocusWrap>
                    )}
                </SearchForm>
            </IndexWrap>
        </>
    );
}

export default Index;