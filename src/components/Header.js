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
                            <Link className="navbar-brand" to="/home">
                                <img src="https://images.all-free-download.com/images/graphiclarge/colored_company_logos_creative_design_579470.jpg"
                                    height="24px" alt="Capgemini" />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">

                                    <div class="dropdown">
                                        <button class="dropbtn">Home</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/home">Home</Link>

                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <button class="dropbtn">Milk</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/companybuymilkfromfarmer">BuyMilk</Link>
                                            <Link className="nav-link" to="/companysellsmilktodealer">SellMilk</Link>

                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <button class="dropbtn">Company</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/addcompany">Register company</Link>
                                            <Link className="nav-link" to="/deletecompany">Remove company</Link>
                                            <Link className="nav-link" to="/getcompanybyid">Company details</Link>
                                            <Link className="nav-link" to="/updatecompany">Update Profile </Link>
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
                                    <div class="dropdown">
                                        <button class="dropbtn">Farmer</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/addfarmer">Register Farmer</Link>
                                            <Link className="nav-link" to="/deletefarmer">Remove Farmer</Link>
                                            <Link className="nav-link" to="/viewallfarmers">View All </Link>
                                            <Link className="nav-link" to="/farmerbyid">View Farmer</Link>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <button class="dropbtn">Dealer</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/adddealer">Register Dealer</Link>
                                            <Link className="nav-link" to="/deletedealer">Remove Dealer</Link>
                                            <Link className="nav-link" to="/getdealerbyid">View Dealer</Link>
                                            <Link className="nav-link" to="/getalldealer">View All</Link>
                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <button class="dropbtn">Logout</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/logout" >Logout</Link>

                                        </div>
                                    </div>
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
                                        <button class="dropbtn">Home</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/home">Home</Link>

                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <button class="dropbtn">Company</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/getcompanybyid">Company details</Link>
                                            <Link className="nav-link" to="/getallcompany">View All Companies</Link>

                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <button class="dropbtn">Farmer</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/addfarmer">AddFarmer</Link>
                                            <Link className="nav-link" to="/farmerbyid">Search FarmerId</Link>
                                            <Link className="nav-link" to="/updatefarmer">Update Farmer</Link>
                                            <Link className="nav-link" to="/farmerdata">Others</Link>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <button class="dropbtn">Logout</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/logout" >Logout</Link>

                                        </div>
                                    </div>

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
                        <div className="container">
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
                                        <button class="dropbtn">Home</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/home">Home</Link>
                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <button class="dropbtn">Company</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/getcompanybyid">Company details</Link>
                                            <Link className="nav-link" to="/getallcompany">View All Companies</Link>

                                        </div>
                                    </div>


                                    <div class="dropdown">
                                        <button class="dropbtn">Dealer</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/adddealer">Register Dealer</Link>
                                            <Link className="nav-link" to="/deletedealer">DeleteDealer</Link>
                                            <Link className="nav-link" to="/getdealerbyid">Search dealerId</Link>
                                            <Link className="nav-link" to="/updatedealer">Update Dealer</Link>
                                            <Link className="nav-link" to="/getalldealer">List of Dealers</Link>
                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <button class="dropbtn">Customer</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/addcustomer">Register Customer</Link>
                                            <Link className="nav-link" to="/deletecustomer">DeleteCustomer</Link>
                                            <Link className="nav-link" to="/getallcustomers">List Of Customers</Link>
                                            <Link className="nav-link" to="/getcustomerbyid">Search CustomerId</Link>
                                        </div>
                                    </div>



                                    <div class="dropdown">
                                        <button class="dropbtn">Sales</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/dealersellmilktocustomer">DealerSellMilk</Link>
                                            <Link className="nav-link" to="/getalldealersellorders">AllDealerSells</Link>
                                            <Link className="nav-link" to="/dealerpaybilltocompany">PayToCompany</Link>
                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <button class="dropbtn">Logout</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/logout" >Logout</Link>

                                        </div>
                                    </div>


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




                                    <div class="dropdown">
                                        <button class="dropbtn">Home</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/home">Home</Link>
                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <button class="dropbtn">Dealer</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/getdealerbyid">Search dealerId</Link>
                                            <Link className="nav-link" to="/getalldealer">List of Dealers</Link>
                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <button class="dropbtn">Customer</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/addcustomer">AddCustomer</Link>
                                            <Link className="nav-link" to="/getcustomerbyid">Search CustomerId</Link>
                                            <Link className="nav-link" to="/updatecustomer">Update Customer</Link>
                                            <Link className="nav-link" to="/customerdata">Others</Link>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <button class="dropbtn">Payment</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/customerpaybilltodealer" >PayToDealer</Link>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <button class="dropbtn">Logout</button>
                                        <div class="dropdown-content">
                                            <Link className="nav-link" to="/logout" >Logout</Link>

                                        </div>
                                    </div>
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
                            <img src="https://images.all-free-download.com/images/graphiclarge/colored_company_logos_creative_design_579470.jpg"
                                height="75px" alt="Capgemini" />
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
