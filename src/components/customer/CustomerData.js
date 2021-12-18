import { getCustomerByIdService,getAllCustomerService,AddCustomerService,updateCustomerService,deleteCustomerByIdService } from "../services/CustomerServiceData";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { viewCustomerById,viewCustomers ,insertCustomer,updateCustomer,deleteCustomerByI} from "../../redux/CustomerSlice";
import axios from "axios";
import Customer from "../models/Customer";


const CustomerData = () => {


    const [newCustomerObj, setNewCustomerObj] = useState(new Customer());
    const [updtCustomerObj, setUpdtCustomerObj] = useState(new Customer());
    const [displayCustomerObj, setDisplayCustomerObj] = useState(new Customer());
    const [updateCustomerObj, setUpdateCustomerObj] = useState(new Customer());

    const [customerId, setCustomerId] = useState('');
    const [deleteCustomer, setDeleteCustomer] = useState('');

    const dispatch = useDispatch();
    const customerDataFromStore = useSelector((state) => state.customer.customerState);
    const customerList = useSelector((state) => state.customer.customerList);
    const customerDelete = useSelector((state) => state.customer.customerDelete);
   
    const handleCustomer = (e) => {
        console.log('handleCustomer');
        setCustomerId(e.target.value);
    }

    const handleAddCustomer = (e) => {
        console.log(e.target.value);
        setNewCustomerObj({
            ...newCustomerObj,
            [e.target.name]: e.target.value,
        });
    }
    const handleUpdateCustomer = (e) => {
        console.log(e.target.value);
        setUpdtCustomerObj({
            ...updtCustomerObj,
            [e.target.name]: e.target.value,
        });
    }

    const handleDeleteCustomer = (ev) => {
        console.log('handleDeleteCustomer');
        setDeleteCustomer(ev.target.value);
    }

    const submitGetCustomerById = (evt) => {
        evt.preventDefault();
        console.log('submitGetCustomerById');
        getCustomerByIdService(customerId)
            .then((response) => { dispatch(viewCustomerById(response.data)) })
            .catch(() => {
                alert(`Customer with ${customerId} not found.`);
            });
        console.log(Object.keys(customerList));
        setCustomerId('');
    }

    const submitGetAllCustomers = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllCustomers');
        getAllCustomerService()
            .then((response) => {
                dispatch(viewCustomers(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitAddCustomer = (evt) => {
        evt.preventDefault();
        console.log('addCustomers');
        axios.post(`http://localhost:8086/customer/add`, newCustomerObj)
            .then((response) => {
                setDisplayCustomerObj(response.data);
                alert('Customer added successfully.');
                setNewCustomerObj({ firstName:'', lastName:'',password:'',mobileNumber:'',email:''})
            
            })
            .catch(() => {
                alert("Customer could not be added.");
            });
    }

    const submitUpdateCustomer = (evt) => {
        evt.preventDefault();
        console.log('UpdateCustomers');
        axios.put(`http://localhost:8086/customer/update`, updtCustomerObj)
            .then((response) => {
                setUpdateCustomerObj(response.data);
                alert('Customer details updated successfully.');
                setNewCustomerObj({ firstName:'', lastName:'',password:'',mobileNumber:'',email:''})
            
            })
            .catch(() => {
                alert("Customer could not be found.");
            });
    }

    const submitDeleteCustomer = (evt) => {
        evt.preventDefault();
        console.log('deleteCustomerDetails');
        axios.delete(`http://localhost:8086/customer/delete/${deleteCustomer}`)
            .then((response) => {
                alert(`Customer details deleted successfully.`)    
            })
            .catch(() => {
                alert(`Customer not found.`);
            });

    }

    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Customer Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                <p>Find customer by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetCustomerById}>
                    <input className="form-control mt-3" type="number" id="customerId" name="customerId" value={customerId} onChange={handleCustomer} placeholder="Enter customerId to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Customer" />
                </form>
                <p>Data from store: {customerDataFromStore.customerId} {customerDataFromStore.firstName} {customerDataFromStore.lastName}{customerDataFromStore.password}{customerDataFromStore.mobileNumber}{customerDataFromStore.email}</p>
            </div>

            <div>
                <div className="col-7 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all customers</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCustomers} value="Find All Customers" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>customerId</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Password</th>
                                <th>mobileNumber</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerList.map((customer, k) => {
                                return (
                                    <tr k={k}> <td>{customer.customerId}</td> 
                                     <td>{customer.firstName}</td>
                                      <td>{customer.lastName}</td>
                                      <td>{customer.password}</td>
                                      <td>{customer.mobileNumber}</td>
                                      <td>{customer.email}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
            <p>Add New Customer</p>
            {/* <form onSubmit={submitAddEmp}> */}
            <div id="addNewCustomerDiv">
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={newCustomerObj.firstName}
                    onChange={handleAddCustomer}
                    placeholder="Enter First Name" />
                    <br/>
                    <br/>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={newCustomerObj.lastName}
                    onChange={handleAddCustomer}
                    placeholder="Enter Last Name" />
                    <br/>
                    <br/>

                <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={newCustomerObj.mobileNumber}
                    onChange={handleAddCustomer}
                    placeholder="Enter Mobile Number" />
                    <br/>
                    <br/>

                 <input
                    type="text"
                    id="email"
                    name="email"
                    value={newCustomerObj.email}
                    onChange={handleAddCustomer}
                    placeholder="Enter Email" />   
                    <br/>
                    <br/>

                 <input
                    type="text"
                    id="password"
                    name="password"
                    value={newCustomerObj.password}
                    onChange={handleAddCustomer}
                    placeholder="Enter password" />   
                    <br/>
                    <br/>

                <input
                    type="submit"
                    // type="button"
                    value="Add Customer"
                    onClick={submitAddCustomer}
                />
            </div>
            <p>New Customer Data: {displayCustomerObj.customerId} {displayCustomerObj.firstName} {displayCustomerObj.lastName}{displayCustomerObj.password}{displayCustomerObj.mobileNumber}{displayCustomerObj.email}</p>
        </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Some other functionality</p>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
            <p>Update New Customer</p>
            {/* <form onSubmit={submitAddEmp}> */}
            <div id="addNewCustomerDiv">
            <input
                    type="text"
                    id="customerId"
                    name="customerId"
                    value={updtCustomerObj.customerId}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter farmer Id" />
                    <br/>
                    <br/>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={updtCustomerObj.firstName}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter First Name" />
                    <br/>
                    <br/>

                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={updtCustomerObj.lastName}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter Last Name" />
                    <br/>
                    <br/>

                <input
                    type="text"
                    id="password"
                    name="password"
                    value={updtCustomerObj.password}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter password" />  
                    <br/>
                    <br/> 
                <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={updtCustomerObj.mobileNumber}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter Mobile Number" />
                    <br/>
                    <br/>

                 <input
                    type="text"
                    id="email"
                    name="email"
                    value={updtCustomerObj.email}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter Email" />   
                    <br/>
                    <br/>
                
                <input
                    type="submit"
                    // type="button"
                    value="update Customer"
                    onClick={submitUpdateCustomer}
                />
            </div>
            <p>Updated Farmer Data: {updateCustomerObj.customerId} {updateCustomerObj.firstName} {updateCustomerObj.lastName} {updateCustomerObj.password}{updateCustomerObj.mobileNumber} {updateCustomerObj.email}</p>
        </div>
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete customer by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteCustomer}>
                    <input className="form-control mt-3" type="number" id="deleteCustomer" name="deleteCustomer" value={deleteCustomer} onChange={handleDeleteCustomer} placeholder="Enter Feedback Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Customer" />
                </form>
                {/* <p>Deleted Farmer details: {farmerDataFromStore.farmerId} {farmerDataFromStore.firstName} {farmerDataFromStore.lastName} </p> */}
            </div>


        </div>
    );
}
export default CustomerData;

