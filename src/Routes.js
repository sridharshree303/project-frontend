
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
import AddCompany from "./components/company/AddCompany";
import DeleteCompany from "./components/company/DeleteCompany";
import GetAllCompany from "./components/company/GetAllCompany";
import GetCompanyById from "./components/company/GetCompanyById";
import UpdateCompany from "./components/company/UpdateCompany";
import CompanyData from "./components/company/CompanyData";
import AddCustomer from "./components/customer/AddCustomer";
import DeleteCustomer from "./components/customer/DeleteCustomer";
import CustomerData from "./components/customer/CustomerData";
import GetAllCustomers from "./components/customer/GetAllCustomers";
import GetCustomerById from "./components/customer/GetCustomerById";
import UpdateCustomer from "./components/customer/UpdateCustomer";
import AddFarmer from "./components/farmer/AddFarmer";
import DeleteFarmer from "./components/farmer/DeleteFarmer";
import FarmerById from "./components/farmer/FarmerById";
import UpdateFarmer from "./components/farmer/UpdateFarmer";
import ViewAllFarmers from "./components/farmer/ViewAllFarmers";
import AddDealer from "./components/dealer/AddDealer";
import DeleteDealer from "./components/dealer/DeleteDealer";
import GetDealerById from "./components/dealer/GetDealerById";
import UpdateDealer from "./components/dealer/UpdateDealer";
import GetAllDealer from "./components/dealer/GetAllDealer";
import FarmerData from "./components/farmer/FarmerData";

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

                                    <Route path="/addcompany" ><AddCompany/></Route>
                                    <Route path="/deletecompany" ><DeleteCompany/></Route>
                                    <Route path="/getallcompany" ><GetAllCompany/></Route>
                                    <Route path="/getcompanybyid"><GetCompanyById/></Route>
                                    <Route path="/updatecompany"><UpdateCompany/></Route>
                                    <Route path="/companydata"><CompanyData/></Route>
                                    {/* farmer ----------------------------------------------*/}
                                    <Route path="/deletefarmer" ><DeleteFarmer/></Route>
                                    <Route path="/addfarmer" ><AddFarmer/></Route>
                                    <Route path="/viewallfarmers" ><ViewAllFarmers/></Route>
                                    <Route path="/farmerbyid" ><FarmerById/></Route>
                                    {/* dealer----------------------------------------------- */}
                                    <Route path="/deletedealer" ><DeleteDealer/></Route>
                                    <Route path="/adddealer" ><AddDealer/></Route>
                                    <Route path="/getalldealer" ><GetAllDealer/></Route>
                                    <Route path="/getdealerbyid"><GetDealerById/></Route>
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
                                <Route path="/addfarmer" ><AddFarmer/></Route>
                                <Route path="/farmerbyid" ><FarmerById/></Route>
                                <Route path="/updatefarmer" ><UpdateFarmer/></Route>
                                <Route path="/getallcompany" ><GetAllCompany/></Route>
                                <Route path="/getcompanybyid"><GetCompanyById/></Route>
                                <Route path="/farmerdata" > <FarmerData/></Route>
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
                                    <Route path="/adddealer" ><AddDealer/></Route>
                                    <Route path="/companysellsmilktodealer"><CompanySellsMilkToDealer /></Route>
                                    <Route path="/getallcompanysellorders" ><GetAllCompanySellOrders /></Route>
                                    <Route path="/getdealerbyid"><GetDealerById/></Route>
                                    <Route path="/updatedealer" ><UpdateDealer/></Route>
                                    <Route path="/getcompanybyid"><GetCompanyById/></Route>
                                    <Route path="/getallcompany" ><GetAllCompany/></Route>
                                    <Route path="/addcustomer" ><AddCustomer/></Route>
                                    <Route path="/deletecustomer" ><DeleteCustomer/></Route>
                                    <Route path="/getallcustomers" ><GetAllCustomers/></Route>
                                    <Route path="/getcustomerbyid" ><GetCustomerById/></Route>
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
                                <Route path="/addcustomer" ><AddCustomer/></Route>
                                <Route path="/customerdata"><CustomerData/></Route>
                                <Route path="/getdealerbyid"><GetDealerById/></Route>
                                <Route path="/getcustomerbyid" ><GetCustomerById/></Route>
                                <Route path="/updatecustomer" ><UpdateCustomer/></Route>
                                <Route path="/getalldealer" ><GetAllDealer/></Route>
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