
import { useState } from "react";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import axios from "axios";

import Farmer from "../models/Farmer";


const UpdateFarmer = () => {

    const [ setNewFarmerObj] = useState(new Farmer());
    const [updtFarmerObj, setUpdtFarmerObj] = useState(new Farmer());
        const [updateFarmerObj, setUpdateFarmerObj] = useState(new Farmer());
           

    const handleUpdateFarmer = (e) => {
        console.log(e.target.value);
        setUpdtFarmerObj({
            ...updtFarmerObj,
            [e.target.name]: e.target.value,
        });
    }


    const submitUpdateFarmer = (evt) => {
        evt.preventDefault();
        console.log('addFarmers');
        axios.put(`http://localhost:8082/farmer/update`, updtFarmerObj)
            .then((response) => {
                setUpdateFarmerObj(response.data);
                alert('Farmer details updated successfully.');
                setNewFarmerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Farmer could not be found.");
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

        <h2  className="display-5 text mt-3 mb-3">Update Farmer deatils</h2> 
        <p>Update New Farmer</p>
        {/* <form onSubmit={submitAddEmp}> */}
        <div id="addNewFarmerDiv">
        <input
                type="text"
                id="farmerId"
                name="farmerId"
                value={updtFarmerObj.farmerId}
                onChange={handleUpdateFarmer}
                placeholder="Enter farmer Id" />
                <br/>
                <br/>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={updtFarmerObj.firstName}
                onChange={handleUpdateFarmer}
                placeholder="Enter First Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={updtFarmerObj.lastName}
                onChange={handleUpdateFarmer}
                placeholder="Enter Last Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={updtFarmerObj.mobileNumber}
                onChange={handleUpdateFarmer}
                placeholder="Enter Mobile Number" />
                <br/>
                <br/>
             <input
                type="text"
                id="email"
                name="email"
                value={updtFarmerObj.email}
                onChange={handleUpdateFarmer}
                placeholder="Enter Email" />   
                <br/>
                <br/>
             <input
                type="password"
                id="password"
                name="password"
                value={updtFarmerObj.password}
                onChange={handleUpdateFarmer}
                placeholder="Enter password" />  
                <br/> <br/>
            <input
                type="submit"
                // type="button"
                value="update Farmer"
                onClick={submitUpdateFarmer}
            />
        </div>
        <p>Updated Farmer Data: {updateFarmerObj.FarmerId} {updateFarmerObj.firstName} {updateFarmerObj.lastName} {updateFarmerObj.mobileNumber} {updateFarmerObj.email}</p>
    </div>
    
</div>
</div>
    );


}

export default UpdateFarmer;