import React, { useContext, useEffect, useState } from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { BiMoviePlay } from "react-icons/bi";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams
import { config } from "../../Config"
import UserContext from "../../context/UserContext";

const Movie = () => {
  const [moviedata, setMoviedata] = useState({});
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id parameter from the URL

  useEffect(() => {
    const fetchMovieData = async () => {

        const response = await axios.get(`/movie/${id}`);
        setMoviedata(response.data);
    };
    fetchMovieData();
  }, [id]); // Include id in the dependency array to fetch data when id changes
  console.log({moviedata})

  const userContextData = useContext(UserContext);

  const [movieData, setMovieData] = useState([]);
  const getMovies = async () => {
    try {
      const movies = await axios.get(`${config.api}/movies/allmovies`);
      if (movies) {
        setMovieData(movies.data.newmve);
        console.log(movies.data.newmve);

        // toast.success("Success");
      } else {
        // toast.error("Movies not found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movieData);
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div>
        <MovieHero bp={moviedata.backdrop_path} sl={moviedata.original_language} s={moviedata.status} r={moviedata.vote_average} vc={moviedata.vote_count} ot={moviedata.original_title} pp={moviedata.poster_path} id={id} />
        <div className="my-12 container mx-auto px-4 lg:w-1/2 lg:ml-64">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
            <p>{moviedata.overview}</p> {/* Use overview from moviedata */}
          </div>

          <div className="my-8">
            <hr />
          </div>

          <div className="flex flex-col items-start gap-3">
            <h2 className="text-gray-800 font-bold text-2xl">Application Offers</h2>
            <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
              <div className="w-8 h-8">
                <BiMoviePlay className="w-full h-full" />
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
                <p className="text-gray-600 text-sm">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Movie;

