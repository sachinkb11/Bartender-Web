import React from "react";
import Wrappers from "../../../complete_profile/Bartender/Wrappers";
import styles from "../../dashboard.module.css";
import { Link } from "react-router-dom";

function Jp4() {
  return (
    <Wrappers>
      <div className="flex relative opacity-20 justify-center items-center self-center px-16 py-12 w-full rounded-3xl bg-white-500  max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1299px]">
          <div
            className={`self-center text-2xl leading-9 text-center text-black} ${styles.header}`}
          >
            Post A Job
          </div>
          <div className="self-center mt-1 text-base text-neutral-600">
            Lorem Ipsum Dolar
          </div>
          <div className="flex gap-4 items-start px-5 pt-3.5 pb-5 mt-9 text-xs bg-white rounded-3xl border border-gray-200 border-solid max-md:flex-wrap">
            <img
              loading="lazy"
              src="/images/completeProfile/pen.png"
              className="shrink-0 aspect-[1.04] w-[23px]"
            />
            <div className="flex flex-col text-left grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="text-black max-md:max-w-full">
                Duties & Responsibilities (optional)
              </div>
              <div className="mt-2 text-zinc-500 max-md:max-w-full">
                <textarea
                  className="border-none outline-none w-full"
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="Duties & Responsibilities (optional)"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="self-end mt-4 text-base text-neutral-600">0/200</div>
          <div className="flex gap-4 items-start px-5 pt-3.5 pb-5 mt-5 text-xs bg-white rounded-3xl border border-gray-200 border-solid max-md:flex-wrap">
            <img
              loading="lazy"
              src="/images/completeProfile/pen.png"
              className="shrink-0 aspect-[1.04] w-[23px]"
            />
            <div className="flex text-left flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="text-black max-md:max-w-full">
                Benefits (optional)
              </div>
              <div className="mt-2 text-zinc-500 max-md:max-w-full">
                <textarea
                  className="border-none outline-none w-full"
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder=" Benefits (optional)"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex flex-col self-end mt-4 max-w-full w-[969px]">
            <div className="self-end text-base text-neutral-600">0/200</div>
            <button className="justify-center self-center px-5 py-5 mt-[100px] w-[55%] text-sm text-center text-white bg-red-500 rounded-[92.207px] max-md:mt-10 max-md:max-w-full">
              Post Job
            </button>
          </div>
        </div>
      </div>
      <div className=" absolute top-[400px] shadow-xl flex flex-col pt-9 pb-2 px-8  text-center bg-white rounded-3xl max-w-[693px]">
      <div className="w-full text-xl font-medium leading-7 text-black">
        You are ready to post this gig! <br />
        And BAROOOM thanks you for utilizing our Services!
      </div>
      <div className="flex gap-2.5 self-center mt-11 text-lg capitalize">
        <Link to={"/Jp3"} className="justify-center px-12 py-3 text-black whitespace-nowrap bg-white border border-amber-300 border-solid rounded-[110px]">
          Cancel
        </Link>
        <Link to={"/SuccessEst"} className="justify-center px-11 py-3 text-white bg-red-500 rounded-[110px]">
          Post Job
        </Link>
      </div>
    </div>
    </Wrappers>
  );
}

export default Jp4;
