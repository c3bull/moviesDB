function SingleTopTen({id, posterurl, title, storyline}) {


    return (

        <div key={id}>
            <div className="topContentDiv">
                <img className="moviesImg" src={posterurl}/>
                <div className="moviesTitle">{title}</div>

            </div>
            <div className="movieStoryline">
                <div>{storyline}</div>
            </div>
        </div>
    );
}


export default SingleTopTen;