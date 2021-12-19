import { useState } from "react";
import axios from "axios";
import Company from "../models/Company";

const UpdateCompany = () => {

     const [newCompanyObj, setNewCompanyObj] = useState(new Company());
    const [updtCompanyObj, setUpdtCompanyObj] = useState(new Company());
     const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());
    const [updateCompanyObj, setUpdateCompanyObj] = useState('');
 

    const handleUpdateCompany = (e) => {
        console.log(e.target.value);
        setUpdtCompanyObj({
            ...updtCompanyObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitUpdateCompany = (evt) => {
        evt.preventDefault();
        console.log('addCompany');
        axios.put(`http://localhost:8082/company/update`, updtCompanyObj)
            .then((response) => {
                setUpdateCompanyObj(response.data);
                alert('company details updated successfully.');
                setNewCompanyObj({ companyName:'', mobileNumber:'',email:'',password:'' ,address:''})
            
            })
            .catch(() => {
                alert("Company could not be found.");
            });
    }

    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Update Company</h1>
            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
            <p>Update New Company</p>
            {/* <form onSubmit={submitAddEmp}> */}
            <div id="addNewCompanyDiv">
            <input
                    type="text"
                    id="companyId"
                    name="companyId"
                    value={updtCompanyObj.companyId}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Id" autoFocus/>
                    <br/><br/>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={updtCompanyObj.companyName}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Name" />
                    <br/><br/>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={updtCompanyObj.address}
                    onChange={handleUpdateCompany}
                    placeholder="Enter address" />
                    <br/><br/>
                <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={updtCompanyObj.mobileNumber}
                    onChange={handleUpdateCompany}
                    placeholder="Enter Mobile Number" />
                    <br/><br/>
                 <input
                    type="email"
                    id="email"
                    name="email"
                    value={updtCompanyObj.email}
                    onChange={handleUpdateCompany}
                    placeholder="Enter Email" />   
                    <br/><br/>
                 <input
                    type="password"
                    id="password"
                    name="password"
                    value={updtCompanyObj.password}
                    onChange={handleUpdateCompany}
                    placeholder="Enter password" /> 
                    <br/><br/>  
                <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitUpdateCompany} value="Update Company" />
                        </form>
            </div>
        </div>
 
        </div>
    );
}

 
export default UpdateCompany;