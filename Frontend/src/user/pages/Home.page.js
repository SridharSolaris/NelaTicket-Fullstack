import React, {useState, useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import axios from"axios";
import showPosterSlider from "../components/PosterSlider/showPosterSlider.component";

const HomePage = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcommingMovies, setUpcommingMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results)
    };
    requestPopularMovies();
    const requestUpcommingMovies = async () => {
      const getUpcommingMovies = await axios.get('/movie/upcoming');
      setUpcommingMovies(getUpcommingMovies.data.results);
    };
    requestUpcommingMovies();
    const requestTvSeries = async () => {
      const getTvSeries = await axios.get('/tv/popular');
      setTvSeries(getTvSeries.data.results);
    };
    requestTvSeries();
  },[]);
  

  console.log({popularMovies});

  return (
    <>
    <div className="flex flex-col gap-10">
    <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 py-4">
            The Best of Entertainment
        </h1>
        <EntertainmentCardSlider/>
    </div>

    <div className="bg-navCol-200 py-16">
      <div className="container mx-auto px-4">
      <div className="flex">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" 
        alt="Rupay"
        className="w-full h-full"
        />
      </div>
        <PosterSlider 
        images={popularMovies} 
        title="Premieres" 
        subtitle="Brand New Releases Every Friday" 
        isDark />
      </div>
    </div>
    </div>

    <div className="container mx-auto px-4">
      <PosterSlider
      images={upcommingMovies}
      title="Online Streaming Events"
      isDark={false}
      />
    </div>

    <div className="container mx-auto px-4">
      <showPosterSlider
      images={tvSeries}
      title="TV Series"
      isDark={false}
      />
    </div>

    </>
  )
}

export default HomePage;
