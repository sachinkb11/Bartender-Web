import React, { useState } from "react";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import WrapperDash from "../../dashboard/WrapperDash";
import style from "../Review.module.css";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import ReviewFilter from "./ReviewFilter";

export default function ReviewsBart({ menu }) {
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;
  const [count, setCount] = useState(2);
  return (
    <WrapperDash>
      {showModal1 && mainModal}
      {showModalnotify && mainModalnotify}
      <div className="flex  flex-col px-3  pb-6 rounded-3xl bg-zinc-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-5 pb-5 w-full max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
          <div className="flex gap-5 my-auto text-4xl font-semibold tracking-tighter ">
            <div className="grow pt-3 my-auto">
              <span className=" text-neutral-700 font-[Bebas-Neue] uppercase ">
                Reviews
              </span>
            </div>
          </div>
          <div className="flex gap-5 pt-3  justify-between">
            <img
              onClick={() =>
                setShowModalnotify((setShowModalnotify) => !setShowModalnotify)
              }
              loading="lazy"
              src="/images/completeProfile/yellowNotify.png"
              className="shrink-0 self-start mt-3.5 z-200 aspect-square w-[42px]"
            />
            <div className="flex shadow-lg items-center rounded-lg px-2 border-black gap-3 ">
              <div>
                {" "}
                <img
                  loading="lazy"
                  src="/images/completeProfile/user1.png"
                  className="shrink-0 self-start mt-2.5 aspect-square w-[42px]"
                />
              </div>
              <button
                onClick={() => setShowModal1((setShowModal1) => !setShowModal1)}
                className="text-5xl items-center relative bottom-4  "
              >
                &#751;
              </button>
            </div>
          </div>
        </div>
        <div className="flex  flex-col px-5 py-12 mt-8 text-sm leading-6 bg-white rounded-3xl shadow-2xl text-neutral-700 max-md:px-5 max-md:max-w-full">
          {/* header */}
          <div className="flex  self-end  max-w-full text-[20px] font-medium text-black w-full max-md:flex-wrap max-md:mr-2.5">
            <div className="flex-auto self-center  ml-[330px] my-auto">
              Your Reviews By Establishment
            </div>
            <img onClick={() => setShowModal((setShowModal) => !setShowModal)}
              loading="lazy"
             src="/images/completeProfile/filter.png"
              className="shrink-0 aspect-[1.06] w-[53px]"
            />
          </div>

          {/* headerComplete */}

          {/* smallComp */}
          <div className="grid grid-cols-2  max-w-full mx-auto xl:grid-cols-3 max-w-full gap-5 mt-8">
            {menu.map((item, index) => {
              return (
                <div
                  style={{
                    boxShadow: "0px 0px 14.764px 0px rgba(0, 0, 0, 0.12)",
                  }}
                  className="flex flex-col grow pt-px pr-2 pb-4 pl-6 w-full bg-white rounded-md shadow-sm max-md:pl-5 max-md:mt-7 max-md:max-w-full"
                >
                  <div className="flex gap-5 items-start px-px w-full">
                    <div className="flex flex-auto gap-3 mt-4">
                      <img
                        loading="lazy"
                        src={item.image}
                        className="shrink-0 aspect-square h-[61px] w-[61px]"
                      />
                      <div className="flex flex-col my-auto">
                        <div
                          className={`text-[18px] text-black} ${style.header}`}
                        >
                          {item.name}
                        </div>
                        <div className="flex  mt-1 text-base">
                          <div className="flex gap-[2px] text-black whitespace-nowrap">
                            <img
                              loading="lazy"
                             src={item.image2}
                              className="shrink-0 aspect-square w-[22px]"
                            />
                            <div className=" text-[15px]">{item.location}</div>
                            <div className=" text-[15px] pl-1 text-zinc-400">
                              {item.distance}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src={item.image3}
                      className="shrink-0 w-[53px] aspect-square"
                    />
                  </div>
                  <div className="shrink-0 mt-1 h-px bg-gray-200 border border-gray-200 border-solid" />
                  <div className="flex gap-3 self-start mt-1.5 text-base leading-6 whitespace-nowrap text-neutral-700">
                    <div className="grow my-auto">{item.rating}</div>
                    <img
                      loading="lazy"
                      src={item.image4}
                      className="shrink-0 max-w-full aspect-[6.25] h-[20px] w-[105px]"
                    />
                  </div>
                  <div className=" text-[14px] mr-3 italic font-medium text-neutral-400">
                    {item.EstaDetail}
                    {index==1 && <button className="justify-center items-center w-full py-4   mt-5 text-[17px] text-center text-black border border-amber-300 border-solid rounded-[117.328px] max-md:px-5">Request Review</button>}
                    {index==4 && <button className="justify-center items-center w-full py-4   mt-5 text-[17px] text-center text-black border border-amber-300 border-solid rounded-[117.328px] max-md:px-5">Request Review</button>}
                    {index==6 && <button className="justify-center items-center w-full py-4   mt-5 text-[17px] text-center text-black border border-amber-300 border-solid rounded-[117.328px] max-md:px-5">Request Review</button>}
                    
                  </div>
                  <div></div>
                </div>
              );
            })}
          </div>
        </div>
   
                      {showModal ? (
                        <>
                          <div className="justify-center items-center absolute ml-[60%] mt-[6%] flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="relative   focus:outline-none">
                                {/*header*/}

                                <div className="flex text-black">
                                  
                                <ReviewFilter>
                                  
                                </ReviewFilter>
                               
                                  <button
                                    className=" relative"
                                    onClick={() => setShowModal(false)}
                                  >
                                    <span className="mr-4 absolute right-1 top-5 text-lg">&#10005;</span>
                                  </button>
                                </div>
                               
                              </div>
                            </div>
                          </div>
                          <div className="opacity-10 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
      </div>
    </WrapperDash>
  );
}
