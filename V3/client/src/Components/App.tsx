import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Index from './Index/Index';
import Search from './Search/Search';       
import { createGlobalStyle } from 'styled-components';
   
const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        padding:0;
    }
`;

const App:FC = () => {
    return (
        <Router>
            <GlobalStyle/>   
            <Nav/>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/search/:username" component={Search} />
            </Switch>
        </Router> 
    );
} 
     
export default App;        