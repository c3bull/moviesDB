import './App.css';
import Login from "./components/login";
import MainContent from "./components/mainContent";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import AllData from "./components/allData";
import SignUp from "./components/signUp";
import AddMovie from "./components/addMovie";
import AllMovies from "./components/allMovies";
import AllSeries from "./components/allSeries";
import Details from "./components/details";
import {isExpired} from "react-jwt";

function App() {

    const isExp = isExpired(localStorage.getItem('token'))

    return (
        <div className="App">
            <Router>
                <Routes>
                    {/*<Route path='/' element={isExp ? <Navigate to="/signin" /> : <MainContent />}/>*/}
                    <Route path='/' element={<MainContent/>}/>
                    <Route path='/signin' element={<Login/>}/>
                    <Route path='/all' element={<AllData/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='/add' element={isExp ? <Navigate to="/signin" /> : <AddMovie />}/>
                    <Route path='/movies' element={<AllMovies/>}/>
                    <Route path='/series' element={<AllSeries/>}/>
                    <Route path='/details/:id' element={<Details/>}/>
                </Routes>

            </Router>
        </div>
    );
}

export default App;
