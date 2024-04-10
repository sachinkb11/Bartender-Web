import React from "react";
import Wrappers from "../../../complete_profile/Bartender/Wrappers";
import styles from "../../dashboard.module.css";
import { Link } from "react-router-dom";

function Jp3() {
  return (
    <Wrappers>
      <div className="flex relative justify-center items-center self-center px-16 py-12 w-full rounded-3xl bg-white bg-opacity-80 max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
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
            <Link to={"/Jp4"} className="justify-center self-center px-5 py-5 mt-[100px] w-[55%] text-sm text-center text-white bg-red-500 rounded-[92.207px] max-md:mt-10 max-md:max-w-full">
              Post Job
            </Link>
          </div>
        </div>
      </div>
    </Wrappers>
  );
}

export default Jp3;
