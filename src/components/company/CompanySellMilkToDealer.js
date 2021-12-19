import axios from "axios";
import React from "react";
import { useState, } from "react";
import CompanySellsMilk from "../models/CompanySellsMilk";



const CompanySellsMilkToDealer = () => {


    const [companySellsMilk, setCompanySellsMilk] = useState(new CompanySellsMilk());
    const [dispCredentials, setDispCredentials] = useState('');

    const handleCompanySellsMilk = (event) => {

        console.log(event.target.name);
        console.log(event.target.value);
        setCompanySellsMilk({
            ...companySellsMilk,
        
            [event.target.name]: event.target.value,

        });
    };

    const submitCompanySellsMilk = (event) => {
        console.log("submitCompanySellsMilk")
        axios.post('http://localhost:8082/payment/company/sells', companySellsMilk)
            .then((response) => {
                console.log(response.data);
                // localStorage.setItem('companybuysmilk', companySellsMilk)
                alert('Sell Milk Transaction successful.');
                setDispCredentials("Milk Sell Transaction succesful")
            }).catch((error) => {
                console.log(error.response);
                setDispCredentials("Invalid fields")
            });
        event.preventDefault();

    }
    return (
        <div align="center"
            style={{
                backgroundImage: " url(" + " https://media.istockphoto.com/photos/american-country-farm-picture-id177505798?k=20&m=177505798&s=612x612&w=0&h=jFgHLVyAgTQ7DtPF81OqgygnDI4faMQ3RzvYz6PLozs=" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
        <div className="container">
            <div className="col-4 mt-3">
                <h1 className="display-6 text-primary">Company Sell Milk Transaction</h1>
                <form className="form form-group form-dark" onSubmit={submitCompanySellsMilk}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="bill"
                            id="bill"
                            className="form-control mb-3"
                            placeholder="Enter bill amount"
                            value={companySellsMilk.bill}
                            onChange={handleCompanySellsMilk}
                            required />
                        <input type="text"
                            className="form-control"
                            name="milkUnits"
                            id="milkUnits"
                            className="form-control mb-3"
                            placeholder="Enter MilkUnits"
                            value={companySellsMilk.milkUnits}
                            onChange={handleCompanySellsMilk}
                            required />
                        <input
                            type="datetime-local"
                            className="form-control"
                            name="dateTime"
                            id="dateTime"
                            className="form-control mb-3"
                            placeholder="Optional "
                            value={companySellsMilk.dateTime}
                            onChange={handleCompanySellsMilk}
                            required />
                        <input
                            type="text"
                            className="form-control"
                            name="unitPrice"
                            id="unitPrice"
                            className="form-control mb-3"
                            placeholder="Enter unitPrice"
                            value={companySellsMilk.unitPrice}
                            onChange={handleCompanySellsMilk}
                            required />
                        <div class="from-group">
                            <select class="form-control mb-3" name="milkType" id="milkType" onChange={handleCompanySellsMilk}>
                                <option value="User">Select Milk Type</option>
                                <option value="COW">COW</option>
                                <option value="BUFFALO">BUFFALO</option>
                            </select>
                        </div>
                        {<input type="text"
                            className="form-control"
                            name="company"
                            id="company"
                            key="companyId"
                            className="form-control mb-3"
                            placeholder="Enter companyId"
                            value={companySellsMilk.company.companyId}
                            onChange={handleCompanySellsMilk}
                            required
                        />}

                        {<input
                            type="text"
                            className="form-control"
                            name="dealer"
                            id="dealer"
                            key="dealerId"
                            className="form-control mb-3"
                            placeholder="Enter dealerId"
                            value={companySellsMilk.dealer.dealerId}
                            onChange={handleCompanySellsMilk}
                            required />}
                        <input
                            type="submit"
                            name="submit"
                            id="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Start"
                            onChange={submitCompanySellsMilk}
                        />
                    </div>
                </form>
                {/* <p>Transaction details</p> */}
                <p>{dispCredentials}</p>
            </div>
        </div>

</div>
    );

}

export default CompanySellsMilkToDealer;