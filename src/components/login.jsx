import React, {useState} from 'react';
import "../App.css"
import obrazek from "../images/film.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const Login = (props) => {

    const navigate = useNavigate();
    const [inputLogin, setInputLogin] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const LogInButton = () => {
        navigate('/');
        window.location.reload(false);
    };

    const SignUpButton = () => {
        navigate('/signup')
        window.location.reload(false);
    };

    const CheckAuth = () => {
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: inputLogin,
                password: inputPassword
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            LogInButton();
        }).catch((error) => {
            console.log(error);
        });
    }

    return (

        <div id="login-background">
            <div id="login-second-background">
                <div className="login-content">
                    <div className="image-css">
                        <img className="login-image" src={obrazek}/>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nazwa</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   onChange={e => setInputLogin(e.target.value)}/>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Hasło</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   onChange={e => setInputPassword(e.target.value)}/>
                        </div>

                        <div className="btn btn-primary" onClick={CheckAuth}>Zaloguj</div>
                        <div className="btn btn-outline-primary" onClick={SignUpButton}>Zarejestruj</div>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default Login;
