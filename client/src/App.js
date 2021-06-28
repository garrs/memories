import React from 'react';
import Dashboard from './components/dashboard'
import Game from './components/game'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                {/* <Navbar /> */}
                <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/game" component={Game} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;