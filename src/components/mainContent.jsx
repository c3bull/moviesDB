import React from 'react';
import obrazek from "../images/film.png";
import {moviesDatabase} from "./moviesdb";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import {Link, useNavigate} from "react-router-dom";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import SingleTopTen from "./singleTopTen";

const MainContent = () => {


    return (
        <div>
            <div id="mainpageBackground">
                <div className="mainpageContent">
                    <Navbar/>
                    <div className="categoryDiv">
                        <div className="categoryLabel">
                            Top 10
                        </div>
                        <div className="scrollableDivSize">
                            <div className="scrollableDiv">
                                {moviesDatabase.slice(0, 10).map((item, index) => (
                                    <SingleTopTen key={item.id}
                                                  posterurl={item.posterurl}
                                                  title={item.title}
                                                  storyline={item.storyline}
                                    />
                                ))};
                            </div>
                        </div>
                    </div>

                    <div className="categoryDiv">
                        <div className="categoryLabel">
                            Top 10: Thriller
                        </div>
                        <div className="scrollableDivSize">
                            <div className="scrollableDiv">
                                {moviesDatabase.slice(10, 20).map((item, index) => (
                                    <SingleTopTen key={item.id}
                                                  posterurl={item.posterurl}
                                                  title={item.title}
                                                  storyline={item.storyline}
                                    />
                                ))};
                            </div>
                        </div>
                    </div>
                    <div className="categoryDiv">
                        <div className="categoryLabel">
                            Top 10: Komedia
                        </div>
                        <div className="scrollableDivSize">
                            <div className="scrollableDiv">
                                {moviesDatabase.slice(20, 30).map((item, index) => (
                                    <SingleTopTen key={item.id}
                                                  posterurl={item.posterurl}
                                                  title={item.title}
                                                  storyline={item.storyline}
                                    />
                                ))};
                            </div>
                        </div>
                    </div>
                    <div className="categoryDiv">
                        <div className="categoryLabel">
                            Top 10: Dramat
                        </div>
                        <div className="scrollableDivSize">
                            <div className="scrollableDiv">
                                {moviesDatabase.slice(30, 40).map((item, index) => (
                                    <SingleTopTen key={item.id}
                                                  posterurl={item.posterurl}
                                                  title={item.title}
                                                  storyline={item.storyline}
                                    />
                                ))};
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
