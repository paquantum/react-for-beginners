import PropTypes from "prop-types";
import {Link} from "react-router-dom";
/*
    /movie/~~에서 id값을 얻어오기 위해
    Home.js에서 movie.id를 id에 담아서 prop으로 넘겨줌
    url로 오는 id값을 가져와서 사용해야 함
    사용은 Detail.js에서 사용하기 위해
*/
function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;