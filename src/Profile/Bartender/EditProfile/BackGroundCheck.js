import React from "react";
import style from "../../profile.module.css";
import { Link } from "react-router-dom";

function BackGroundCheck() {
  

    return (
      <div>
        <img
          loading="lazy"
          src="/images/completeProfile/complete_Profile_backImg.png"
          className="object-cover fixed inset-0 size-full"
        />
  
        <div className="flex overflow-hidden relative flex-col  px-20 py-[60px] text-3xl text-white min-h-[130px] rounded-b-3xl max-md:flex-wrap max-md:px-5">
         
          <img
            loading="lazy"
            src="/images/completeProfile/upper_img.png"
            className="object-cover absolute inset-0 size-full"
          />
  
          <div className="relative flex-auto my-auto max-md:max-w-full">
            <Link
              to={"/MainProfile"}
              className="border-2 px-4 rounded-[10px] mr-5 } "
            >
              &#10094;
            </Link>
            <span className={`${style.header} `}>Edit Your Profile</span>
          </div>
        </div>
        <div className=" flex justify-center">
        <div className="flex relative justify-center items-center self-center px-16 pt-10 mb-5 mt-14 w-full rounded-3xl bg-white bg-opacity-80 max-w-[1099px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center  mb-28 max-w-full w-[1293px] max-md:my-10">
        <div className={`text-2xl leading-9 text-center text-black} ${style.header}`}>
          Background Check
        </div>
        <div className="self-stretch mt-2 text-base text-center text-neutral-600 max-md:max-w-full">
          The background check is optional and do not feel obligated to enter
          your SS# now. You will have a higher certification to the employers if
          we do provide a background check.
          <br />
          <br />
        </div>
        <div className="flex gap-4 px-5 py-2 mt-10 max-w-full text-xs bg-white border border-gray-200 border-solid rounded-[92.207px] w-[539px] max-md:flex-wrap max-md:mt-10">
          <img
            loading="lazy" 
            src="/images/completeProfile/tick-circle-solid.png"
            className="shrink-0 my-auto aspect-square w-[23px]"
          />
          <div className="flex flex-col flex-1 max-md:max-w-full">
            <div className="text-black max-md:max-w-full">
              SS Number (optional)
            </div>
                       <input className=" mt-2 border-none outline-none text-zinc-500 max-md:max-w-full" type="text" placeholder="Enter your SS Number" />
          </div>
        </div>
        <Link to={"/PaymentSetup"} className="justify-center py-4 mt-7 max-w-full text-sm text-center text-black bg-amber-300 rounded-[92.207px] w-[539px] max-md:max-w-full">
          Save & Next
        </Link>
      </div>
    </div>
        </div>
      </div>
    );
  }
  
  export default BackGroundCheck;
  
