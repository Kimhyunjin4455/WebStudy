import{useState, useEffect} from "react";
import Movie from "../components/Movie";
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
    const json = await(
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )).json();
    setMovies(json.data.movies);
    setLoading(false);     
  };
  useEffect(()=>{
    getMovies(); 
  },[]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie)=>(
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
    </div>);    
} 
export default Home;
