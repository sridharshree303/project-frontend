import axios from "axios";
import React from "react";
import { useState, } from "react";
import DealerSellsMilk from "../models/DealerSellsMilk";



const DealerSellMilkToCustomer = () => {
    const [dealerSellsMilkObj, setDealerSellsMilkObj] = useState(new DealerSellsMilk());
    const [dispDealerSellsMilkObj, setDispDealerSellsMilkObj] = useState('');

    const handleDealerSellsMilk = (e) => {

        console.log(e.target.name);
        console.log(e.target.value);
        setDealerSellsMilkObj({
            ...dealerSellsMilkObj,
            // [e.target.value]: e.target.name,
            [e.target.name]: e.target.value,
            // [e.target.value]:e.target.value,
            // [e.target.name]:e.target.name,

        });
    };

    const submitDealerSellsMilk = (evt) => {
        console.log("submitDealerSellsMilk")
        axios.post('http://localhost:8082/payment/dealer/sells', dealerSellsMilkObj)
            .then((response) => {
                console.log(response.data);
                alert('Sell Milk Order successful.');
                setDispDealerSellsMilkObj ("Milk Sell Order succesful")
            }).catch((error) => {
                console.log(error.response);
                setDispDealerSellsMilkObj("Invalid fields")
            });
        evt.preventDefault();
        
    }
    return (
        <div className="container">
            <div className="col-4 mt-3">
                <h1 className="display-4 text-primary">Dealer Sell Milk Transaction</h1>
                <form className="form form-group form-dark" onSubmit={submitDealerSellsMilk}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="bill"
                            id="bill"
                            className="form-control mb-3"
                            placeholder="Enter bill amount"
                            value={dealerSellsMilkObj.bill}
                            onChange={handleDealerSellsMilk}
                            required />
                        <input type="text"
                            className="form-control"
                            name="milkUnits"
                            id="milkUnits"
                            className="form-control mb-3"
                            placeholder="Enter MilkUnits"
                            value={dealerSellsMilkObj.milkUnits}
                            onChange={handleDealerSellsMilk}
                            required />
                        <input
                            type="datetime-local"
                            className="form-control"
                            name="dateTime"
                            id="dateTime"
                            className="form-control mb-3"
                            placeholder="Optional "
                            value={dealerSellsMilkObj.dateTime}
                            onChange={handleDealerSellsMilk}
                            required />
                        <input
                            type="text"
                            className="form-control"
                            name="unitPrice"
                            id="unitPrice"
                            className="form-control mb-3"
                            placeholder="Enter unitPrice"
                            value={dealerSellsMilkObj.unitPrice}
                            onChange={handleDealerSellsMilk}
                            required />
                        <div class="from-group">
                            <select class="form-control mb-3" name="milkType" id="milkType" onChange={handleDealerSellsMilk}>
                                <option value="User">Select Milk Type</option>
                                <option value="COW">COW</option>
                                <option value="BUFFALO">BUFFALO</option>
                            </select>
                        </div>
                        {<input type="text"
                            className="form-control"
                            name="dealer"
                            id="dealer"
                            key="dealerId"
                            className="form-control mb-3"
                            placeholder="Enter dealerId"
                            value={dealerSellsMilkObj.dealer.dealerId}
                            onChange={handleDealerSellsMilk}
                            required
                        />}

                        {<input
                            type="text"
                            className="form-control"
                            name="customer"
                            id="customer"
                            key="customerId"
                            className="form-control mb-3"
                            placeholder="Enter customerId"
                            value={dealerSellsMilkObj.customer.customerId}
                            onChange={handleDealerSellsMilk}
                            required />}
                        <input
                            type="submit"
                            name="submit"
                            id="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Start"
                            onChange={submitDealerSellsMilk}
                        />
                    </div>
                </form>
                {/* <p>Transaction details</p> */}
                <p>{dispDealerSellsMilkObj}</p>
            </div>
        </div>

    )

}

export default DealerSellMilkToCustomer;