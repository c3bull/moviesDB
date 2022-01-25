import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Navbar from "./navbar";
import axios from "axios";

const AllMovies = () => {

    const navigate = useNavigate();
    const [movies, setMovies] = useState([])

    const goToDetailsButton = (id) => {
        navigate('/details/' + id)
    };


    // const getMoviesDb = async () => {
    //     axios.get('https://pr-movies.herokuapp.com/api/movies')
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

    useEffect(() => {
        axios.get('https://pr-movies.herokuapp.com/api/movies')
            .then((response) => {
                setMovies(response.data)
                console.log('movies ' + movies)
            }).then()
    }, []);

    return (
        <div>
            <div className="all-data-div">
                <Navbar/>
                <div>
                    {movies.map((item, index) => {
                        return (
                            <div className="all-data-single-div" key={index} onClick={() => {
                                goToDetailsButton(item.id)
                            }}>

                                <div className="all-data-poster-div">
                                    <img src={item.image} className="all-data-poster"/>
                                </div>
                                <div className="all-data-content">
                                    <div className="all-data-title-year">
                                        {item.title}{/* • {item.year}*/}
                                    </div>
                                    <div className="all-data-rating">
                                        <AiIcons.AiFillStar color="orange" size="20px"/> {item.imdbRating}
                                    </div>
                                    <div className="all-data-rating">
                                        {item.genres}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <Sidebar/>
            <Footer/>
        </div>
    );
}

export default AllMovies;
