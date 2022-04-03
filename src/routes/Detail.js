import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

function Detail() {
    const [currentMovie, setCurrentMovie] = useState([]);

    const params = useParams();
    console.log(params.id);
    const getMovie = async() => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`);
        const json = await response.json();
        setCurrentMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    console.log(currentMovie);

    return <h1>DETAIL..</h1>
}

export default Detail;