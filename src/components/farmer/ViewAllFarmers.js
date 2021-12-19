import { useDispatch, useSelector } from "react-redux";

import { getAllFarmerService } from "../services/FarmService";

import { getAllFarmer } from "../../redux/FarmerSlice";


const ViewAllFarmers = () => {

    const dispatch = useDispatch();
    const farmerList = useSelector((state) => state.farm.farmList);


    const submitGetAllFarmer = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllFarmers');
        getAllFarmerService()
            .then((response) => {
                dispatch(getAllFarmer(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
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

                <div>
                    <div className="col-9 border border-light shadow p-3 mb-5 bg-white">
                        <p>List of all Farmers</p>
                        <div>
                            <form className="form form-group form-primary">
                                <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllFarmer} value="Find All Farmers" />
                            </form>
                        </div >
                        <table className="table table-light table-striped ">
                            <thead>
                                <tr>
                                    <th>Farmerid</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>mobileNumber</th>
                                    <th>email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {farmerList.map((farm, k) => {
                                    return (
                                        <tr k={k}> <td>{farm.farmerId}</td>
                                            <td>{farm.firstName}</td>
                                            <td>{farm.lastName}</td>
                                            <td>{farm.mobileNumber}</td>
                                            <td>{farm.email}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default ViewAllFarmers;