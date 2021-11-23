import obrazek from "../images/film.png";
import React from "react";
import {useNavigate} from "react-router-dom";
import MainContent from "./mainContent";

const Navbar = () => {

    const navigate = useNavigate();

    const LogOutButton = () => {
        navigate('/login')
    };

    const MainpageButton = () => {
        navigate('/')
    };


    return (
        <div className="navbarContent">
            <div className="navbarImgSearchLogout">
                <div className="navbarImage">
                    <img className="mainpageImage" src={obrazek} onClick={MainpageButton}/>
                </div>
                <div className="navbarSearch">
                    <input className="navbarSearchInput" placeholder="szukaj filmów i seriali..."/>
                </div>
                <div className="navbarLogout">
                    <button className="btn btn-secondary" onClick={LogOutButton}>Wyloguj</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
