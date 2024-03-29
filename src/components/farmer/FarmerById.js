import { getFarmerByIdService } from "../services/FarmService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';

import { getFarmerById } from "../../redux/FarmerSlice";

const FarmerById = () => {


    const [fid, setFid] = useState('');

    const dispatch = useDispatch();
    const farmerDataFromStore = useSelector((state) => state.farm.farmState);
    const farmerList = useSelector((state) => state.farm.farmList);



    const handleFarmer = (e) => {
        console.log('handlefarmer');
        setFid(e.target.value);
    }

    const submitGetFarmerById = (evt) => {
        evt.preventDefault();
        console.log('submitGetFarmerById');
        getFarmerByIdService(fid)
            .then((response) => { dispatch(getFarmerById(response.data)) })
            .catch(() => {
                alert(`Employee with ${fid} not found.`);
            });
        console.log(Object.keys(farmerList));
        setFid('');
    }

    return (
        <div align="center"

            style={{
                backgroundImage: " url(" + " https://victorianfarmer.com.au/wp-content/uploads/2017/03/dairy-farm-Victoria.jpg" + ")",
                backgroundPosition: 'center',

                backgroundSize: 'cover',

                backgroundRepeat: 'no-repeat'

            }}>

            <div className="container"

                style={{
                    height: "100vh",

                    color: "white"

                }}>

                <div className="col-4 border border-light shadow p-3 mb-5 bg-">
                    <p>Find farmer by id</p>
                    <form className="form form-group form-primary" onSubmit={submitGetFarmerById}>
                        <input className="form-control mt-3" type="number" id="fid" name="fid" value={fid} onChange={handleFarmer} placeholder="Enter farmer id to search" autoFocus required />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Search farmer" />
                    </form>
                    <p>Farmer details: {farmerDataFromStore.farmerId} {farmerDataFromStore.firstName} {farmerDataFromStore.lastName} </p>
                </div>
            </div>
        </div>
    );
}

export default FarmerById;