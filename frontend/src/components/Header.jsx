import React from "react";
import { assets } from "../assets/assets";


const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-15">
      {/* text for best text to image generator */}
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-2 rounded-full border border-neutral-500">
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="star icon" />
      </div>
      {/* ends here  */}
      {/* Heading  */}
      <h1 className="text-4xl lg:max-w-[650px] sm:text-7xl sm:max-w-[700px] md:max-w-[600px]">
        Trun text to <span className="text-blue-600">image</span>, in seconds.
      </h1>

      <p className="text-center max-w-xl mx-auto mt-5">Unleash your creativity with AI. Turn your Imagination into visual arts in seconds - just type, and watch the magic happen.</p>

      <button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full">
        Generate Image 
        <img className="w-6" src={assets.star_group} alt="star_group" />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-2">
        {Array(6).fill('').map((item, index) => (
          <img className="rounded hover:scale-110 transition-all duration-300 cursor-pointer max-sm:w-10"
          src={assets.sample_img_1}
          alt=""
          key={index}
          width={70}/>
        ))}
      </div>

      <p className="mt-2 text-neutral-600" >Generated images with PromptPixel</p>
    </div>
  );
};

export default Header;
