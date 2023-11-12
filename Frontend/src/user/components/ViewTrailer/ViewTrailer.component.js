import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { config } from "../../../Config";

function ViewTrailer() {
  const [trailerData, setTrailerdata] = useState([]);
  // const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const getTrailer = async () => {
    try {
      const movies = await axios.get(`${config.api}/movies/viewtrailer/${id}`);
      if (movies) {
        setTrailerdata(movies.data.newmve);
        console.log(movies.data.newmve);
        //console.log(movieData);
        // toast.success("Success");
      } else {
        // toast.error("Movies not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrailer();
  }, []);

  return (
    <>
      <div className="flex w-full h-full justify-center my-5">
        {trailerData.map((link) => {
          return (
          <div style={{ width: '1000px', height: '560px' }}>
          <ReactPlayer controls width="100%" height="100%" url={link.trailer_link}></ReactPlayer>
          </div>
          );
        })}
      </div>
    </>
  );
}

export default ViewTrailer;