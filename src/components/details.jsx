import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
import Sidebar from "./sidebar";

const Details = (route) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState([])

    // const getMoviesDb = async () => {
    //     axios.get('https://pr-movies.herokuapp.com/api/movies/'+id)')
    //         .then((response) => {
    //             // const data = response.data;
    //             // this.setState({posts: data});
    //             setMovies(response)
    //             console.log('Data has been received!' + JSON.stringify(response.data));
    //         })
    //         .catch(() => {
    //             alert('Error retrieving data!');
    //         });
    // }

    console.log('movieDetails ' + movieDetails.length)
    useEffect(() => {
        axios.get('https://pr-movies.herokuapp.com/api/movies/' + id)
            .then((response) => {
                setMovieDetails(response.data)
            })

    }, []);
    if (movieDetails.length === 0) {
        return (
            <div className="test">
                <Navbar/>
            </div>
        );
    } else {
        return (
            <div className="details-main-div">
                <Navbar/>
                <div className="details-div">

                    <div className="details-title-parent">
                        <div className="details-title"> {movieDetails.title}</div>
                    </div>
                    <div className="details-line">
                    </div>
                    <div>
                        <img src={movieDetails.image} className="details-image"/>
                    </div>
                    <div className="details-content">
                        <div className="all-data-rating">
                            {movieDetails.content}
                        </div>
                    </div>
                </div>
                <div className="space"/>
                <Sidebar/>
                <Footer/>
            </div>
        );
    }

};

export default Details;
