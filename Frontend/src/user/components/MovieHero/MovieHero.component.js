import React from "react";
import { BiChevronRight, BiStar, BiShareAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

 const MovieHero = (props) => {
    const launchRazorPay = () => {
        let options = {
            key:"rzp_test_BRVxWrSVhyKh1m",
            amount: 500*100,
            currency: "INR",
            name: `${props.ot}`,
            description: "Movie purchase on Rental",
            image: `${props.pp}`,
            handler: () => {
                alert("Payment Done")
            },
            theme: {color: "#c4242d"}
        };
        let rzp = new window.Razorpay(options);
        rzp.open();
    }
    const navigate = useNavigate(); 
    return (
        <>
            <div className="md:hidden">
            <img src={`https://image.tmdb.org/t/p/original${props.bp}`} alt='poster' />
            </div>


            <div className="hidden md:block lg:hidden">
                <img src={`https://image.tmdb.org/t/p/original${props.bp}`} alt='poster' />
            </div>


            <div className="relative hidden lg:block" style={{height:"30rem"}}>

                <div className="absolute h-full w-full z-10"
                style={{backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}
                />

                <div className="absolute z-30 left-40 top-10 flex items-start">
                    <img
                    src={`https://image.tmdb.org/t/p/original${props.pp}`}
                    alt='poster'
                    className='h-full w-64 rounded-xl shadow-2xl'
                    />
                    <div className="container w-88 flex flex-col col-white-500 px-8 col-grey-100 text-white">
                        <h1 className="font-bold text-4xl py-4">{props.ot}</h1>
                        <div className="my-4 flex items-center">
                            <BiStar className="h-6 w-6"/>
                            <h3 className="font-bold text-2xl">{props.r}/10</h3>
                            <div className="flex items-center mt-1 p-2">
                            <p className="text-2sm">{props.vc} Votes</p>
                            <BiChevronRight/>
                            </div>
                            
                            
                        </div>
                        <div className="bg-gray-700 px-4 mr-96 py-3 gap-8 w-68 rounded-md flex">
                            <div className="flex flex-col">
                            <h3>Add your rating & review</h3>
                            <p>Your ratings matter</p>
                            </div>
                            <button className="bg-gray-100 text-black font-bold rounded px-4 my-1 ">Rate now</button>
                        </div>
                        <div className="flex text-black text-lg my-4 ">
                            <div className='bg-gray-300 px-4 my-4 mx-2 rounded-sm max-w-max'>{props.s}</div>
                            <div className='bg-gray-300 px-4 my-4 mx-2 rounded-sm max-w-max'>{props.sl}</div>
                        </div>
                        <div>
                            <button
                            onClick={() => navigate(`/booking`)}
                            className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 max-w-max rounded"
                            >
                                Book Tickets
                            </button>
                            {console.log(props.id)}
                            <button 
                            onClick={() => navigate(`/trailer/${props._id}`)}
                            className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 max-w-max rounded"
                            >
                                Show Trailer
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div className="text-white text-xl z-30 absolute right-12 top-8 flex">
                    <BiShareAlt className="w-8 h-8 "/>
                    <p className="px-4">Share</p>
                    </div>
                </div>

                <img
                 src={`https://image.tmdb.org/t/p/original${props.bp}`}
                alt="poster"
                className="w-full h-full"/>
            </div>
        </>
    )
 }

 export default MovieHero;