
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Page404 from "./components/Page404";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanySellsMilkToDealer from "./components/company/CompanySellMilkToDealer";
import CompanyBuyMilkFromFarmer from "./components/company/CompanyBuyMilkFromFarmer";
import DealerSellMilkToCustomer from "./components/dealer/DealerSellMilkToCustomer";
import GetAllCompanyBuyOrders from "./components/company/GetAllCompanyBuyOrders";
import GetAllCompanySellOrders from "./components/company/GetAllCompanySellOrders";
import GetAllDealerSellOrders from "./components/dealer/GetAllDealerSellOrders";
import CompanyPayBillToFarmer from "./components/company/CompanyPayBillToFarmer";
import DealerPayBillToCompany from "./components/dealer/DealerPayBillToCompany";
import CustomerPayBillToDealer from "./components/customer/CustomerPayBillToDealer";

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
                                    <Route path="/home" loginStatus> <Home /> </Route>
                                    <Route path="/companybuymilkfromfarmer"><CompanyBuyMilkFromFarmer /></Route>
                                    <Route path="/companysellsmilktodealer"><CompanySellsMilkToDealer /></Route>
                                    <Route path="/getallcompanybuyorders"><GetAllCompanyBuyOrders /></Route>
                                    <Route path="/getallcompanysellorders" ><GetAllCompanySellOrders /></Route>
                                    <Route path="/companypaybilltofarmer"><CompanyPayBillToFarmer /></Route>
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
                        <div className="container">
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/logout"> <Logout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </Router>
                </div>
            );
        } else if (user === 'DEALER') {
            return (
                <div>
                    <Router>
                        <div>
                            <Header />
                            <div className="container">
                                <Switch>
                                    <Route exact path="/" loginStatus > <Home /> </Route>
                                    <Route path="/home" loginStatus> <Home /> </Route>
                                    <Route path="/dealersellmilktocustomer" ><DealerSellMilkToCustomer /></Route>
                                    <Route path="/getalldealersellorders" ><GetAllDealerSellOrders /></Route>
                                    <Route path="/dealerpaybilltocompany" ><DealerPayBillToCompany /></Route>
                                    <Route path="/logout"> <Logout /> </Route>
                                    <Route path="/*"> <Page404 /> </Route>
                                </Switch>
                            </div>
                            {/* <Footer /> */}
                        </div>
                    </Router>
                </div>
            );
        } else if (user === 'CUSTOMER') {
            return (
                <div>
                    <Router>
                        <div>
                            <Header />
                            <div className="container">
                                <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/customerpaybilltodealer" ><CustomerPayBillToDealer/></Route>
                                <Route path="/logout"> <Logout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                                </Switch>
                            </div>
                            {/* <Footer /> */}
                        </div>
                    </Router>
                </div>
            );
        } else {
            return null;
        };
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