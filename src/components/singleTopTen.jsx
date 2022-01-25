import {useNavigate} from "react-router-dom";

function SingleTopTen({id, posterurl, title, storyline}) {

    const navigate = useNavigate();

    console.log("id: " + id)

    const goToDetailsButton = (id) => {
        navigate('/details/' + id)
    };

    return (
        <div key={id} onClick={() => {
            goToDetailsButton(id)
        }}>
            <div className="top-content-div">
                <img className="movies-img" src={posterurl}/>
                <div className="movies-title">{title}</div>

            </div>
            <div className="movie-storyline">
                <div>{storyline}</div>
            </div>
        </div>
    );
}

export default SingleTopTen;
