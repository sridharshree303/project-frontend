import { useState } from "react";

import axios from "axios";
import CompanyBuysMilk from "../models/CompanyBuysMilk";


const CompanyBuyMilkFromFarmer = () => {


    const [companyBuysMilkObj, setCompanyBuysMilkObj] = useState(new CompanyBuysMilk());
    const [dispCompanyBuysMilkObj, setDispCompanyBuysMilkObj] = useState('');

    const handleCompanyBuysMilk = (e) => {

        console.log(e.target.name);
        console.log(e.target.value);
        setCompanyBuysMilkObj({
            ...companyBuysMilkObj,
            // [e.target.value]: e.target.name,
            [e.target.name]: e.target.value,
            // [e.target.value]:e.target.value,
            // [e.target.name]:e.target.name,

        });
    };

    const submitCompanyBuysMilk = (evt) => {
        console.log("submitCompanyBuysMilk")
        axios.post('http://localhost:8082/payment/company/buys', companyBuysMilkObj)
            .then((response) => {
                console.log(response.data);
                alert('Buy Milk Transaction successful.');
                setDispCompanyBuysMilkObj("Milk Buy Transaction succesful")
            }).catch((error) => {
                console.log(error.response);
                setDispCompanyBuysMilkObj("Invalid fields")
            });
        evt.preventDefault();
        
    }
    return (
        <div className="container">
            <div className="col-4 mt-3">
                <h1 className="display-4 text-primary">Company Buy Milk Transaction</h1>
                <form className="form form-group form-dark" onSubmit={submitCompanyBuysMilk}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="bill"
                            id="bill"
                            className="form-control mb-3"
                            placeholder="Enter bill amount"
                            value={companyBuysMilkObj.bill}
                            onChange={handleCompanyBuysMilk}
                            required />
                        <input type="text"
                            className="form-control"
                            name="milkUnits"
                            id="milkUnits"
                            className="form-control mb-3"
                            placeholder="Enter MilkUnits"
                            value={companyBuysMilkObj.milkUnits}
                            onChange={handleCompanyBuysMilk}
                            required />
                        <input
                            type="datetime-local"
                            className="form-control"
                            name="dateTime"
                            id="dateTime"
                            className="form-control mb-3"
                            placeholder="Optional "
                            value={companyBuysMilkObj.dateTime}
                            onChange={handleCompanyBuysMilk}
                            required />
                        <input
                            type="text"
                            className="form-control"
                            name="unitPrice"
                            id="unitPrice"
                            className="form-control mb-3"
                            placeholder="Enter unitPrice"
                            value={companyBuysMilkObj.unitPrice}
                            onChange={handleCompanyBuysMilk}
                            required />
                        <div class="from-group">
                            <select class="form-control mb-3" name="milkType" id="milkType" onChange={handleCompanyBuysMilk}>
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
                            value={companyBuysMilkObj.company.companyId}
                            onChange={handleCompanyBuysMilk}
                            required
                        />}

                        {<input
                            type="text"
                            className="form-control"
                            name="farmer"
                            id="farmerId"
                            key="farmerId"
                            className="form-control mb-3"
                            placeholder="Enter farmerId"
                            value={companyBuysMilkObj.farmer.farmerId}
                            onChange={handleCompanyBuysMilk}
                            required />}
                        <input
                            type="submit"
                            name="submit"
                            id="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Start"
                            onChange={submitCompanyBuysMilk}
                        />
                    </div>
                </form>
                {/* <p>Transaction details</p> */}
                <p>{dispCompanyBuysMilkObj}</p>
            </div>
        </div>

    )

}

export default CompanyBuyMilkFromFarmer;