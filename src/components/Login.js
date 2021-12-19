import React from "react";
import { Link, } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import UserLogin from "./models/UserLogin";

const Login = () => {

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

        axios.post(`http://localhost:8082/loginuser`, userLogin)
            .then((response) => {
                console.log(response.data);
                sessionStorage.setItem('user', response.data.userType);
                sessionStorage.setItem('isUserLoggedIn', true);
                alert('Success');
                window.location.assign('/home');
                // history.push('/home');
            }).catch((error) => {
                sessionStorage.setItem('isUserLoggedIn', false);
                sessionStorage.clear();
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <div align="center" style={{

            backgroundImage: "url(" + "  https://cdn.corporatefinanceinstitute.com/assets/affiliated-companies-1024x614.jpeg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container"
                style={{
                    height: "100vh",
                    color: "white"
                }}>

                <div className="col-3 mt-4 border border-light col-sm-4 center shadow p-5 mb-5 bg-" >
                    <h1 className="display-4 text-primary" >Login</h1>
                    <br />
                    <form className="form form-group form-dark  text" onSubmit={submitUserLogin}>
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
                                autoFocus
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
                                onChange={handleUserLogin}
                                required
                            />
                            <div class="form-group">
                                <select type={userLogin.userType} class="form-control mb-3" name="userType" id="userType" onChange={handleUserLogin}>
                                    <option value="User">Select a role</option>
                                    <option value="ADMIN" >ADMIN</option>
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
                                value="Login"
                                onClick={submitUserLogin}
                            />
                        </div>
                    </form>
                    <p className="text-danger">{credentials}</p>
                    <Link to="/register" className="btn btn-primary col-12">Don't Have Account? Register</Link>
                </div>
            </div>
        </div >
    )
}
export default Login;