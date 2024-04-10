import React, { useState } from "react";
import style from '../community.module.css'

function UserReview() {
  const showUser = [1, 2, 3];
  return (
    <div className="max-w-[370px]   shadow-lg ">
     
      <div className="text-sm font-medium mt-4 px-4 text-black max-md:max-w-full">
        John Doe Reviews (4)
      </div>
      <div className="mb-1 flex flex-col justify-end ">
      {showUser.map((item) => {
        return (
          <div className="px-3 ">
            <div className="flex flex-col px-4 pt-px pb-4 mt-4 bg-white rounded bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] rounded-md max-w-[400px] max-md:max-w-full">
              <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-2 mt-3">
                  <img
                    loading="lazy"
                    src="images/Comminity/bar.png"
                    className="shrink-0 aspect-square w-[43px]"
                  />
                  <div className="flex flex-col my-auto">
                    <div className={`text-sm text-black} ${style.header}`}>ABC Establishment</div>
                    <div className="flex gap-2 mt-1 text-xs">
                      <div className="flex flex-1 gap-1 text-black whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="images/Comminity/location.png"
                          className="shrink-0 aspect-square w-[15px]"
                        />
                        <div className="my-auto">Charlotte</div>
                      </div>
                      <div className="my-auto text-zinc-400">0.2 mi</div>
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="images/Comminity/quotes.png"
                  className="shrink-0 aspect-square w-[45px]"
                />
              </div>
              <div className="shrink-0 mt-2 h-px bg-gray-200 border border-gray-200 border-solid max-md:max-w-full" />
              <div className="flex gap-2 self-start mt-1 text-xs leading-4 whitespace-nowrap text-neutral-700">
                <div className="grow">4.5</div>
                <img
                  loading="lazy"
                  src="images/Comminity/star.png"
                  className="shrink-0 max-w-full aspect-[5.88] w-[105px]"
                />
              </div>
              <div className="mt-2 text-xs italic font-medium text-neutral-400 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Enim eget ullamcorper
                interdum nunc posuere. At commodo cursus id arcu. Aliquet at est
                nunc tellus.
              </div>
            </div>
          </div>
        );
      })}
       <img
      loading="lazy"
      src="images/Comminity/blackChat.png"
      className="self-end  aspect-square w-[55px] max-md:mr-2.5"
    />
    </div>
    </div>
  );
}

export default UserReview;
