
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Page404 from "./components/Page404";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanySellsMilkToDealer from "./components/company/CompanySellMilkToDealer";

const Routes = () => {


    let [loginStatus, setLoginStatus] = useState(false);
    let [user, setUser] = useState('ADMIN');

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
        setUser(sessionStorage.getItem('user'))
    }, []);

    if (loginStatus) {
        if (user === 'ADMIN') {
            return (
                <div>
                    <Router>
                        <div>
                            <Header />
                            <div className="container">
                                <Switch>
                                    <Route exact path="/" loginStatus > <Home /> </Route>
                                    <Route path="/companysellsmilktodealer"><CompanySellsMilkToDealer /></Route>
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
        } else if (user === 'FARMER') {
            return (
                <div>
                    <Router>
                        <Header />
                    </Router>
                </div>
            );
        } else if (user === 'DEALER') {
            return (
                <div>
                    <Router>
                        <Header />
                    </Router>
                </div>
            );
        } else {
            return null;
        }
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