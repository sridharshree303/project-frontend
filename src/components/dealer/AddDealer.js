import { useState } from "react";
import axios from "axios";
import Dealer from "../models/Dealer";


const AddDealer = () => {


    const [newDealerObj, setNewDealerObj] = useState(new Dealer());
    const [displayDealerObj, setDisplayDealerObj] = useState(new Dealer());

    const handleAddDealer = (d) => {
        console.log(d.target.value);
        setNewDealerObj({
            ...newDealerObj,
            [d.target.name]: d.target.value,
        });
    }
    const submitinsertDealer = (evt) => {
        evt.preventDefault();
        console.log('addDealer');
        axios.post(`http://localhost:8082/dealer/add`, newDealerObj)
            .then((response) => {
                setDisplayDealerObj(response.data);
                alert('dealer added successfully.');
                setNewDealerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Dealer could not be added.");
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
        <h1 className="display-5 text-info mt-3 mb-3" >Register Dealer </h1>
        <div className="col-5 border border-light shadow p-3 mb-5 bg-">
            
        <p>Add New Dealer</p>
        
        <div id="addNewDealerDiv">
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={newDealerObj.firstName}
                onChange={handleAddDealer}
                placeholder="Enter First Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={newDealerObj.lastName}
                onChange={handleAddDealer}
                placeholder="Enter Last Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={newDealerObj.mobileNumber}
                onChange={handleAddDealer}
                placeholder="Enter Mobile Number" />
                <br/>
                <br/>
             <input
                type="text"
                id="email"
                name="email"
                value={newDealerObj.email}
                onChange={handleAddDealer}
                placeholder="Enter Email" />   
                <br/>
                <br/>
             <input
                type="password"
                id="password"
                name="password"
                value={newDealerObj.password}
                onChange={handleAddDealer}
                placeholder="Enter password" /> 
                <br/>
                <br/>  
            <input
                type="submit"
                // type="button"
                value="Add Dealer"
                onClick={submitinsertDealer}
            />
        </div>
        <p>New Dealer Data: {displayDealerObj.DealerId}<br/>{displayDealerObj.firstName}<br/> {displayDealerObj.lastName}<br/>{displayDealerObj.mobileNumber}<br/>{displayDealerObj.email}</p>
        </div>
        </div>
        </div>
        </div>
        );
}
export default AddDealer;