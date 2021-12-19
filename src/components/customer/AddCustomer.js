import { useState } from "react";
import axios from "axios";
import Customer from "../models/Customer";



const AddCustomer = () => {

    const [newCustomerObj, setNewCustomerObj] = useState(new Customer());
    const [displayCustomerObj, setDisplayCustomerObj] = useState('');

    const handleAddCustomer = (e) => {
        console.log(e.target.value);
        setNewCustomerObj({
            ...newCustomerObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitAddCustomer = (evt) => {
        evt.preventDefault();
        console.log('addCustomers');
        axios.post(`http://localhost:8082/customer/add`, newCustomerObj)
            .then((response) => {
                setDisplayCustomerObj(response.data);
                alert('Customer added successfully.');
                setNewCustomerObj({ firstName: '', lastName: '', password: '', mobileNumber: '', email: '' })

            })
            .catch(() => {
                alert("Customer could not be added.");
            });
    }
7
    return (
        <div align="center"
            style={{
                backgroundImage: " url(" + " https://media.istockphoto.com/photos/milk-jug-picture-id172296306?k=20&m=172296306&s=612x612&w=0&h=8BEG2QuJr7VM3DZXrUz301pbYhGP-ghqt6MJJEQ3Dvo=" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
             <div className="container"
                style={{
                    height: "100vh",
                    color: "white"
                }}>
                    <p>Add New Customer</p>
            <div className="container">
                <h1 className="display-5 text- mt-3 mb-3" >Add Customer Component</h1>
                <div className="col-5 border border-light shadow p-3 mb-5 bg-">


                   

                    <div id="addNewCustomerDiv">

                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={newCustomerObj.firstName}
                            onChange={handleAddCustomer}
                            placeholder="Enter First Name" />
                        <br />
                        <br />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={newCustomerObj.lastName}
                            onChange={handleAddCustomer}
                            placeholder="Enter Last Name" />
                        <br />
                        <br />

                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={newCustomerObj.mobileNumber}
                            onChange={handleAddCustomer}
                            placeholder="Enter Mobile Number" />
                        <br />
                        <br />

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={newCustomerObj.email}
                            onChange={handleAddCustomer}
                            placeholder="Enter Email" />
                        <br />
                        <br />

                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={newCustomerObj.password}
                            onChange={handleAddCustomer}
                            placeholder="Enter password" />
                        <br />
                        


                        <form className="form form-group form-primary" onSubmit={submitAddCustomer}>
                            <input className="form-control col-6 mt-3 btn btn-primary" type="submit" value="Add Customer" />
                        </form>
                    </div>
                </div>
            </div>
</div>
        </div>

     );
}
  export default AddCustomer;