import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";

import Home from './views/home';
import Setting from './views/setting';
import App from './App';

const customHistory = createBrowserHistory();

export default function router() {
    return (
        <Router history={customHistory}>
            <App/>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/setting/" component={Setting} />
            </Switch>
        </Router>
    )
}