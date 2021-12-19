import { useState } from "react";
import axios from "axios";


const DeleteDealer = () => {


    const [deleteDealer, setDeleteDealer] = useState('');

    const handleDeleteDealer = (ev) => {
        console.log('handleDeleteDealer');
        setDeleteDealer(ev.target.value);
    }

    const submitDeleteDealer = (evt) => {
        evt.preventDefault();
        console.log('deleteDealerDetails');
        axios.delete(`http://localhost:8082/dealer/delete/${deleteDealer}`)
            .then((response) => {
                alert(`Dealer details deleted successfully.`)

            })
            .catch(() => {
                alert(`Dealer not found.`);
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
                <h1 className="display-4 text-primary mt-3 mb-3" >Delete Customer Component</h1>


                <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                    <p>Delete Dealer by id</p>
                    <form className="form form-group form-primary" onSubmit={submitDeleteDealer}>
                        <input className="form-control mt-3" type="number" id="deleteDealer" name="deleteDealer" value={deleteDealer} onChange={handleDeleteDealer} placeholder="Enter Dealer Id" autoFocus required />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Dealer" />
                    </form>
                    {/* <p>Deleted Farmer details: {farmerDataFromStore.farmerId} {farmerDataFromStore.firstName} {farmerDataFromStore.lastName} </p> */}
                </div>
            </div>
</div></div>

        );
    }

export default DeleteDealer;