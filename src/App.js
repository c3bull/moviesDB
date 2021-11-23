import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import MainContent from "./components/mainContent";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllData from "./components/allData";
import SignUp from "./components/signUp";
import AddMovie from "./components/addMovie";
import AllMovies from "./components/allMovies";
import AllSeries from "./components/allSeries";

function App() {
  return (
    <div className="App">
      {/*<MainContent/>*/}
      {/*  <Footer/>*/}
        <Router>
            <Routes>
                <Route path ='/login' element={<Login/>} />
                <Route path ='/' element={<MainContent/>} />
                <Route path ='/all' element={<AllData/>} />
                <Route path ='/signUp' element={<SignUp/>} />
                <Route path ='/addMovie' element={<AddMovie/>} />
                <Route path ='/movies' element={<AllMovies/>} />
                <Route path ='/series' element={<AllSeries/>} />
            </Routes>

        </Router>
    </div>
  );
}

export default App;
