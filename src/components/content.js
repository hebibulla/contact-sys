import React,{useState,useEffect} from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";
import Home from '../views/home';
import Setting from '../views/setting';
import ControlBar from './control-bar';
import Login from '../views/login';
import Navbar from './navbar';

const customHistory = createBrowserHistory();

export default function Content({ sidebarToggle }) {

    // sidebar status
    const [sidebarToggled, setsidebarToggled] = useState(true);

    // auth
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function login(){
        setIsAuthenticated(true);
    }
    
    useEffect(() => {

        if(localStorage.getItem('login_status') === 'true'){
            setIsAuthenticated(true);
        }
        
        if(isAuthenticated === true){
            localStorage.setItem('login_status','true');
        }

    }, [isAuthenticated])



    return (
        <Router history={customHistory}>
            <div className="flex-grow">

                <Navbar/>

                <div className="p-4">
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
                            : (<Login login={ login } {...props}/>)
                        }/>
                    </Switch>
                </div>
            </div>

            {isAuthenticated ?  <ControlBar PcSidebarStatus={ sidebarToggled } hideSidebar={ () => (setsidebarToggled(false)) } /> : ''}

        </Router>
    )
}
