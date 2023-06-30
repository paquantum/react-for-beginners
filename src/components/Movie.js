import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

/*
    /movie/~~에서 id값을 얻어오기 위해
    Home.js에서 movie.id를 id에 담아서 prop으로 넘겨줌
    url로 오는 id값을 가져와서 사용해야 함
    사용은 Detail.js에서 사용하기 위해
*/
function Movie({id, coverImg, title, year, summary, genres}) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
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