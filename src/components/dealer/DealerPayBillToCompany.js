import axios from "axios";
import React from "react";
import { useState, } from "react";
import PayToCompany from "../models/PayToCompany";



const DealerPayBillToCompany = () => {


    const [newPayToCompanyObj, setNewPayToCompanyObj] = useState(new PayToCompany());
    const [dispPayToCompanyObj, setDispPayToCompanyObj] = useState('');

    const handleDealerPayBillToCompany = (event) => {

        console.log(event.target.name);
        console.log(event.target.value);
        setNewPayToCompanyObj({
            ...newPayToCompanyObj,
            // [event.target.value]: event.target.name,
            [event.target.name]: event.target.value,

        });
    };


    const submitDealerPayBillToCompany = (event) => {
        console.log("submitDealerPayBillToCompany")
        axios.post('http://localhost:8082/paytocompany/payment', newPayToCompanyObj)
            .then((response) => {
                console.log(response.data);
                // localStorage.setItem('companybuysmilk', companySellsMilk)
                alert('Payment successful.');
                setDispPayToCompanyObj("Transaction succesful")
            }).catch((error) => {
                console.log(error.response);
                setDispPayToCompanyObj("Invalid deatils provided")
            });
        event.preventDefault();

    }
    return (
        <div className="container">
            <div className="col-4 mt-3">
                <h1 className="display-4 text-primary"> Dealer-Company Bill Payment</h1>
                <form className="form form-group form-dark" onSubmit={submitDealerPayBillToCompany}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="dealer"
                            id="dealer"
                            key="dealerId"
                            className="form-control mb-3"
                            placeholder="Enter dealerId"
                            value={newPayToCompanyObj.dealer.dealerId}
                            onChange={handleDealerPayBillToCompany}
                            required />
                        <input type="text"
                            className="form-control"
                            name="company"
                            id="company"
                            key="companyId"
                            className="form-control mb-3"
                            placeholder="Enter companyId"
                            value={newPayToCompanyObj.company.companyId}
                            onChange={handleDealerPayBillToCompany}
                            required
                        />
                        <input type="text"
                            className="form-control"
                            name="totalMilkunits"
                            id="totalMilkunits"
                            className="form-control mb-3"
                            placeholder="Enter MilkUnits"
                            value={newPayToCompanyObj.totalMilkunits}
                            onChange={handleDealerPayBillToCompany}
                            required />
                        <input
                            type="text"
                            className="form-control"
                            name="avgUnitPrice"
                            id="avgUnitPrice"
                            className="form-control mb-3"
                            placeholder="Enter avg unitPrice"
                            value={newPayToCompanyObj.avgUnitPrice}
                            onChange={handleDealerPayBillToCompany}
                            required />
                        <input
                            type="text"
                            className="form-control"
                            name="billAmount"
                            id="billAmount"
                            className="form-control mb-3"
                            placeholder="Enter bill amount"
                            value={newPayToCompanyObj.billAmount}
                            onChange={handleDealerPayBillToCompany}
                            required />
                        <input
                            type="datetime-local"
                            className="form-control"
                            name="paymentDate"
                            id="paymentDate"
                            className="form-control mb-3"
                            placeholder="enter paymentDate "
                            value={newPayToCompanyObj.paymentDate}
                            onChange={handleDealerPayBillToCompany}
                            required />
                        <div class="from-group">
                            <select class="form-control mb-3" name="paymentmethod" id="paymentmethod" onChange={handleDealerPayBillToCompany}>
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
                            value={newPayToCompanyObj.accountNumber}
                            onChange={handleDealerPayBillToCompany}
                            required />
                        <div class="from-group">
                            <select class="form-control mb-3" name="bankName" id="bankName" onChange={handleDealerPayBillToCompany}>
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
                            <select class="form-control mb-3" name="month" id="month" onChange={handleDealerPayBillToCompany}>
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
                            onChange={submitDealerPayBillToCompany}
                        />
                    </div>
                </form>
                {/* <p>Transaction details</p> */}
                <p>{dispPayToCompanyObj}</p>
            </div>
        </div>

    )

}

export default DealerPayBillToCompany;