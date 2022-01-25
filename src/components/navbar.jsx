import obrazek from "../images/film.png";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {decodeToken, isExpired} from "react-jwt";

const Navbar = () => {

    const navigate = useNavigate();
    const [movies, setMovies] = useState([])
    const isExp = isExpired(localStorage.getItem('token'))
    const decodedToken = decodeToken(localStorage.getItem('token'))

    const LogOutButton = () => {
        axios({
            url: 'https://pr-movies.herokuapp.com/api/user/logout/:userId',
            method: 'delete',
            data: {
                userId: decodedToken.userId
            }
        })
            .then((response) => {
                console.log('resp ' + JSON.stringify(response));
                if (response.data.deletedCount === 1) {
                    localStorage.removeItem('token');
                    window.location.reload(false);
                }
            })
            .catch(() => {
                console.log('Internal server error');
            });
    };

    const LogIn = () => {
        navigate('/signin');
    };

    const SignUp = () => {
        navigate('/signup');
    };

    const MainpageButton = () => {
        navigate('/');
        window.location.reload(false);
    };

    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const goToDetailsButton = (id) => {
        navigate('/details/' + id)
    };

    useEffect(() => {
        axios.get('https://pr-movies.herokuapp.com/api/movies')
            .then((response) => {
                setMovies(response.data)
            })
    }, []);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = movies.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(movies)
        }
    }

    return (
        <div className="navbar-content">
            <div className="navbar-img-search-logout">
                <div className="navbarImage">
                    <img className="navbar-go-to-mainpage-image" src={obrazek} onClick={MainpageButton}/>
                </div>
                <div className="navbar-search">
                    <input className="navbar-search-input" placeholder="szukaj filmów i seriali..."
                           onChange={(e) => searchItems(e.target.value)}/>
                </div>
                <div className="navbarLogout">

                    {!isExp ? <button className="btn btn-secondary" onClick={LogOutButton}>Wyloguj</button> : false}
                    {isExp ? <button className="btn btn-secondary" onClick={LogIn}>Zaloguj</button> : false}&nbsp;
                    {isExp ? <button className="btn btn-secondary" onClick={SignUp}>Zarejestruj</button> : false}


                </div>
            </div>
            <div>
                <div className="search-bar">
                    {searchInput.length > 1 ? (
                        filteredResults.map((item) => {
                            return (
                                <div className="search-bar-parent" onClick={() => {
                                    goToDetailsButton(item.id);
                                    window.location.reload(false);
                                }}>
                                    <div className="search-image-div">
                                        <img src={item.image} className="search-image"/>
                                    </div>
                                    <div className="search-title-div">
                                        <div className="search-title">
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : false
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;
