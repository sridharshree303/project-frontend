

import { useState } from "react";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import axios from "axios";



const DeleteFarmer = () => {


    const [deleteFarmer, setDeleteFarmer] = useState('');
    
    const handleDeleteFarmer = (ev) => {
        console.log('handleDeleteFarmer');
        setDeleteFarmer(ev.target.value);
    }

    const submitDeleteFarmer = (evt) => {
        evt.preventDefault();
        console.log('deleteFarmerDetails');
        axios.delete(`http://localhost:8082/farmer/delete/${deleteFarmer}`)
            .then((response) => {     
                alert(`Farmer details deleted successfully.`);
            })
            .catch(() => {
                alert(`Farmer not found.`);
            });

    }

    return (

        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
        <p>Delete farmer by id</p>
        <form className="form form-group form-primary" onSubmit={submitDeleteFarmer}>
            <input className="form-control mt-3" type="number" id="deleteFarmer" name="deleteFarmer" value={deleteFarmer} onChange={handleDeleteFarmer} placeholder="Enter Farmer Id" autoFocus required />
            <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Farmer" />
        </form>
    </div>




    );


}

export default DeleteFarmer;