import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Navbar from "./navbar";
import axios from "axios";

const AddMovie = () => {

    const [movieTitle, setMovieTitle] = useState('')
    const [movieImage, setMovieImage] = useState('')
    const [movieContent, setMovieContent] = useState('')
    const [showElement, setShowElement] = React.useState(false)

    const navigate = useNavigate();

    const GoToMainButton = () => {
        navigate('/');
        window.location.reload(false);
    };

    const HandleChangeTitle = (event) => {
        setMovieTitle(event.currentTarget.value);
    };

    const HandleChangeImage = (event) => {
        setMovieImage(event.currentTarget.value);
    };

    const HandleChangeContent = (event) => {
        setMovieContent(event.currentTarget.value);
    };

    const WarningMessage = () => {
        if (showElement === false) {
            setShowElement(true)
        }

        setTimeout(function () {
            setShowElement(false)
        }, 2500);
    }

    const addMovieButton = () => {
        if ((movieTitle !== '' && movieImage !== '' && movieContent !== '')) {
            axios({
                url: 'https://pr-movies.herokuapp.com/api/movies',
                method: 'POST',
                data: {
                    "title": movieTitle,
                    "image": movieImage,
                    "content": movieContent
                }
            })
                .then(() => {
                    console.log('Data has been sent to the server');
                    GoToMainButton();
                })
                .catch(() => {
                    console.log('Internal server error');
                });
        } else {
            WarningMessage()
        }
    }

    return (
        <div>
            <div>
                <Navbar/>
                <div className="add-movie-content">
                    <div>

                    </div>
                    {!showElement ?
                        <div className="add-movie-info">
                            Cieszymy się że chcesz dodać film na naszej stronie. Podążaj za instrukcjami, a na pewno się
                            uda
                            :)
                        </div>
                        : <div className="add-movie-warning">Uzupełnij wszystkie dane</div>}
                    <div>
                        <form>
                            <input className="form-control" placeholder="Podaj tytuł"
                                   onChange={HandleChangeTitle}/><br/>
                            <input className="form-control"
                                   placeholder="Podaj link do plakatu, np https://fwcdn.pl/fpo/08/37/837/7088785.6.jpg"
                                   onChange={HandleChangeImage}/><br/>
                            <input className="form-control" placeholder="Podaj fabułę filmu"
                                   onChange={HandleChangeContent}/><br/>

                            <div className="btn btn-primary" id="createAccountButton" onClick={() => {
                                addMovieButton();
                            }}>
                                Dodaj film!
                            </div>
                        </form>
                    </div>
                </div>
                <Sidebar/>
                <Footer/>
            </div>
        </div>
    )
};

export default AddMovie;
