import React, { useState } from "react";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import WrapperDash from "../../dashboard/WrapperDash";
import style from "../Earning.module.css";
import { Link } from "react-router-dom";

export default function ReceivedPayment({ menu }) {
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
              Earnings & Payment
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
          <div className="flex gap-5 self-center px-1 py-1  text-[15px] leading-5 bg-white border border-gray-200 border-solid rounded-[100px] max-md:ml-2.5">
            <div className="justify-center px-5 py-4 font-medium text-center text-white bg-red-500 rounded-[100px] max-md:px-5">
              Received Payment
            </div>
            <Link
              to={"/PendingPayment"}
              className="flex-auto my-auto px-4 text-neutral-700"
            >
              Pending Payment
            </Link>
          </div>
          <div className="flex justify-between text-center">
            <div className="flex z-10  self-start">
              <div className="relative">
                <img
                  loading="lazy"
                  src="/images/coins.png"
                  className="shrink-0 max-w-full aspect-square mt-6 w-[103px]"
                />
                <span className="absolute right-0 top-5 text-lg ">
                  &#10022;
                </span>
                <span className="absolute right-0 top-[60px] text-lg">
                  &#10022;
                </span>
                <span className="absolute left-2 top-8 text-lg  ">
                  &#10022;
                </span>
              </div>
              <div className="flex flex-col self-start ml-4 mt-9">
                <div className="text-[13px] text-neutral-400">
                  Total Upcoming Payments
                </div>
                <div className="mt-2 text-[31px] font-medium text-black">
                  $6780
                </div>
              </div>
            </div>
            <div className="flex gap-2 self-end px-5 py-3.5 mb-7 max-w-full text-sm bg-white border border-gray-200 border-solid shadow-sm rounded-[100px] text-neutral-400 w-[300px] max-md:px-5 max-md:mt-10">
              <input
                className="flex-auto my-auto outline-none border-none"
                type="text"
                placeholder="Search establishments"
              />

              <img
                loading="lazy"
                src="/images/search.png"
                className=" h-[16px] w-[16px]"
              />
            </div>
          </div>
          {/* headerComplete */}

          {/* smallComp */}
          <div className="grid grid-cols-2  max-w-full mx-auto xl:grid-cols-3 max-w-full gap-5 mt-5 ">
            {menu.map((item) => {
              return (
                <div
                  style={{
                    boxShadow: "0px 0px 14.764px 0px rgba(0, 0, 0, 0.12)",
                  }}
                  className="flex  flex-col grow p-4 w-full bg-white rounded-md  max-md:px-5 max-md:mt-8 max-md:max-w-full"
                >
                  <div className="flex  justify-between w-full">
                    <div className="flex gap-3">
                      <img
                        loading="lazy"
                        src={item.image}
                        className="shrink-0 aspect-square h-[59px] w-[59px]"
                      />
                      <div className="flex flex-col my-auto">
                        <div
                          className={`text-[18px]  text-black} ${style.header}`}
                        >
                          {item.name}
                        </div>
                        <div className="flex gap-[2px] items-center  text-[14px]">
                          <img
                            loading="lazy"
                            src={item.image2}
                            className="shrink-0 self-stretch aspect-square w-[21px]"
                          />
                          <div className="self-stretch my-auto text-black">
                            {item.location}
                          </div>
                          <div className="self-stretch pl-[2px] my-auto text-zinc-400">
                            {item.distance}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-auto text-[30px] font-medium text-red-500">
                      {item.BarPrice}
                    </div>
                  </div>
                  <div className="shrink-0 mt-1.5 h-0.5 bg-gray-200 border border-gray-200 border-solid" />
                  <div className="mt-1.5 text-[14px] text-neutral-400">
                    {item.PaymentDetail}
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
