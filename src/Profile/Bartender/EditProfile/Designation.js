import React from "react";
import style from '../../profile.module.css'
import { Link } from "react-router-dom";


function Designation() {
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
          <div className="flex relative justify-center items-center self-center mx-10 px-16 py-12 mt-14 mb-10 w-full text-xs rounded-3xl bg-white bg-opacity-80 max-w-[1099px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[1199px]">


         <div className="self-center px-5 mt-10  w-full max-w-[585px] max-md:max-w-full">
                <div className={`self-stretch text-2xl leading-9 text-center text-black} ${style.header}`}>
                    Your Designation
                </div>
                <div className="mt-2.5 text-base text-center whitespace-nowrap text-neutral-600">
                    Select all that apply.
                </div>

                <div className="px-5 mt-10 max-w-[585px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col px-6 py-7 mx-auto text-lg font-medium tracking-widest leading-8 text-center text-red-500 capitalize whitespace-nowrap rounded-2xl border-solid bg-red-500 bg-opacity-20 border-[3.032px] border-[color:var(--ff-3333,#F33)] h-[150px] w-[150px] max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="/images/completeProfile/cocktail-glass.png"
                                    className="self-center w-15 aspect-[1.01]"
                                />
                                <div className="mt-1">Bartender</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col px-3 py-5 mx-auto text-lg font-medium tracking-widest leading-8 text-center capitalize whitespace-nowrap bg-white rounded-2xl border-solid shadow-lg border-[1.516px] border-zinc-400 h-[150px] text-zinc-400 w-[150px] max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="/images/completeProfile/barback.png"
                                    className="self-center w-20 aspect-[1.01]"
                                />
                                <div className="mt-4">Bar-Back</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col px-7 py-5  mx-auto text-lg font-medium tracking-widest leading-8 text-center capitalize whitespace-nowrap bg-white rounded-2xl border-solid shadow-lg border-[1.516px] border-zinc-400 h-[150px] text-zinc-400 w-[150px] max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="/images/completeProfile/shutterstock.png"
                                    className="self-center w-20 aspect-[1.01]"
                                />
                                <div className="mt-4">Server</div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center ml-4 py-4 mt-12 mb-20 text-sm text-center text-black bg-amber-300 rounded-[92.207px] max-md:max-w-full">
                        
                        <Link to={"/SkillInterest"}>Save & Next</Link>
                    </div>
                </div>

            </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
  

  

export default Designation;
