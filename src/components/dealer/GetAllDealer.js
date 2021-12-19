import { useDispatch, useSelector } from "react-redux";
import { getAllDealersService} from "../services/DealerService";
import { getAllDealers } from "../../redux/DealerSlice";



    const GetAllDealer = () => {


        
        const dispatch = useDispatch();
        const dealerList = useSelector((state) => state.dealer.dealerList);

        
        const submitGetAllDealer = (evt) => {
            evt.preventDefault();
            console.log('submitGetAllDealer');
            getAllDealersService()
                .then((response) => {
                    dispatch(getAllDealers(response.data));
                })
                .catch(() => {
                    alert(`Something is wrong!`);
                });
        }
        return (
            <div align="center"
            style={{
                backgroundImage: " url(" + " https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/policy/india-government-extends-ban-on-milk-products-from-china-amid-safety-concerns/8334792-1-eng-GB/India-government-extends-ban-on-milk-products-from-China-amid-safety-concerns_wrbm_large.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
             <div className="container"
                style={{
                    height: "100vh",
                    color: "white"
                }}>
            <div className="container">
            <h1 className="display-5 text-primary mt-3 mb-3" >Find All Customer Component</h1>
            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>List of all Dealers</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllDealer} value="Find All Dealers" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>DealerId</th>
                                <th>Name</th>
                                <th>lastname</th>
                                <th>mobileNumber</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dealerList.map((dealer, k) => {
                                return (
                                    <tr k={k}> 
                                    <td>{dealer.dealerId}</td>
                                     <td>{dealer.firstName}</td>
                                     <td>{dealer.lastName}</td>
                                     <td>{dealer.mobileNumber}</td>
                                     <td>{dealer.email}</td>
                                     </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            </div>
            </div>
            );
        }
        export default GetAllDealer;