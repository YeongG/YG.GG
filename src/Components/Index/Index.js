import React, { 
    useState, 
    useCallback, 
    useEffect 
} from 'react';
import logo from './logo.png';
import SearchFocusItem from './SearchFocusItem';
import { useSelector, useDispatch } from 'react-redux';
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
import { load } from '../../Modules/searchPlayerName';

class Component extends React.Component {
    componentDidUpdate() {

    }
    componentDidMount(){
        
    }
    render(){
        return (
            <div></div>
        );
    }
}

const Index = ({history}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("Index 랜더링");
    });
    useEffect(() => {
        dispatch(load());
    },[]);
    const lastLySearchName = useSelector(({searchPlayerName}) => searchPlayerName);
    const [isFocus, setIsFocus] = useState(false);
    const [playerName,setPlayerName] = useState("");

    const changeFocus = useCallback(e => {
        setIsFocus(prev => !prev);
    },[]);

    const changePlayerName = useCallback(e => {
        setPlayerName(e.target.value);
    },[]);

    const onSubmit = useCallback(e => {
        e.preventDefault();

        history.push(`/search/${playerName}`);
    },[playerName]);

    return (
        <>
            <Global/>
            <IndexWrap>
                <LogoWrap>
                    <img alt="img" src={logo} />
                </LogoWrap>
                <SearchForm onSubmit={onSubmit} onClick={changeFocus} >
                    <SearchInput onChange={changePlayerName} value={playerName} placeholder="소환사명" />
                    <SubmitButton>.GG</SubmitButton>
                    { isFocus && (
                    <SearchFocusWrap>
                        <SearchFocusIntroduce>최근검색</SearchFocusIntroduce>
                        <SearchFocusItemWrap>
                            {lastLySearchName.map(playerName => (
                                <SearchFocusItem to={`/search/${playerName}`} key={playerName}>{playerName}</SearchFocusItem>
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