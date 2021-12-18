import axios from "axios";
import React from "react";
import { useState, } from "react";
import PayToFarmer from "../models/PayToFarmer";



const CompanyPayBillToFarmer = () => {


    const [newPayToFarmerObj, setNewPayToFarmerObj] = useState(new PayToFarmer);
    const [dispPayToFarmerObj, setDispPayToFarmerObj] = useState('');

    const handleCompanyPayBillToFarmer = (event) => {

        console.log(event.target.name);
        console.log(event.target.value);
        setNewPayToFarmerObj({
            ...newPayToFarmerObj,
            // [event.target.value]: event.target.name,
            [event.target.name]: event.target.value,

        });
    };

    const submitCompanyPayBillToFarmer = (event) => {
        console.log("submitCompanyPayBillToFarmer")
        axios.post('http://localhost:8082/paytofarmer/payment', newPayToFarmerObj)
            .then((response) => {
                console.log(response.data);
                // localStorage.setItem('companybuysmilk', companySellsMilk)
                alert('Payment successful.');
                setDispPayToFarmerObj("Transaction succesful")
            }).catch((error) => {
                console.log(error.response);
                setDispPayToFarmerObj("Invalid fields")
            });
        event.preventDefault();

    }
    return (
        <div className="container">
            <div className="col-4 mt-3">
                <h1 className="display-4 text-primary">Company-Farmer Bill Payment</h1>
                <form className="form form-group form-dark" onSubmit={submitCompanyPayBillToFarmer}>
                    <div>
                    <input type="text"
                            className="form-control"
                            name="company"
                            id="company"
                            key="companyId"
                            className="form-control mb-3"
                            placeholder="Enter companyId"
                            value={newPayToFarmerObj.company.companyId}
                            onChange={handleCompanyPayBillToFarmer}
                            required
                        />
                        <input
                            type="text"
                            className="form-control"
                            name="farmer"
                            id="farmer"
                            key="farmerId"
                            className="form-control mb-3"
                            placeholder="Enter farmerId"
                            value={newPayToFarmerObj.farmer.farmerId}
                            onChange={handleCompanyPayBillToFarmer}
                            required />
                        <input type="text"
                            className="form-control"
                            name="totalMilkunits"
                            id="totalMilkunits"
                            className="form-control mb-3"
                            placeholder="Enter MilkUnits"
                            value={newPayToFarmerObj.totalMilkunits}
                            onChange={handleCompanyPayBillToFarmer}
                            required />
                        <input
                            type="text"
                            className="form-control"
                            name="avgUnitPrice"
                            id="avgUnitPrice"
                            className="form-control mb-3"
                            placeholder="Enter avg unitPrice"
                            value={newPayToFarmerObj.avgUnitPrice}
                            onChange={handleCompanyPayBillToFarmer}
                            required />
                         <input
                            type="text"
                            className="form-control"
                            name="billAmount"
                            id="billAmount"
                            className="form-control mb-3"
                            placeholder="Enter bill amount"
                            value={newPayToFarmerObj.billAmount}
                            onChange={handleCompanyPayBillToFarmer}
                            required />
                        <input
                            type="datetime-local"
                            className="form-control"
                            name="paymentDate"
                            id="paymentDate"
                            className="form-control mb-3"
                            placeholder="enter paymentDate "
                            value={newPayToFarmerObj.paymentDate}
                            onChange={handleCompanyPayBillToFarmer}
                            required />
                         <div class="from-group">
                            <select class="form-control mb-3" name="paymentmethod" id="paymentmethod" onChange={handleCompanyPayBillToFarmer}>
                                <option value="PaymentMethod">Payment Method Type</option>
                                <option value="BANK">BANK</option>
                                <option value="CASH">CASH</option>
                                <option value="CHEQUE">CHEQUE</option>
                                <option value="UPI">UPI</option>
                            </select>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            name="accountNumber"
                            id="accountNumber"
                            className="form-control mb-3"
                            placeholder="Enter AccountNumber"
                            value={newPayToFarmerObj.accountNumber}
                            onChange={handleCompanyPayBillToFarmer}
                            required />
                        <div class="from-group">
                            <select class="form-control mb-3" name="bankName" id="bankName" onChange={handleCompanyPayBillToFarmer}>
                                <option value="Bank">SELECT BANK</option>
                                <option value="HDFCBANK">HDFCBANK</option>
                                <option value="AXISBANK">AXISBANK</option>
                                <option value="IDFCBANK">IDFCBANK</option>
                                <option value="STATEBANKOFINDIA">STATEBANKOFINDIA</option>
                                <option value="ICICIBANK">ICICIBANK</option>
                                <option value="CANARABANK">CANARABANK</option>
                                <option value="UNIONBANKOFINDIA">UNIONBANKOFINDIA</option>
                                <option value="BANKOFINDIA">BANKOFINDIA</option>
                            </select>
                        </div>
                        <div class="from-group">
                            <select class="form-control mb-3" name="month" id="month" onChange={handleCompanyPayBillToFarmer}>
                                <option value="MONTH">SELECT MONTH</option>
                                <option value="JANUARY">JANUARY</option>
                                <option value="FEBRUARY">FEBRUARY</option>
                                <option value="MARCH">MARCH</option>
                                <option value="APRIL">APRIL</option>
                                <option value="MAY">MAY</option>
                                <option value="JUNE">JUNE</option>
                                <option value="JULY">JULY</option>
                                <option value="AUGUST">AUGUST</option>
                                <option value="SEPTEMBER">SEPTEMBER</option>
                                <option value="OCTOBER">OCTOBER</option>
                                <option value="NOVEMBER">NOVEMBER</option>
                                <option value="DECEMBER">DECEMBER</option>
                            </select>
                        </div>  
                        <input
                            type="submit"
                            name="submit"
                            id="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Start"
                            onChange={submitCompanyPayBillToFarmer}
                        />
                    </div>
                </form>
                {/* <p>Transaction details</p> */}
                <p>{dispPayToFarmerObj}</p>
            </div>
        </div>

    )

}

export default CompanyPayBillToFarmer;