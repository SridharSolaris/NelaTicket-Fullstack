import React from "react";
import {BiChevronRight, BiChevronLeft, BiShareAlt, BiSearch, BiChevronDown, BiMenu} from "react-icons/bi";
import NelaTicket from '../../NELATICKET.svg';
import { useNavigate } from "react-router-dom";

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full"/>
                </div>
            </div>
        </>
    )
};
const NavLg = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2">
                <div className="w-25 h-10 px-4">
                <img 
                    src={NelaTicket} 
                    alt="logo" 
                    className="w-24 h-16" />
                </div>
                <div className="w-full flex items-center bg-white gap-3 rounded-sm">
                    <BiSearch className="ml-3 w-3"/>
                    <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities "/>
                </div>
            </div>
            <div>
                <a href={`/`} className="text-gray-500 text-xl">Home</a>
            </div>


            <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs flex items-center hover:white cursor-pointer">
                        Kakinada <BiChevronDown/>
                </span>
                <button
                onClick={() =>
                    navigate(`/login`)
                  }
                className="bg-red-600 text-white text-xs rounded px-2 py-1">
                    Sign In
                </button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full" />
                </div>
            </div>
        </div>
        </>
    )
};

const MovieNavbar = () => {
    return (
        <>
            <nav className=" lg:relative bg-navCol-700 px-4 py-2">
                <div className="md:hidden">{
                    /*Mobile Screen*/
                    <NavSm/>
                }</div>
                <div className="hidden lg:hidden md:block">{
                    /*Tablet Screen*/
                    <NavSm/>
                }</div>
                <div className="hidden lg:flex">{
                    /*Desktop Screen*/
                    <NavLg/>
                }</div>
            </nav>
        </>
    )
};

export default MovieNavbar;
