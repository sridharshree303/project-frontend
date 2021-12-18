import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../App.css";

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
                                <img src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                                        <Link className="nav-link" to="/companybuymilkfromfarmer">CompanyBuysMilk</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/companysellsmilktodealer">CompanySellMilk</Link>
                                    </li>

                                    <div class="dropdown">
                                        <button class="dropbtn">Company</button>
                                        <div class="dropdown-content">

                                            <Link className="nav-link" to="/addcompany">AddCompany</Link>
                                            <Link className="nav-link" to="/deletecompany">Delete Company</Link>
                                            <Link className="nav-link" to="/getallcompany">List Of Companys</Link>
                                            <Link className="nav-link" to="/getcompanybyid">Search CompanyId</Link>
                                            <Link className="nav-link" to="/updatecompany">Update Company </Link>
                                            <Link className="nav-link" to="/companydata">Others</Link>

                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <button class="dropbtn">Sales</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/getallcompanybuyorders">AllCompanyBuys</Link>
                                            <Link className="nav-link" to="/getallcompanysellorders">AllCompanySells</Link>
                                            <Link className="nav-link" to="/companypaybilltofarmer">PayFarmerBill</Link>
                                        </div>
                                    </div>

                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/getallcompanybuyorders">AllCompanyBuys</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/getallcompanysellorders">AllCompanySells</Link>
                                    </li> */}
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
                    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <div class="container">
                            <Link className="navbar-brand" to="/">
                                <img src="https://www.teahub.io/photos/full/80-801743_full-hd-3d-plain-background.jpg"
                                    height="24px" alt="Capgemini" />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    <div class="dropdown">
                                        <button class="dropbtn">Farmer</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/addfarmer">AddFarmer</Link>
                                            <Link className="nav-link" to="/deletefarmer">DeleteFarmer</Link>
                                            <Link className="nav-link" to="/viewallfarmers">List Of Farmers</Link>
                                            <Link className="nav-link" to="/farmerbyid">Search FarmerId</Link>
                                            <Link className="nav-link" to="/updatefarmer">Update Farmer</Link>
                                            <Link className="nav-link" to="/customerdata">Others</Link>
                                        </div>
                                    </div>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout" >Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            );
        } else if (user === 'DEALER') {
            return (
                <header class="header sticky-top">
                    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <div class="container">
                            <Link className="navbar-brand" to="/">
                                <img src="https://www.teahub.io/photos/full/80-801743_full-hd-3d-plain-background.jpg"
                                    height="24px" alt="Capgemini" />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dealersellmilktocustomer">DealerSellMilk</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/getalldealersellorders">AllDealerSells</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dealerpaybilltocompany">PayToCompany</Link>
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
        } else if (user === 'CUSTOMER') {
            return (
                <header class="header sticky-top">
                    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <div class="container">
                            <Link className="navbar-brand" to="/">
                                <img src="https://www.teahub.io/photos/full/80-801743_full-hd-3d-plain-background.jpg"
                                    height="24px" alt="Capgemini" />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/customerpaybilltodealer" >PayToDealer</Link>
                                    </li>
                                    <div class="dropdown">
                                        <button class="dropbtn">Company</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/addcustomer">AddCustomer</Link>
                                            <Link className="nav-link" to="/deletecustomer">DeleteCustomer</Link>
                                            <Link className="nav-link" to="/getallcustomers">List Of Customers</Link>
                                            <Link className="nav-link" to="/getcustomerbyid">Search CustomerId</Link>
                                            <Link className="nav-link" to="/updatecustomer">Update Customer</Link>
                                            <Link className="nav-link" to="/customerdata">Others</Link>
                                        </div>
                                    </div>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout" >Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            );
        } else {
            return null;
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
