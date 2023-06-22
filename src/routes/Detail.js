import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    // id를 가지고 api 요청함
    const { id } = useParams();
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setLoading(false);
        setDetail(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
                <div>
                    {<h3>{detail.id}</h3>}
                    <img src={detail.medium_cover_image} />
                    {<h1>제목 : {detail.title}</h1>}
                    {<p>순위 : {detail.rating}</p>}
                    장르
                    <ul>
                        {detail.genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                    {<p>소개 : {detail.description_intro}</p>}
                    <hr />
                    <h2> <Link to="/">홈</Link> </h2>
                </div>
            }
        </div>
    );
}

export default Detail;
