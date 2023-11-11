import React , {useState,useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//component
import {NextArrow, PrevArrow} from "./Arrows.component";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            console.log(getImages);
            setImages(getImages.data.results);
        }
        requestNowPlayingMovies();
    }, []);

    const settingsLg = {
        arrows: true,
        dots: false,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    }



    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow/>
    };


    return (
        <>
        <div className="lg:hidden">
            <HeroSlider {...settings} >
            {
                images.map((image)=> (
                    <div className="w-full h-64 md:h-80 py-3">
                        <img src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} 
                        alt="testing" className="w-full h-full rounded-md"/>
                    </div>
                ))
            }
            </HeroSlider>
            
        </div>


        <div className="hidden lg:block">
        <HeroSlider {...settingsLg} >
            {
                images.map((image)=> (
                    <div className="relative">
                        
                        <div className="w-full h-96">
                        <div className="absolute top-0 right-0 h-96 w-full z-10"
                        style={{backgroundImage: "linear-gradient(45deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 18.3%, rgba(26, 26, 26, 0.5) 45.47%, rgb(26, 26, 26) 100%)"}}
                        />
                            <h1 className="absolute z-30 top-72 left-16 text-white font-bold text-4xl">{image.original_title}</h1>
                            <img src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} 
                            alt="testing" className="w-full h-full rounded-md"/>
                        </div>

                    </div>
                    
                ))
            }
            </HeroSlider>
            
        </div>

        </>
    );
};

export default HeroCarousel;