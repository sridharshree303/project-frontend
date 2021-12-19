import { useState } from "react";

import axios from "axios";

import Dealer from "../models/Dealer";



const UpdateDealer = () => {


    // const [newDealerObj, setNewDealerObj] = useState(new Dealer());
    const [updtDealerObj, setUpdtDealerObj] = useState(new Dealer());
    const [updateDealerObj, setUpdateDealerObj] = useState(new Dealer());
    
   
    const handleUpdateDealer = (d) => {
        console.log(d.target.value);
        setUpdtDealerObj({
            ...updtDealerObj,
            [d.target.name]: d.target.value,
        });
    }
    const submitUpdateDealer = (evt) => {
        evt.preventDefault();
        console.log('addDealer');
        axios.put(`http://localhost:8082/dealer/update`, updtDealerObj)
            .then((response) => {
                setUpdateDealerObj(response.data);
                alert('Dealer details updated successfully.');
                setUpdtDealerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Dealer could not be found.");
            });
    }
    return (
        <div align="center"
            style={{
                backgroundImage: " url(" + " https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/policy/india-government-extends-ban-on-milk-products-from-china-amid-safety-concerns/8334792-1-eng-GB/India-government-extends-ban-on-milk-products-from-China-amid-safety-concerns_wrbm_large.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
             <div className="container"
                style={{
                    height: "100vh",
                    color: "white"
                }}>
        <div className="container">
        <div className="col-4 border border-light shadow p-3 mb-5 bg-">
            
        <p><h2>Update New Dealer</h2></p>
       
        <div id="addNewDealerDiv">
        <input
                type="text"
                id="dealerId"
                name="dealerId"
                value={updtDealerObj.dealerId}
                onChange={handleUpdateDealer}
                placeholder="Enter Dealer Id" />
                <br/>
                <br/>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={updtDealerObj.firstName}
                onChange={handleUpdateDealer}
                placeholder="Enter First Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={updtDealerObj.lastName}
                onChange={handleUpdateDealer}
                placeholder="Enter Last Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={updtDealerObj.mobileNumber}
                onChange={handleUpdateDealer}
                placeholder="Enter Mobile Number" />
                <br/>
                <br/>
             <input
                type="text"
                id="email"
                name="email"
                value={updtDealerObj.email}
                onChange={handleUpdateDealer}
                placeholder="Enter Email" /> 
                <br/>
                <br/>  
             <input
                type="password"
                id="password"
                name="password"
                value={updtDealerObj.password}
                onChange={handleUpdateDealer}
                placeholder="Enter password" />  
                <br/>
                <br/> 
            <input 
                type="submit"
                // type="button"
                value="update Dealer"
                onClick={submitUpdateDealer}
            />
        </div>
        <p>Updated Dealer Data: {updateDealerObj.DealerId}<br/> {updateDealerObj.firstName} <br/>{updateDealerObj.lastName}<br/> {updateDealerObj.mobileNumber}<br/> {updateDealerObj.email}</p>
    </div>
    </div>
    </div>
    </div>
    );
}
export default UpdateDealer;