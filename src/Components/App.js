import React from 'react';
import Index from '../Components/Index/Index';
import { createGlobalStyle } from 'styled-components';
import Nav from '../Components/Nav/Nav';
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
        <Nav/>
        <Router>
            <Global/>
            <Switch>
                <Route path="/" exact component={Index} />
            </Switch>
        </Router>
        </>
    );
}

export default App;