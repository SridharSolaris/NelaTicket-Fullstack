import React, { useState, useEffect } from "react";
import PlayPoster from "../components/Poster/playPoster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";
import axios from "axios";

const Plays = () => {

    const [topRatedShows, setTopRatedShows] = useState([]);

    useEffect(() => {
        const requestTopRatedShows = async () => {
          const getTopRatedShows = await axios.get("/tv/top_rated");
          setTopRatedShows(getTopRatedShows.data.results)
        };
        requestTopRatedShows();
    },[]);

    return (
        <>
        <div className="container mx-auto px-4 mt-4">

            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="w-8/12">
                    <h2 className="text-2xl font-bold mb-4">TV Series</h2>
                    <div className="flex flex-wrap">
                        {topRatedShows.map((image) => (
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                                <PlayPoster 
                                id={image.id}
                                poster_path={image.poster_path}
                                title={image.name}
                                subtitle={image.vote_average}
                                />
                            </div>
                        ))};
                        
                    </div>
                </div>

                <div className="lg:w-1/4">
                    <h2 className="text-2xl font-bold mb-4">Filters</h2>
                    <div>
                        <PlaysFilter title="Date" tags={["Today","Tomorrow", "This Weekend"]}/>
                        <PlaysFilter title="Language" tags={["Telugu","Hindi", "English","Tamil","Malayalam","Kannada"]}/>
                    </div>
                </div>
            </div>

            
        </div>
        </>
    )
}

export default Plays;