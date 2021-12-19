
import { useState } from "react";
import axios from "axios";

const DeleteCompany = () => {

    const [deleteCompany, setDeleteCompany] = useState('');

    const handleDeleteCompany = (ev) => {

        console.log('handleDeleteCompany');

        setDeleteCompany(ev.target.value);
    }

    const submitDeleteCompany = (evt) => {

        evt.preventDefault();

        console.log('deleteCompanyDetails');

        axios.delete(`http://localhost:8082/company/delete/${deleteCompany}`) //delete/${companyid}

            .then((response) => {
                console.log(response.data);
                alert(`Company details deleted successfully.`);

                //  dispatch(deletecompanyById(response.data));     
            })

            .catch(() => {

                alert(`Company not found.`);

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
            
            <div>
                <h1 className="display-5 text-grey mt-3 mb-3" >Delete Company</h1>
                <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                    <h6>Delete company by id</h6>
                    <form className="form form-group form-primary" onSubmit={submitDeleteCompany}>
                        <input className="form-control mt-3" type="number" id="deleteCompany" name="deleteCompany" value={deleteCompany} onChange={handleDeleteCompany} placeholder="Enter Company Id" autoFocus required />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Company" />
                    </form>

                </div>
            </div>
        </div>
    );
}


export default DeleteCompany;