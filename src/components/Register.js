import React from "react";
// import {Link, useHistory} from 'react';
import { Link,useHistory } from "react-router-dom";
import { useState,/*useEffect*/ } from "react";
import axios from "axios";
import UserLogin from "./models/UserLogin";


const Register = () => {

    const history = useHistory();

    const [userLogin, setUserLogin] = useState(new UserLogin());
    const [credentials, setCredentials] = useState('');

    const handleUserLogin = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        });
    };

    const submitUserLogin = (event) => {

        axios.post('http://localhost:8082/registeruser', userLogin)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('userLogin', userLogin)
                alert('You are registered successfully. Please login now.');
               history.push('/login'); // check this method to navigate 
            }).catch((error) => {
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="col-4 mt-3" >
                <h1 className="display-4 text-primary">Register</h1>
                <form className="form form-group form-dark " onSubmit={submitUserLogin}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={userLogin.userName}
                            onChange={handleUserLogin}
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={userLogin.password}
                            onChange={handleUserLogin} />
                        <div class="form-group">
                            <select class="form-control mb-3" name="userType" id="userType" onChange={handleUserLogin}>
                                <option value="User">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="FARMER">FARMER</option>
                                <option value="DEALER">DEALER</option>
                                <option value="CUSTOMER">CUSTOMER</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Register"
                            onClick={submitUserLogin}
                        />
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                <Link to="/login" className="btn btn-primary col-12">Already registered? Login</Link>
            </div>
        </div >

    )
}

export default Register;
