import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getDealerService } from "../services/DealerService";
import { getDealById } from "../../redux/DealerSlice";



const GetDealerById = () => {


    const [dealerId, setdealerId] = useState('');

    const dispatch = useDispatch();
    const dealerDataFromStore = useSelector((state) => state.dealer.dealerState);
    const dealerList = useSelector((state) => state.dealer.dealerList);

    const handleDealer = (d) => {
        console.log('handleDealer');
        setdealerId(d.target.value);
    }
    const submitGetDealer = (evt) => {
        evt.preventDefault();
        console.log('submitGetDealerservice');
        getDealerService(dealerId)
            .then((response) => { dispatch(getDealById(response.data)) })
            .catch(() => {
                alert(`Dealer with ${dealerId} not found.`);
            });
        console.log(Object.keys(dealerList));
        setdealerId('');
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
                <div>
                    <h1 className="display-4 text-primary mt-3 mb-3" >Dealer Component</h1>

                    <div className="col-4 border border-light shadow p-3 mb-5 bg-">
                        <p>Find Dealer by id</p>
                        <form className="form form-group form-primary" onSubmit={submitGetDealer}>
                            <input className="form-control mt-3" type="number" id="dealerId" name="dealerId" value={dealerId} onChange={handleDealer} placeholder="Enter dealer id to search" autoFocus required />
                            <input className="form-control mt-3 btn btn-primary" type="submit" value="Search dealer" />
                        </form>
                        <p>Dealer details: {dealerDataFromStore.dealerId}<br/> {dealerDataFromStore.firstName}<br/> {dealerDataFromStore.lastName} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GetDealerById;