
import { useState } from "react";
import axios from "axios";
import Company from "../models/Company";


const AddCompany = () => {




    const [newCompanyObj, setNewCompanyObj] = useState(new Company());

    const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());

    const handleAddCompany = (e) => {
        console.log(e.target.value);
        setNewCompanyObj({
            ...newCompanyObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitAddCompany = (evt) => {
        evt.preventDefault();
        console.log('addCompany');
        axios.post(`http://localhost:8082/company/add`, newCompanyObj)
            .then((response) => {
                setDisplayCompanyObj(response.data);
                alert('Company added successfully.');
                setNewCompanyObj({ CompanyName: '', CompanyId: '', mobileNumber: '', email: '', password: '', address: '' })

            })
            .catch(() => {
                alert("Company could not be added.");
            });
    }

    return (
        <div align="center"
            style={{
                backgroundImage: " url(" + " https://media.istockphoto.com/photos/american-country-farm-picture-id177505798?k=20&m=177505798&s=612x612&w=0&h=jFgHLVyAgTQ7DtPF81OqgygnDI4faMQ3RzvYz6PLozs=" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            {/* <div className="container"
                style={{
                    height: "100vh",
                    color: "white"
                }}></div> */}
            <div>
                <h1 className="display-5 text-primary mt-3 mb-3" >Add Company</h1>
                <div className="col-6 border border-light shadow p-3 mb-5 bg">

                    <p>Add New Company</p>

                    <div id="addNewCompanyDiv">
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={newCompanyObj.companyName}
                            onChange={handleAddCompany}
                            placeholder="Enter Company Name" autoFocus />
                        <br /><br />
                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={newCompanyObj.mobileNumber}
                            onChange={handleAddCompany}
                            placeholder="Enter Mobile Number" />
                        <br />
                        <br />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={newCompanyObj.email}
                            onChange={handleAddCompany}
                            placeholder="Enter Email" />
                        <br /><br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={newCompanyObj.password}
                            onChange={handleAddCompany}
                            placeholder="Enter password" />
                        <br /><br />
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={newCompanyObj.address}
                            onChange={handleAddCompany}
                            placeholder="Enter address" />
                        <br /><br />

                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitAddCompany} value="Add Company" />
                        </form>
                  </div>
                  </div>  
            </div>
        </div>
    );
}


export default AddCompany;