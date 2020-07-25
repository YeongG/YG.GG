import React, { 
    useState, 
    useCallback, 
    useEffect,
    FC,
    FormEvent,
    ChangeEvent
} from 'react';
import logo from './img/logo.png';
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
import { RouteComponentProps } from 'react-router';
const Index:FC<RouteComponentProps> = ({history}) => {

    const [username, setUsername] = useState<string>("");

    const onSubmit = useCallback((e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push(`/search/${username}`);
    },[username]); 

    const onChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    },[]);
    return (
        <>
            <Global/>
            <IndexWrap>  
                <LogoWrap>
                    <img alt="img" src={logo} />
                </LogoWrap>
                <SearchForm onSubmit={onSubmit}>
                    <SearchInput onChange={onChange} value={username} placeholder="소환사명" />
                    <SubmitButton>.GG</SubmitButton>
                    {/* { isFocus && (
                    <SearchFocusWrap>
                        <SearchFocusIntroduce>최근검색</SearchFocusIntroduce>
                        <SearchFocusItemWrap>
                            {lastLySearchName.map(playerName => (
                                <SearchFocusItem to={`/search/${playerName}`} key={playerName}>{playerName}</SearchFocusItem>
                            ))}
                        </SearchFocusItemWrap>
                    </SearchFocusWrap>
                    )} */}
                </SearchForm>
            </IndexWrap>
        </>
    );
}

export default Index;