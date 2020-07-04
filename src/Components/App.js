import React from 'react';
import Index from '../Components/Index/Index';
import { createGlobalStyle } from 'styled-components';
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
        <Router>
            <Global/>
            <Switch>
                <Route path="/" exact component={Index} />
            </Switch>
        </Router>
    );
}

export default App;