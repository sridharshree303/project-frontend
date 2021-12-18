import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Header = () => {

    let [loginStatus, setLoginStatus] = useState(false);
    let [user, setUser] = useState(true);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
        setUser(sessionStorage.getItem('user'))
    }, []);

    if (loginStatus) {
        if (user === 'ADMIN') {
            return (
                <header class="header sticky-top">
                    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <div class="container">
                            <Link className="navbar-brand" to="/">
                                <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                    height="24px" alt="Capgemini" />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" >Hello</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/companysellsmilktodealer">CompanySellMilkToDealer</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout" >Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            );
        } else if (user === 'FARMER') {
            return (
                <header class="header sticky-top">
                    <h1> This is farmer section</h1>
                </header>
            );
        } else if (user === 'DEALER') {
            return (
                <header class="header sticky-top">
                    <h1> This is dealer section</h1>
                </header>
            );
        }
    } else {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" >Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" >Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;
