import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";

function Detail(){
    const [loadingD, setLoadingD] = useState(true);
    const [moviesD, setMoviesD] = useState([]);
    const {id} = useParams()
    //console.log(id); // id를 반환해줌
    useEffect(()=>{
        const getMovieD = async() =>{
            const json = await (
                await fetch(
                    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )).json();
            setMoviesD(json.data.movies);
            setLoadingD(false);
        }; 
        getMovieD();
    }, [id]);
    return (
        <div>
          {loadingD ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {moviesD.map((movie)=>(
                <Movie
                    key={movie.id} // key는 react.js 에서만, map안에서 component들을 render 할때 사용하는 것
                    id={movie.id}
                    coverImg={movie.medium_cover_img}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}/>    
              ))}
            </div>
          )}
        </div>
    );
}
export default Detail;