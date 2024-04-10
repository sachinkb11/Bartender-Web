import React from "react";
import { Link } from "react-router-dom";

function Availibilty() {
  return (
    
      <div className="flex flex-col fixed top-[30%] left-[40%]  pt-4 pb-5 text-base mt-10 ml-10 text-center bg-white rounded-3xl max-w-[351px] shadow-2xl">
              <Link to={"/CelenderBrt"} className="self-end aspect-square text-2xl mr-5">&#10005;</Link>
        <div className="flex flex-col  px-5 mt-3 w-full">
          <button className="justify-center items-center  px-4 py-4 text-black bg-amber-300 rounded-[113.175px]">
            Change Availability
          </button>
          <button className="justify-center px-5  py-4 mt-4 text-black border border-amber-300 border-solid rounded-[113.175px]">
            Set Yourself Unavailable
          </button>
        </div>
      </div>
  
  );
}

export default Availibilty;
