import React, {useState} from 'react';
import "../App.css"
import obrazek from "../images/film.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const Login = (props) => {

    const navigate = useNavigate();

    const LogInButton = () => {
        navigate('/')
    };

    const SignUpButton = () => {
        navigate('/signUp')
    };

    return (

        <div id="loginBackground">
            <div id="loginSecondBackground">
                <div className="loginContent">
                    <div className="imageCss">
                        <img className="loginImage" src={obrazek}/>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={LogInButton}>Log in</button>
                        <button className="btn btn-outline-primary" onClick={SignUpButton}>Sign up</button>
                    </form>
                    {/*<form className="loginForm">*/}
                    {/*    <input id="loginInput" placeholder="Email" size="lg" onChange={HandleChangeEmail}/>*/}
                    {/*    <inputGroup size="md">*/}
                    {/*        <input*/}
                    {/*            type={show ? "text" : "password"}*/}
                    {/*            placeholder="Enter password"*/}
                    {/*            onChange={HandleChangePass}*/}
                    {/*        />*/}
                    {/*        <inputRightElement width="4.5rem">*/}
                    {/*            <button color="black" onClick={handleClick}>*/}
                    {/*                {show ? "Hide" : "Show"}*/}
                    {/*            </button>*/}
                    {/*        </inputRightElement>*/}
                    {/*    </inputGroup>*/}
                    {/*    <br/>*/}
                    {/*    <button type="submit">Log in</button>*/}
                    {/*    &nbsp;&nbsp;*/}
                    {/*    <button>Sign up</button>*/}
                    {/*</form>*/}
                </div>
            </div>
        </div>
    )
};


export default Login;
