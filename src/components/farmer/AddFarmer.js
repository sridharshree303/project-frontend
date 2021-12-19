import { useState } from "react";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import axios from "axios";

import Farmer from "../models/Farmer";


const AddFarmer = () => {


    const [newFarmerObj, setNewFarmerObj] = useState(new Farmer());
    const [displayFarmerObj, setDisplayFarmerObj] = useState(new Farmer());
    const handleAddFarmer = (e) => {
        console.log(e.target.value);
        setNewFarmerObj({
            ...newFarmerObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitAddFarmer = (evt) => {
        evt.preventDefault();
        console.log('addFarmers');
        axios.post(`/farmer/add`, newFarmerObj)
            .then((response) => {
                setDisplayFarmerObj(response.data);
                alert('Farmer added successfully.');
                setNewFarmerObj({ firstName: '', lastName: '', mobileNumber: '', email: '', password: '' })

            })
            .catch(() => {
                alert("Farmer could not be added.");
            });
    }

    return (
        <div align="center"
            style={{
                backgroundImage: " url(" + " https://victorianfarmer.com.au/wp-content/uploads/2017/03/dairy-farm-Victoria.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className="container"
                style={{
                    height: "100vh",
                    color: "white"
                }}>

                <div className="col-4 border border-light shadow p-3 mb-5 bg">

                    <h2 className="display-5 text mt-3 mb-3">Add New Farmer</h2>
                    <div id="addNewFarmerDiv">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={newFarmerObj.firstName}
                            onChange={handleAddFarmer}
                            placeholder="Enter First Name" autoFocus />
                        <br />
                        <br />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={newFarmerObj.lastName}
                            onChange={handleAddFarmer}
                            placeholder="Enter Last Name" />
                        <br />
                        <br />
                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={newFarmerObj.mobileNumber}
                            onChange={handleAddFarmer}
                            placeholder="Enter Mobile Number" />
                        <br />
                        <br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={newFarmerObj.email}
                            onChange={handleAddFarmer}
                            placeholder="Enter Email" />
                        <br />
                        <br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={newFarmerObj.password}
                            onChange={handleAddFarmer}
                            placeholder="Enter password" />
                        <br />
                        <br />
                        <input form-control mt-3 btn btn-primary
                            type="submit"
                            value="Add Farmer"
                            onClick={submitAddFarmer}
                        />
                    </div>
                    {/* <p>New Farmer Data: {displayFarmerObj.farmerId} {displayFarmerObj.firstName} {displayFarmerObj.lastName}{displayFarmerObj.mobileNumber}{displayFarmerObj.email}</p> */}
                </div>
            </div>
            </div>
            );



}

            export default AddFarmer;