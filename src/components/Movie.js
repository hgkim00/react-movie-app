import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie(props) {
    const { id, coverImg, title, summary, genres } = props;

    return (
        <div>
            <img src={coverImg} alt=""></img>
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
            {genres.map((genre) => (
                <li key={genre}>{genre}</li>
            ))}
            </ul>
      </div>
    )
  }

  Movie.propTypes = {
      id: PropTypes.number.isRequired,
      coverImg: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string).isRequired
  }
  
  export default Movie;