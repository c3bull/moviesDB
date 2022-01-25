import React, {useState} from 'react';
import obrazek from "../images/film.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [nicknameWarning, setNicknameWarning] = useState(false)
    const [emailWarning, setEmailWarning] = useState(false)
    const [passwordWarning, setPasswordWarning] = useState(false)

    const navigate = useNavigate();

    const LogOutButton = () => {
        navigate('/signin')
    };

    const Warnings = () => {
        if (password !== repeatPassword || password === '') {
            setPasswordWarning(true)
        } else {
            setPasswordWarning(false)
        }

        if (nickname === '') {
            setNicknameWarning(true)
        } else {
            setNicknameWarning(false)
        }

        if (email === '') {
            setEmailWarning(true)
        } else {
            setEmailWarning(false)
        }
    }

    const Check = () => {
        if ((password === repeatPassword && repeatPassword !== '' && nickname !== '' && email !== '')) {
            axios({
                url: 'https://pr-movies.herokuapp.com/api/user/create',
                method: 'POST',
                data: {
                    "name": nickname,
                    "email": email,
                    "password": password
                }
            })
                .then(() => {
                    console.log('Data has been sent to the server');
                    LogOutButton();
                })
                .catch(() => {
                    console.log('Internal server error');
                });
        } else {
            Warnings()
        }
    };

    return (
        <div id="sign-up-background">
            <div id="sign-up-second-background">
                <div>
                    <img className="sign-up-image" src={obrazek}/>
                </div>

                <div>
                    <form>
                        <input className={!nicknameWarning ? "form-control-nickname" : "form-control-nickname-warning"} placeholder="Nickname"
                               onChange={e => setNickname(e.target.value)}/><br/>
                        <input className={!emailWarning ? "form-control-email" : "form-control-email-warning"} placeholder="Email" size="lg"
                               onChange={e => setEmail(e.currentTarget.value)}/><br/>
                        <inputGroup className="formInput" size="md">
                            <input id="password1"
                                   className={!passwordWarning ? "form-control-password" : "form-control-password-warning"}
                                   pr="4.5rem"
                                   type="password"
                                   placeholder="Password"
                                   onChange={e => setPassword(e.target.value)}
                            /><br/>
                        </inputGroup>
                        <input className={!passwordWarning ? "form-control-password" : "form-control-password-warning"} id="password2"
                               pr="4.5rem"
                               type="password"
                               placeholder="Repeat password"
                               onChange={e => setRepeatPassword(e.target.value)}
                        />
                        <br/>
                        <div className="btn btn-primary" id="createAccountButton" onClick={Check}>Załóż konto!
                        </div>
                        &nbsp;&nbsp;
                        <div className="btn btn-outline-primary" onClick={LogOutButton}>Posiadasz już konto? Zaloguj
                            się!
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignUp;
