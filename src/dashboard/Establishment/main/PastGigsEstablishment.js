import React, { useState } from "react";
import WrapperDashEst from "../../../authWrapper/WrapperDashEst";
import style from "../../dashboard.module.css";
import DropdownEst from "../DropdownEst";
import NotificationEst from "../NotificationEst";
import { Link } from "react-router-dom";
import FilterEst from "../FilterEst";

function PastGigsEstablishment(props) {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <DropdownEst></DropdownEst>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <NotificationEst></NotificationEst>;
  const [showModalFilter, setShowModalFilter] = React.useState(false);
  const [showModalInvoice, setShowModalInvoice] = React.useState(false);

  const item = [1, 2, 3];
  const items = [1, 2, 3, 4];

  return (
    <WrapperDashEst>
      {showModal && mainModal}
      {showModalnotify && mainModalnotify}

      <div className="flex gap-5 justify-between px-5 pb-5 mt-3 w-full max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
        <div className="flex gap-5 my-auto  text-[30px] font-semibold tracking-wider text-red-500 leading-[50px]">
          <div className="grow my-auto uppercase tracking-tight ">
            <span className=" text-neutral-700  font-[Bebas-Neue]">
              WELCOME
            </span>
            <span className="text-red-500  font-[Bebas-Neue]"> JOHN</span>
          </div>
          <img
            loading="lazy"
            src="/images/completeProfile/hand.png"
            className="shrink-0 aspect-square mt-1  h-[41px] w-[41px]"
          />
        </div>
        <div className="flex gap-5  justify-between text-lg text-white max-md:flex-wrap">
          <div className="flex flex-col flex-1  mt-2  justify-center px-3 bg-red-500 rounded-[113.703px] max-md:px-5">
            <div className="flex gap-2.5 ">
              <img
                loading="lazy"
                src="/images/completeProfile/plus.png"
                className=" w-5 "
              />
              <Link to={"/Jp1"} className=" text-sm">
                Create New Job Post
              </Link>
            </div>
          </div>
          <div className="flex gap-5 justify-between">
            <img
              onClick={() =>
                setShowModalnotify((setShowModalnotify) => !setShowModalnotify)
              }
              loading="lazy"
              src="/images/completeProfile/yellowNotify.png"
              className="shrink-0 self-start mt-2.5 aspect-square w-[42px]"
            />
            <div className="flex shadow-lg items-center rounded-lg px-2 border-black gap-3 ">
              <div>
                {" "}
                <img
                  loading="lazy"
                  src="/images/completeProfile/user1.png"
                  className="shrink-0 self-start mt-2.5 my-1 aspect-square w-[42px]"
                />
              </div>
              <button
                onClick={() => setShowModal((setShowModal) => !setShowModal)}
                className="text-5xl items-center relative bottom-4 text-black "
              >
                &#751;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ................ */}
      <div className="flex pt-6 px-2 gap-6 justify-between w-full max-md:max-w-full ">
        <div className="max-md:max-w-full flex-1 ">
          <div className="bg-white rounded-3xl  shadow-2xl  pt-7 px-4 max-w-[982px] pb-6 h-fit">
            <div className="flex gap-5 ml-14 max-w-[500px]  py-1 px-1  text-base leading-5 text-center max-lg:rounded-[10px] bg-white border border-gray-200 border-solid rounded-[100px] text-neutral-700 max-2xl:flex-wrap">
              <Link
                to={"/CurrentGigsEstablishment"}
                className="grow text-sm mt-3"
              >
                Current Gigs
              </Link>

              <Link
                to={"/PendingAcceptance"}
                className="flex-auto text-sm self-stretch my-auto"
              >
                Pending Acceptance
              </Link>
              <div className="flex gap-2 self-stretch px-5 py-2.5  font-medium text-white whitespace-nowrap bg-red-500 rounded-[100px] max-md:px-5">
                <img
                  loading="lazy"
                  src="/images/completeProfile/cocktail.png"
                  className="shrink-0 w-7 aspect-square"
                />
                <div className="flex-auto text-sm self-stretch my-auto">
                  Past Gigs
                </div>
              </div>
            </div>
            <div className="flex gap-4  justify-between  my-8 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto my-auto ml-3 tracking-tight text-lg text-black">
                Pending Acceptance
              </div>
              <div className="flex gap-2 justify-between px-5 py-4  text-sm h-[50px] bg-white border border-gray-200 border-solid shadow-sm rounded-[100px] text-neutral-400">
                <div className="my-auto">
                  <input
                    className="border-none outline-none"
                    type="text"
                    placeholder="Search"
                  ></input>
                </div>
                <img
                  loading="lazy"
                  src="/images/completeProfile/search.png"
                  className="shrink-0 aspect-[1.05] w-[20px]"
                />
              </div>
              <img
                onClick={() => setShowModalFilter(true)}
                loading="lazy"
                src="/images/completeProfile/filter.png"
                className="mt-1 h-[40px] w-[40px]"
              />
            </div>
            {/* ... */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-8 ">
              {item.map(() => {
                return (
                  <div className=" relative flex max-w-[200px]  pl-1 flex-col grow  pt-1.5 pb-1 rounded-xl  border border-solid bg-zinc-50 border-neutral-200 max-md:mt-5">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/bar_Img1.png"
                      className=" w-full shadow-lg aspect-[2]"
                    />
                    <span className=" flex text-blue-500 absolute top-[37%] left-[52%]  pl-1 ">
                      <img
                        loading="lazy"
                        src="/images/completeProfile/Mask3.png"
                        className=" shadow-lg rounded-full h-[45px] w-[50px]  aspect-[2]"
                      />
                    </span>
                    <span className=" flex text-blue-500 absolute top-[37%] left-[60%]  pl-1 ">
                      <img
                        loading="lazy"
                        src="/images/completeProfile/Mask2.png"
                        className=" shadow-lg rounded-full h-[45px] w-[50px]  aspect-[2]"
                      />
                    </span>
                    <span className=" flex text-blue-500 absolute top-[37%] left-[68%]  pl-1 ">
                      <img
                        loading="lazy"
                        src="/images/completeProfile/Mask1.png"
                        className=" shadow-lg rounded-full h-[45px] w-[50px]  aspect-[2]"
                      />
                    </span>
                    <div className="flex gap-2.5 mt-2.5 font-medium">
                      <div className="grow text-xs text-black tracking-tighter whitespace-nowrap">
                        ABG Establishment
                      </div>
                    </div>
                    <div className="mt-[1px] text-xs leading-5 whitespace-nowrap text-neutral-400">
                      Charlotte, North Carolina
                    </div>
                    <div className="flex gap-1 mt-1 text-xs text-neutral-700">
                      <img
                        loading="lazy"
                        src="/images/completeProfile/clock.png"
                        className=" w-3 h-3 mt-[2px]"
                      />
                      <div className="flex-auto tracking-tigter text-[11px] whitespace-nowrap">
                        Shift Time: 7:00 PM - 11:30 PM | <br /> Pay: $20/hr
                      </div>
                    </div>
                    <div
                      onClick={() => setShowModalInvoice(true)}
                      className="text-[12px] mt-1 ml-1 underline cursor-pointer font-semibold"
                    >
                      View Invoice
                    </div>
                  </div>
                );
              })}
              <div className=" relative flex max-w-[200px]  pl-1 flex-col grow  pt-1.5 pb-1 rounded-xl  border border-solid bg-zinc-50 border-neutral-200 max-md:mt-5">
                <img
                  loading="lazy"
                  src="/images/completeProfile/bar_Img1.png"
                  className=" w-full shadow-lg aspect-[2]"
                />
                <span className=" flex text-blue-500 absolute top-[37%] left-[52%]  pl-1 ">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/Mask3.png"
                    className=" shadow-lg rounded-full h-[45px] w-[50px]  aspect-[2]"
                  />
                </span>
                <span className=" flex text-blue-500 absolute top-[37%] left-[60%]  pl-1 ">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/Mask2.png"
                    className=" shadow-lg rounded-full h-[45px] w-[50px]  aspect-[2]"
                  />
                </span>
                <span className=" flex text-blue-500 absolute top-[37%] left-[68%]  pl-1 ">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/Mask1.png"
                    className=" shadow-lg rounded-full h-[45px] w-[50px]  aspect-[2]"
                  />
                </span>
                <div className="flex gap-2.5 mt-2.5 font-medium">
                  <div className="grow text-xs text-black tracking-tighter whitespace-nowrap">
                    ABG Establishment
                  </div>
                </div>
                <div className="mt-[1px] text-xs leading-5 whitespace-nowrap text-neutral-400">
                  Charlotte, North Carolina
                </div>
                <div className="flex gap-1 mt-1 text-xs text-neutral-700">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/clock.png"
                    className=" w-3 h-3 mt-[2px]"
                  />
                  <div className="flex-auto tracking-tigter text-[11px] whitespace-nowrap">
                    Shift Time: 7:00 PM - 11:30 PM | <br /> Pay: $20/hr
                  </div>
                </div>
                <div className="flex gap-1">
                  <div>
                    <img
                      loading="lazy"
                      src="/images/completeProfile/red-earn.png"
                      className=" w-3 h-3 mt-[2px]"
                    />
                  </div>
                  <div className="text-red-500 text-[11px]">
                    Payment: $500 !not processed
                  </div>
                </div>
              </div>
            </div>
            {/* .............. */}
          </div>
        </div>
        {/* .... */}
        <div className=" max-md:flex-wrap flex-2">
          <div className="bg-white rounded-3xl shadow-2xl min-h-full ">
            <div className=" p-4  ">
              <div className={`text-[18px] text-black} ${style.header}`}>
                <span className={`text-red-500 font-semibold} ${style.header}`}>
                  12 Bartenders &nbsp;
                </span>
                that are available today
              </div>
              <div className="mt-10">
                {items.map(() => {
                  return (
                    <div
                      style={{
                        boxShadow: "0px 0px 21.461px 0px rgba(0, 0, 0, 0.10)",
                      }}
                      className="flex flex-col px-2 pt-1.5 pb-3 mt-2  rounded-xl border-l-4 border-red-500 border-solid max-md:mr-2.5 max-md:max-w-full"
                    >
                      <div className="flex gap-2.5">
                        <Link to={"/Profile"}>
                          <img
                            loading="lazy"
                            src="/images/completeProfile/user1.png"
                            className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                          />
                        </Link>
                        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                          <div className="flex gap-5 justify-between px-px">
                            <div className="flex-auto  text-sm tracking-tighter font-medium text-black">
                              John Doe
                            </div>
                            <div className="justify-center whitespace-nowrap text-neutral-500">
                              <img
                                loading="lazy"
                                src="/images/completeProfile/yellowChat.png"
                                className="shrink-0 self-start  aspect-square"
                              />
                            </div>
                          </div>
                          <div className="text-[12px] text-neutral-400">
                            Available time: 7:00 PM - 11:30 PM
                          </div>
                          <div className="flex-auto my-auto text-[11px]">
                            Zip Code: 1098 <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <>
        {showModalFilter ? (
          <>
            <div className="justify-center items-center bottom-20 left-20 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="flex flex-col justify-center p-4 text-base border-gray-300 border-4 text-black bg-white rounded-3xl border border-solid border-neutral-300 max-w-[300px]">
                <div className="flex flex-col items-start w-full bg-white rounded-xl">
                  <button
                    onClick={() => setShowModalFilter(false)}
                    className="self-end"
                  >
                    &#10005;
                  </button>
                  <div className="text-lg font-medium text-red-500">
                    Earnings
                  </div>
                  <div className="flex gap-3 mt-4 ml-3 whitespace-nowrap">
                    <div className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" />
                    <div className="my-auto">All</div>
                  </div>
                  <div className="flex gap-3 mt-2 ml-3">
                    <div className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" />
                    <div className="flex-auto my-auto">Earnings Processed</div>
                  </div>
                  <div className="flex gap-3 mt-2 ml-3">
                    <div className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" />
                    <div className="flex-auto my-auto">
                      Earnings Not Processed
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start  mt-5 w-full bg-white rounded-xl">
                  <div className="text-lg font-medium text-red-500">
                    Reviews
                  </div>
                  <div className="flex gap-3 mt-4 ml-3 whitespace-nowrap">
                    <div className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" />
                    <div className="my-auto">All</div>
                  </div>
                  <div className="flex gap-3 mt-2 ml-3">
                    <div className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" />
                    <div className="flex-auto my-auto">Rated Bartender</div>
                  </div>
                  <div className="flex gap-3 mt-2 ml-3">
                    <div className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" />
                    <div className="flex-auto my-auto">Not Rated Bartender</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      <>
        {showModalInvoice ? (
          <>
            <div className="justify-center items-center my-10 left-20 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="flex  flex-col px-6  mt-[100px] py-2 bg-white border-4 border-yellow-400 border-solid  max-w-[400px]  rounded-[43.208px] max-md:px-5">
                
                  <div  className="cursor-pointer text-[20px]  self-end"  onClick={() => setShowModalInvoice(false)}>&#10005;</div>
                  <div className={`self-center text-[20px] text-center } ${style.header}`}>
                    Invoice
                  </div>
               
                <div className="self-center mt-1 text-[15px] leading-6 text-center text-neutral-600 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Nisl nulla ultrices
                  vestibulum.
                </div>
                <div className="flex justify-center items-center px-10 py-2 mt-5 text-center rounded-xl bg-amber-300 bg-opacity-10 max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col">
                    <div className="text-2xl font-medium leading-6 text-neutral-800">
                      $2,600.00
                    </div>
                    <div className="mt-1 text-[15px] leading-6 text-yellow-400">
                      Payment Success
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between self-center mt-4 w-full max-w-[664px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="my-auto text-lg text-black">From:</div>
                  <div className="flex flex-col text-base leading-6 text-right text-neutral-600">
                    <div>John Doe</div>
                    <div>VISA 0987</div>
                  </div>
                </div>
                <input
                  className=" outline-none border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400"
                  type="text"
                ></input>
                <div />
                <div className="flex gap-5 justify-between self-center mt-4 w-full max-w-[664px] max-md:flex-wrap max-md:max-w-full">
                  <div className="my-auto text-lg text-black">To:</div>
                  <div className="flex flex-col text-base leading-6 text-right text-neutral-600">
                    <div>John Doe</div>
                    <div>VISA 0987</div>
                  </div>
                </div>
                <input
                  className=" outline-none border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400"
                  type="text"
                ></input>
                <div className="flex gap-5 self-center mt-6 w-full max-w-[656px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="text-lg mb-2 text-black">Date:</div>
                  <div className="flex-auto text-base leading-6 text-right text-neutral-600">
                    Jan 26, 2023
                  </div>
                </div>
                <input
                  className=" outline-none border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400"
                  type="date"
                ></input>
                <button className="justify-center px-6 py-3 my-2 mt-10 text-base text-center text-white bg-red-500 rounded-[117.179px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  Download Invoice
                </button>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </WrapperDashEst>
  );
}
export default PastGigsEstablishment;
