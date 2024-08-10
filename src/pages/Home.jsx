/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Navbar />
      <section className="mt-[5px]">
        <img
          src="https://img.freepik.com/premium-vector/mumbai-skyline-landscape-view-city-mumbai-with-characteristics-buildings-monuments_743272-109.jpg?w=4320"
          className="w-[100vw] h-[100vh] fixed"
          alt=""
        />
        <div className="absolute w-full bottom-[5rem]">
          <div className="flex flex-col justify-center items-center sm:mb-[5rem] mb-[0rem]">
            <span className="text-[3rem] animate-fadeIn">Welcome,</span>
            <span className="text-[2rem] animate-fadeIn"> to</span>
            <h1 className="text-[5rem] sm:ml-[25px] text-center font-[Agbalumo] animate-slideIn">
              travels <span id="samarkand">Bazar</span>
            </h1>
            {/* <p className="text-[1.5rem] mt-[1rem] text-center max-w-[600px] animate-fadeIn">
              Discover the world’s best destinations with just a click. Start your journey today with Travels Bazar!
            </p> */}
          </div>
          <div className="flex justify-center items-center sm:gap-[12rem] sm:h-[5.9rem] h-[11rem] sm:flex-row flex-col gap-[20px] ">
            <Link to="/explore">
              <button
                className="text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]"
                type="button"
              >
                Explore
              </button>
            </Link>
            <Link to="/">
              <button
                className="text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]"
                type="button"
              >
                Places
              </button>
            </Link>
            <Link to="/about">
              <button
                className="text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]"
                type="button"
              >
                About
              </button>
            </Link>
          </div>
        </div>
      </section>
      <footer
        style={{
          backgroundColor: "#f8f9fa",
          padding: "8px",
          textAlign: "center",
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <p>&copy; 2024 Travels Bazar. All rights reserved.</p>
        {/* <p>Contact Us: 8584027372</p> */}
        <div className="flex justify-center items-center mt-[10px]">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-[24px] mx-[10px] text-[#3b5998] hover:text-[#2d4373]" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[24px] mx-[10px] text-[#e4405f] hover:text-[#bc2a8d]" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-[24px] mx-[10px] text-[#00aced] hover:text-[#0084b4]" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
