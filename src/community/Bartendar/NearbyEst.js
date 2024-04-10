import React, { useState } from "react";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import WrapperDash from "../../dashboard/WrapperDash";
import style from "../community.module.css";
import { Link } from "react-router-dom";
import Modal1 from "./Modal1";
import Modal1API from "./Modal1API";

export default function NearbyEst({ menu2 }) {
  const [showModalAPI, setwModalAPI] = useState(Modal1API);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = React.useState(false);
  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;
  // console.log(Modal1API);
  return (
    <WrapperDash>
      {showModal1 && mainModal}
      {showModalnotify && mainModalnotify}
      <div className="flex  flex-col px-3  pb-6 rounded-3xl bg-zinc-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-5 pb-5 w-full max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
          <div className="flex gap-5 my-auto text-4xl font-semibold tracking-tighter ">
            <div className="grow pt-3 my-auto">
              <span className=" text-neutral-700 font-[Bebas-Neue] uppercase ">
                Community{" "}
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
        <div className="flex flex-col px-5 py-12 mt-8 text-sm leading-6 bg-white rounded-3xl shadow-2xl text-neutral-700 max-md:px-5 max-md:max-w-full">
          {/* header */}
          <div className="flex flex-col self-center max-w-full w-[690px]">
            <div className="flex gap-3 items-center py-1 px-1 text-sm leading-5 bg-white border border-gray-200 border-solid rounded-[100px] text-neutral-700 max-md:flex-wrap">
              <Link
                to={"/Myfrnd"}
                className="justify-center self-stretch px-5 py-3   max-md:pl-5"
              >
                My Friends (10)
              </Link>
              <Link
                to={"/InvitationRecived"}
                className="flex-auto self-stretch my-auto text-center"
              >
                Invitations (2)
              </Link>
              <Link
                to={"/NearbyBart"}
                className="flex-auto self-stretch my-auto text-center"
              >
                Nearby Bartenders (10)
              </Link>
              <div className="flex-auto self-stretch text-center px-5 py-3 font-medium text-white bg-red-500 rounded-[100px] my-auto">
                Nearby Establishments (10)
              </div>
            </div>
            <div className="flex gap-5 justify-between self-center px-5 py-3 mt-5 max-w-full text-sm whitespace-nowrap bg-white border border-gray-200 border-solid shadow-sm rounded-[100px] text-neutral-400 w-[300px]">
              <input
                className="my-auto outline-none border-none"
                type="text"
                placeholder="Search"
              />
              <img
                loading="lazy"
                src="/images/completeProfile/search.png"
                className="shrink-0 aspect-[1.05] w-[21px]"
              />
            </div>
          </div>
          {/* headerComplete */}

          {/* smallComp */}
          <div className="  grid grid-cols-3 gap-3 mt-10 ">
            {menu2.map((item) => {
              return (
                <div className="flex flex-col grow px-5 py-5  w-full bg-white border-2 shadow-xl rounded-md shadow-sm max-md:px-5 max-md:mt-6 max-md:max-w-full">
                  <div className="flex gap-3">
                    <img
                      loading="lazy"
                      src={item.image}
                      className="shrink-0 aspect-[0.98] h-[62px] w-[62px]"
                    />
                    <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit">
                      <div className={`text-base text-black} ${style.header}`}>
                        {item.name}
                      </div>
                      <div className="flex gap-2.5 mt-1 text-base">
                        <div className="flex gap-1.5 text-black whitespace-nowrap">
                          <img
                            loading="lazy"
                            src={item.image2}
                            className="shrink-0 aspect-square w-[22px]"
                          />
                          <div className="my-auto text-sm">{item.location}</div>
                        </div>
                        <div className="flex-auto my-auto text-zinc-400 text-sm">
                          {item.distance}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 mt-1 h-0.5 bg-gray-200 border border-gray-200 border-solid" />
                  <div className="flex gap-3 items-center mt-2 text-base whitespace-nowrap max-md:pr-5">
                    <div className="flex gap-1.5 items-center self-stretch my-auto text-neutral-400">
                      <div className="self-stretch my-auto text-sm">
                        {item.user}
                      </div>
                      <img
                        loading="lazy"
                        src={item.image3}
                        className="shrink-0 self-stretch aspect-square w-[18px]"
                      />
                      <div className="self-stretch my-auto font-medium text-black text-sm ">
                        {item.BartendarQuantity}
                      </div>
                      <div className="self-stretch my-auto text-sm mr-3">
                        {item.user1}
                      </div>
                    </div>
                    <div className="flex gap-1.5 items-center self-stretch my-auto">
                      <div className="shrink-0 self-stretch bg-zinc-300  h-[25px] w-[3px]" />
                      <img
                        loading="lazy"
                        src={item.image4}
                        className="shrink-0 self-stretch aspect-square h-[18px] mt-[3px] w-[18px]"
                      />
                      <div className="self-stretch my-auto font-medium text-black text-sm">
                        {item.starQuantity}
                      </div>
                      <div className="self-stretch my-auto text-neutral-400 text-sm">
                        {item.user2}
                      </div>
                    </div>
                  </div>
                  <div className="flex x gap-5 mt-5 mb-auto relative text-sm text-black max-md:pr-5">
                    <div className="my-auto text-sm ">{item.user3}</div>
                    <div className="flex  ">
                      <img
                        loading="lazy"
                        src={item.image5}
                        className="shrink-0 max-w-full absolute right-[80px] top-[-6px]  w-[40px] w-[40px]"
                      />
                      <img
                        loading="lazy"
                        src={item.image6}
                        className="shrink-0 max-w-full absolute right-[60px] top-[-6px] w-[40px] w-[40px]"
                      />
                      <img
                        loading="lazy"
                        src={item.image7}
                        className="shrink-0 max-w-full absolute right-[40px] top-[-6px] w-[40px] w-[40px]"
                      />

                      <button
                        className="absolute border-2 bg-red-500 py-2 px-1 text-white h-[42px] w-[42px] rounded-3xl right-[20px] top-[-6px]"
                        type="button"
                        onClick={() => setShowModal(true)}
                      >
                        +20
                      </button>
                      {showModal ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}

                                <div className="flex pl-20 items-start self-end px-px max-w-full text-2xl mb-4 leading-10 text-black w-[367px]">
                                  <div
                                    className={`flex-auto self-end mt-6 mt-[40px]} ${style.header}`}
                                  >
                                    Previously Worked
                                  </div>
                                  <button
                                    className=" relative"
                                    onClick={() => setShowModal(false)}
                                  >
                                    <span className="mr-4">&#10005;</span>
                                  </button>
                                </div>
                                <Modal1 items={showModalAPI}></Modal1>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-10 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </WrapperDash>
  );
}
