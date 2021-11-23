import React from 'react';
import obrazek from "../images/film.png";
import {Sidebardata} from "./sidebardata";
import {Link, useNavigate} from "react-router-dom";
import {moviesDatabase} from "./moviesdb";
import * as AiIcons from "react-icons/ai";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Navbar from "./navbar";

const AllSeries = () => {

    const navigate = useNavigate();

    const LogOutButton = () => {
        navigate('/login')
    };

    return (
        <div>
            <div className="allDataDiv">
                <Navbar/>
                <div>
                    {moviesDatabase.map((item, index) => {
                        return (
                            <div className="allDataSingleDiv" key={index}>

                                <div className="allDataPosterDiv">
                                    <img src={item.posterurl} className="allDataPoster"/>
                                </div>
                                <div className="allDataContent">
                                    <div className="allDataTitleYear">
                                        {item.title} • {item.year}
                                    </div>
                                    <div className="allDataRating">
                                        <AiIcons.AiFillStar color="orange" size="20px"/> {item.imdbRating}
                                    </div>
                                    <div className="allDataRating">
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

export default AllSeries;
