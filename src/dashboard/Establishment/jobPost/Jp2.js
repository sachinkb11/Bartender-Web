import React from "react";
import Wrappers from "../../../complete_profile/Bartender/Wrappers";
import styles from "../../dashboard.module.css";
import { Link } from "react-router-dom";

function Jp2() {
  return (
    <Wrappers>
      <div className="flex relative justify-center items-center self-center px-16 py-12  w-full rounded-3xl bg-white bg-opacity-80 max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1299px]">
          <div className={`self-center text-2xl leading-9 text-center text-black} ${styles.header}`}>
            Post A Job
          </div>
          <div className="self-center mt-1 text-base text-neutral-600">
            Lorem Ipsum Dolar
          </div>
          <div className="flex gap-5 mt-9 text-xs max-md:flex-wrap">
            <div className="flex flex-1 flex-auto gap-4 px-5 py-3.5 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
              <img
                loading="lazy"
                src="/images/completeProfile/building.png"
                className="shrink-0 my-auto aspect-square w-[22px]"
              />
              <div className="flex flex-col text-start grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="text-black max-md:max-w-full">
                  Minimum years of experience
                </div>
                <div className="mt-2 text-zinc-500 max-md:max-w-full">
                <input className="w-full outline-none border-none" type="text" placeholder="Minimum years of experience"/>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-auto gap-4 px-5 py-3.5 whitespace-nowrap bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
              <img
                loading="lazy"
                src="/images/completeProfile/earning1.png"
                className="shrink-0 my-auto aspect-square w-[22px]"
              />
              <div className="flex text-left flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="text-black max-md:max-w-full">Pay</div>
                <div className="mt-2 text-zinc-500 max-md:max-w-full">
                <input className="w-full outline-none border-none" type="text" placeholder="$20/hr"/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end px-5 py-3.5 mt-6 text-xs bg-white border border-gray-200 border-solid rounded-[100px] max-md:flex-wrap">
            <img
              loading="lazy"
              src="/images/completeProfile/pen.png"
              className="shrink-0 self-start aspect-[1.04] w-[23px]"
            />
            <div className="flex flex-col text-left grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="text-black max-md:max-w-full">
                Skills Required
              </div>
              <div className="mt-2 text-zinc-500 max-md:max-w-full">
                <input className="w-full outline-none border-none" type="text" placeholder="Bartending"/>

              </div>
            </div>
          </div>
          <div className="flex flex-col px-3.5 pt-3 pb-7 mx-5 mt-1 text-black bg-white rounded-2xl shadow-sm max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 px-0.5 text-sm font-medium max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto text-left">Suggested Skills</div>
              <img
                loading="lazy"
                src="/images/completeProfile/cross.png"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
            <div className="flex gap-2 self-start mt-3 text-xs max-md:flex-wrap">
              <button className="justify-center px-4 py-2.5 whitespace-nowrap bg-neutral-100 rounded-[100px]">
                Bartending
              </button>
              <button className="justify-center px-4 py-2.5 whitespace-nowrap bg-neutral-100 rounded-[100px]">
                Barback
              </button>
              <button className="justify-center px-4 py-2.5 bg-neutral-100 rounded-[100px]">
                FOH Support
              </button>
              <button className="justify-center px-4 py-2.5 whitespace-nowrap bg-neutral-100 rounded-[100px]">
                Mixologist
              </button>
              <button className="justify-center px-4 py-2.5 whitespace-nowrap bg-neutral-100 rounded-[100px]">
                Host
              </button>
              <button className="justify-center px-4 py-2.5 text-center bg-neutral-100 rounded-[100px]">
                Cashier
              </button>
              <button className="justify-center px-4 py-2.5 text-center whitespace-nowrap bg-neutral-100 rounded-[100px]">
                Server
              </button>
            </div>
          </div>
          <Link to={"/Jp3"} className="justify-center self-center px-5 py-5 mt-40 w-[55%] text-sm text-center text-white bg-red-500 rounded-[92.207px] max-md:mt-10 max-md:max-w-full">
            Save & Next
          </Link>
        </div>
      </div>
    </Wrappers>
  );
}

export default Jp2;
