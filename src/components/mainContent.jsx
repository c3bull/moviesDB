import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import SingleTopTen from "./singleTopTen";
import axios from "axios";

const MainContent = () => {

    const navigate = useNavigate();
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('https://pr-movies.herokuapp.com/api/movies')
            .then((response) => {
                setMovies(response.data)
            })
    }, []);

    return (
        <div>
            <div id="mainpage-background">
                <div className="mainpage-content">
                    <Navbar/>
                    <div className="category-div">
                        <div className="category-label">
                            Top 10
                        </div>
                        <div className="scrollable-div-size">
                            <div className="scrollable-div">
                                {movies.slice(3, 13).map((item, index) => (
                                    <SingleTopTen id={item.id}
                                                  posterurl={item.image}
                                                  title={item.title}
                                                  storyline={item.content}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="category-div">
                        <div className="category-label">
                            Top 10: Thriller
                        </div>
                        <div className="scrollable-div-size">
                            <div className="scrollable-div">
                                {movies.slice(10, 20).map((item, index) => (
                                    <SingleTopTen id={item.id}
                                                  posterurl={item.image}
                                                  title={item.title}
                                                  storyline={item.content}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="category-div">
                        <div className="category-label">
                            Top 10: Komedia
                        </div>
                        <div className="scrollable-div-size">
                            <div className="scrollable-div">
                                {movies.slice(120, 130).map((item, index) => (
                                    <SingleTopTen id={item.id}
                                                  posterurl={item.image}
                                                  title={item.title}
                                                  storyline={item.content}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="category-div">
                        <div className="category-label">
                            Top 10: Dramat
                        </div>
                        <div className="scrollable-div-size">
                            <div className="scrollable-div">
                                {movies.slice(137, 147).map((item, index) => (
                                    <SingleTopTen id={item.id}
                                                  posterurl={item.image}
                                                  title={item.title}
                                                  storyline={item.content}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar/>
            <Footer/>
        </div>
    );
}

export default MainContent;
