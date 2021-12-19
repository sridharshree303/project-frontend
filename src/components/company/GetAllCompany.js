import { useDispatch, useSelector } from "react-redux";
import { getAllCompanyService } from "../services/CompService";



import { getAllCompany } from "../../redux/CompSlice";

const GetAllCompany = () => {

    const dispatch = useDispatch();
    const companyList = useSelector((state) => state.company.companyList);

    const submitGetAllCompany = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllCompany');
        getAllCompanyService()
            .then((response) => {
                dispatch(getAllCompany(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    return (
        <div align="center"
            style={{
                backgroundImage: " url(" + " https://media.istockphoto.com/photos/american-country-farm-picture-id177505798?k=20&m=177505798&s=612x612&w=0&h=jFgHLVyAgTQ7DtPF81OqgygnDI4faMQ3RzvYz6PLozs=" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            {/* <div className="container"
                style={{
                    height: "100vh",
                    color: "white"
                }}></div> */}

            <div>
                <h1 className="display-5 text-info mt-3 mb-3" >All Company Details</h1>
                <div>
                    <div className="col-12 border border-light shadow p-3 mb-5 bg- ">
                        <p>List of all Company</p>
                        <div>
                            <form className="form form-group form-primary">
                                <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCompany} value="Find All Companies" />
                            </form>
                        </div >
                        <table className="table table-light table-striped ">
                            <thead>
                                <tr>
                                    <th>CompanyId</th>
                                    <th>companyName</th>
                                    <th>mobileNumber</th>
                                    <th>address</th>
                                    <th>email</th>
                                    <th>password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {companyList.map((company, k) => {
                                    return (
                                        <tr k={k}> <td>{company.companyId}</td> <td>{company.companyName}</td><td>{company.email}</td><td>{company.mobileNumber}</td><td>{company.password}</td><td>{company.address}</td></tr>
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


export default GetAllCompany;