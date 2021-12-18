import axios from "axios";
import React from "react";
import { useState, } from "react";
import PayToDealer from "../models/PayToDealer";



const CustomerPayBillToDealer = () => {


    const [newPayToDealerObj, setNewPayToDealerObj] = useState(new PayToDealer());
    const [dispPayToDealerObj, setDispPayToDealerObj] = useState('');

    const handleCustomerPayBillToDealer = (event) => {

        console.log(event.target.name);
        console.log(event.target.value);
        setNewPayToDealerObj({
            ...newPayToDealerObj,
            // [event.target.value]: event.target.name,
            [event.target.name]: event.target.value,

        });
    };


    const submitCustomerPayBillToDealer = (event) => {
        console.log("submitCustomerPayBillToDealer")
        axios.post('http://localhost:8082/paytodealer/payment', newPayToDealerObj)
            .then((response) => {
                console.log(response.data);
                alert('Payment successful.');
                setDispPayToDealerObj("Transaction succesful")
            }).catch((error) => {
                console.log(error.response);
                setDispPayToDealerObj("Invalid deatils provided")
            });
        event.preventDefault();

    }
    return (
        <div className="container">
            <div className="col-4 mt-3">
                <h1 className="display-4 text-primary"> Customer-Dealer Bill Payment</h1>
                <form className="form form-group form-dark" onSubmit={submitCustomerPayBillToDealer}>
                    <div>

                        <input type="text"
                            className="form-control"
                            name="customer"
                            id="customer"
                            key="customerId"
                            className="form-control mb-3"
                            placeholder="Enter customerId"
                            value={newPayToDealerObj.customer.customerId}
                            onChange={handleCustomerPayBillToDealer}
                            required
                        />
                        <input
                            type="text"
                            className="form-control"
                            name="dealer"
                            id="dealer"
                            key="dealerId"
                            className="form-control mb-3"
                            placeholder="Enter dealerId"
                            value={newPayToDealerObj.dealer.dealerId}
                            onChange={handleCustomerPayBillToDealer}
                            required />
                        <input type="text"
                            className="form-control"
                            name="totalMilkunits"
                            id="totalMilkunits"
                            className="form-control mb-3"
                            placeholder="Enter MilkUnits"
                            value={newPayToDealerObj.totalMilkunits}
                            onChange={handleCustomerPayBillToDealer}
                            required />
                        <input
                            type="text"
                            className="form-control"
                            name="avgUnitPrice"
                            id="avgUnitPrice"
                            className="form-control mb-3"
                            placeholder="Enter avg unitPrice"
                            value={newPayToDealerObj.avgUnitPrice}
                            onChange={handleCustomerPayBillToDealer}
                            required />
                        <input
                            type="text"
                            className="form-control"
                            name="billAmount"
                            id="billAmount"
                            className="form-control mb-3"
                            placeholder="Enter bill amount"
                            value={newPayToDealerObj.billAmount}
                            onChange={handleCustomerPayBillToDealer}
                            required />
                        <input
                            type="datetime-local"
                            className="form-control"
                            name="paymentDate"
                            id="paymentDate"
                            className="form-control mb-3"
                            placeholder="enter paymentDate "
                            value={newPayToDealerObj.paymentDate}
                            onChange={handleCustomerPayBillToDealer}
                            required />
                        <div class="from-group">
                            <select class="form-control mb-3" name="paymentmethod" id="paymentmethod" onChange={handleCustomerPayBillToDealer}>
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
                            value={newPayToDealerObj.accountNumber}
                            onChange={handleCustomerPayBillToDealer}
                            required />
                        <div class="from-group">
                            <select class="form-control mb-3" name="bankName" id="bankName" onChange={handleCustomerPayBillToDealer}>
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
                            <select class="form-control mb-3" name="month" id="month" onChange={handleCustomerPayBillToDealer}>
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
                            onChange={submitCustomerPayBillToDealer}
                        />
                    </div>
                </form>
                {/* <p>Transaction details</p> */}
                <p>{dispPayToDealerObj}</p>
            </div>
        </div>

    );

}

export default CustomerPayBillToDealer;