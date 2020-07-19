import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";
import Home from '../views/home';
import Setting from '../views/setting';
import ControlBar from './control-bar';
import Login from '../views/login';

const customHistory = createBrowserHistory();

export default function Content() {

    const isAuthenticated = false;
    const control_bar = isAuthenticated ?  <ControlBar/> : '';

    return (
        <Router history={customHistory}>
            <div className="flex-grow">
                <Switch>
                    <Route exact path="/"  render={props => !isAuthenticated
                        ? (<Redirect to={"/signin"}/>)
                        : (<Home {...props}/>)
                    } />
                    <Route exact path="/setting"  render={props => !isAuthenticated
                        ? (<Redirect to={"/signin"}/>)
                        : (<Setting {...props}/>)
                    } />
                    {/* <Route path="/signin" component={Login} /> */}
                    <Route exact path="/signin" render={props => isAuthenticated
                        ? (<Redirect to={"/"}/>)
                        : (<Login {...props}/>)
                    }/>
                </Switch>
            </div>
            {control_bar}
        </Router>
    )
}
