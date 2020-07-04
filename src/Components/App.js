import React from 'react';
import Index from '../Components/Index/Index';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Index} />
            </Switch>
        </Router>
    );
}

export default App;