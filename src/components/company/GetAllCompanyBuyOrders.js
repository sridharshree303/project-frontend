import axios from "axios";
import { useEffect, useState } from "react";
import CompanyBuysMilk from "../models/CompanyBuysMilk";

const GetAllCompanyBuyOrders = () => {

    const [companyBuysMilkList, setCompanyBuysMilkList] = useState([]);

    const submitGetAllCompanyBuyOrders = () => {
        axios.get('http://localhost:8082/payment/getallcompanybuys')
            .then((response) => {
                setCompanyBuysMilkList(response.data);
                console.log(response.data);
                console.log(companyBuysMilkList);
            })
            .catch(() => {
                alert('Something is wrong!');
            });
    }

    return (
        <div className="container">
        <h1 className="display-5 text-primary mt-3 mb-3" >Find All buy orders</h1>

        <div>
            <div className="col-9 border border-light shadow p-3 mb-5 bg-white">
                <p>Find all transactions</p>
                <div>
                    <form className="form form-group form-primary">
                        <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCompanyBuyOrders} value="Find All" />
                    </form>
                </div >
                <table className="table table-light table-striped ">
                    <thead>
                        <tr>
                            <th>paymentId</th>
                            <th>dateTime</th>
                            <th>bill</th>
                            <th>milkUnits</th>
                            <th>unitPrice</th>
                            <th>milkType</th>
                            <th>companyId</th>
                            <th>farmerId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companyBuysMilkList.map((list, k) => {
                            return (
                                <tr k={k}> <td>{list.paymentId}</td> 
                                 <td>{list.dateTime}</td>
                                  <td>{list.bill}</td>
                                  <td>{list.milkUnits}</td>
                                  <td>{list.unitPrice}</td>
                                  <td>{list.milkType}</td>
                                  <td>{list.company.companyId}</td>
                                  <td>{list.farmer.farmerId}</td>
                                  </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
     </div>
    );

}
  
export default GetAllCompanyBuyOrders;