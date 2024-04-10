import React from "react";
import style from '../../profile.module.css'
import { Link } from "react-router-dom";

function BasicInfo() {
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
       <Link to={"/MainProfile"} className="border-2 px-4 rounded-[10px] mr-5 } ">&#10094;</Link>
         <span className={`${style.header} ` }>Edit Your Profile</span> 
        </div>
      </div>
<div className=" flex justify-center">
        <div className="flex relative justify-center items-center self-center mx-10 px-16 py-12 mt-10 mb-10 w-full text-xs rounded-3xl bg-white bg-opacity-80 max-w-[1099px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      
      <div className="flex flex-col items-center max-w-full w-[1199px]">
        <div className={`text-2xl leading-9 text-center text-black ${style.header} ` }>
          Basic Info
        </div>
        <div className="mt-1 text-base text-neutral-600">
          What will be your title/designation?
        </div>
        <img
          loading="lazy"
          src="/images/profileChange.png"
          className="mt-7 max-w-full aspect-square w-[124px] max-md:mt-10"
        />
        <div className="flex gap-5 self-stretch mt-8 max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-1 flex-auto gap-4 px-5 py-2 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
            <img
              loading="lazy"
              src="/images/person.png"
              className="shrink-0 my-auto aspect-square w-[22px]"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-black max-md:max-w-full">Full Name</div>
                            
                <input className="mt-2 outline-none border-none text-zinc-500 max-md:max-w-full" type="text" placeholder="Your Full Name" />
             
            </div>
          </div>
          <div className="flex flex-1 flex-auto gap-4 px-5 py-2 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
            <img
              loading="lazy"
              src="/images/completeProfile/pen.png"
              className="shrink-0 my-auto aspect-square w-[23px]"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-black max-md:max-w-full">
                Curate Your Bio
              </div>
              <input className="mt-2 outline-none border-none text-zinc-500 max-md:max-w-full" type="text" placeholder="Create your bio" />

            </div>
          </div>
        </div>
        <div className="flex gap-5 self-stretch mt-4 max-md:flex-wrap">
          <div className="flex flex-1 flex-auto gap-4 px-5 py-2 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
            <img
              loading="lazy"
              src="/images/completeProfile/drink_glass.png"
              className="shrink-0 my-auto aspect-square w-[23px]"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-black max-md:max-w-full">
                Years of Experience
              </div>
              <input className="mt-2 outline-none border-none text-zinc-500 max-md:max-w-full" type="text" placeholder="Your Years of Experience" />

            </div>
          </div>
          <div className="flex flex-1 flex-auto gap-4 px-5 py-2 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
            <img
              loading="lazy"
              src="/images/completeProfile/location.png"
              className="shrink-0 my-auto aspect-square w-[23px]"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-black max-md:max-w-full">
                Based From Which City, State?
              </div>
              <input className="mt-2 outline-none border-none text-zinc-500 max-md:max-w-full" type="text" placeholder="Enter Your Loaction" />

            </div>
          </div>
        </div>
        <div className="flex gap-5 self-stretch mt-4 max-md:flex-wrap">
          <div className="flex flex-1 flex-auto gap-4 px-5 py-2 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
            <img
              loading="lazy"
              src="/images/completeProfile/location.png"
              className="shrink-0 my-auto aspect-square w-[23px]"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-black max-md:max-w-full">Zip Code</div>
             
              <input className="mt-2 outline-none border-none text-zinc-500 max-md:max-w-full" type="text" placeholder="Enter Your Zip Code" />

            </div>
          </div>
          <div className="flex flex-1 flex-auto gap-4 px-5 py-2 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
            <img
              loading="lazy"
              src="/images/completeProfile/celender.png"
              className="shrink-0 my-auto aspect-square w-[23px]"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-black max-md:max-w-full">Birthdate</div>
              <input className="mt-2 outline-none border-none text-zinc-500 max-md:max-w-full" type="text" placeholder="Enter Your birthdate" />

            </div>
          </div>
        </div>
        <Link to={"/Designation"} className="justify-center py-4 mt-10 text-sm text-center min-w-[600px] text-black bg-amber-300 rounded-[92.207px] max-md:mt-10 max-md:max-w-full">
          Update & Save
        </Link>
      </div>
    </div>
    </div>
    </div>
  );
}

export default BasicInfo;
