import axios from "axios";
import { useState } from "react";

const GetAllCompanySellOrders = () => {

    const [companySellsMilkList, setCompanySellsMilkList] = useState([]);

    const submitGetAllCompanySellOrders = () => {
        axios.get('http://localhost:8082/payment/getallcompanysells')
            .then((response) => {
                setCompanySellsMilkList(response.data);
                console.log(response.data);
                console.log(companySellsMilkList);
            })
            .catch(() => {
                alert('Something is wrong!');
            });
    }

    return (
        <div className="container">
        <h1 className="display-5 text-primary mt-3 mb-3" >Find All sell orders</h1>

        <div>
            <div className="col-9 border border-light shadow p-3 mb-5 bg-white">
                <p>Find all transactions</p>
                <div>
                    <form className="form form-group form-primary">
                        <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCompanySellOrders} value="Find All" />
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
                            <th>dealerId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companySellsMilkList.map((list, k) => {
                            return (
                                <tr k={k}> <td>{list.paymentId}</td> 
                                 <td>{list.dateTime}</td>
                                  <td>{list.bill}</td>
                                  <td>{list.milkUnits}</td>
                                  <td>{list.unitPrice}</td>
                                  <td>{list.milkType}</td>
                                  <td>{list.company.companyId}</td>
                                  <td>{list.dealer.dealerId}</td>
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
  
export default GetAllCompanySellOrders;