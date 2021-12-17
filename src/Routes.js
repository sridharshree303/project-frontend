
import React,{useEffect,useState} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Page404 from "./components/Page404";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {

    <p> THis is routers page </p>
    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus ) {    // login statu && id -1
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/logout"> <Logout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        )
    }
    else {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/register"> <Register /> </Route>
                                <Route path="/login"> <Login /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
}



export default Routes;