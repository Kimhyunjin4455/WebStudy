import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div>
            <img src = {coverImg} alt={title}/>
            <h2>{title}</h2> 
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g)=>(
                    <li key = {g}>{g}</li>
                ))}
            </ul>        
        </div>
    ); // 모든 이미지 엘리먼트들은 alt속성을 가지기 때문(4행)
     // 유저가 /movie경로에 올때만 렌더링
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie; 