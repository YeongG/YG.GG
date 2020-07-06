import React from 'react';
import Index from '../Components/Index/Index';
import { createGlobalStyle } from 'styled-components';
import Nav from '../Components/Nav/Nav';
import Search from '../Components/Search/Search';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

const Global = createGlobalStyle`
    body {
        margin:0;
        padding:0;
    }
`;


const App = () => {
    return (
        <>
        <Router>
            <Nav/>
            <Global/>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/search/:userName" exact component={Search} />
                <Route render = {() => <div>ERROR</div>}/>
            </Switch>
        </Router>
        </>
    );
}

export default App;