import { useState } from "react";
import WrapperDash from "../../WrapperDash";
import style from "../../dashboard.module.css";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Notification from "../Notification";

function NewOpportunities(props) {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;
  const item = [1, 2, 3, 4, 5, 6];
  const items = [1, 2, 3, 4];

  return (
    <WrapperDash>
      {showModal && mainModal}
      {showModalnotify && mainModalnotify}
      <div className="flex gap-5 justify-between px-5 pb-5  max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
        <div className="flex gap-5 my-auto text-[30px] font-semibold tracking-tighter text-yellow-400 whitespace-nowrap leading-[58.8px]">
          <div className="grow pt-3 uppercase my-auto">
            <span className=" text-neutral-700">Welcome</span>{" "}
            <span className="text-yellow-400 ">John</span>
          </div>
          <img
            loading="lazy"
            src="/images/completeProfile/hand.png"
            className="shrink-1 aspect-square mt-5 h-[43px] w-[40px]"
          />
        </div>
        <div className="flex gap-5 pt-3 justify-between">
          <img
            onClick={() =>
              setShowModalnotify((setShowModalnotify) => !setShowModalnotify)
            }
            loading="lazy"
            src="/images/completeProfile/yellowNotify.png"
            className="shrink-0 self-start mt-3.5 aspect-square w-[42px]"
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
              onClick={() => setShowModal((setShowModal) => !setShowModal)}
              className="text-5xl items-center relative bottom-4  "
            >
              &#751;
            </button>
          </div>
        </div>
      </div>

      {/* ................ */}
      <div className="flex pt-6 px-2 gap-6 justify-between w-full max-md:max-w-full ">
        <div className="max-md:max-w-full flex-1 ">
          <div className="flex flex-col justify-center rounded-3xl shadow-2xl max-md:max-w-full">
            <div className="overflow-hidden px-9 gap-5  max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-xl:flex-col max-md:gap-0">
                <div className="flex flex-col py-3 max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-3.5 whitespace-nowrap max-md:mt-10">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/baroomUser.png"
                      className="shrink-0 max-w-full h-[80px] w-[70px]"
                    />
                    <div className="flex flex-col flex-1 my-5">
                      <div className="text-[16px] font-medium text-black">
                        John Doe
                      </div>
                      <div className="text-[14px] text-neutral-500">
                        Bartender
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
                  <div className="flex gap-14 justify-between items-center self-stretch my-auto whitespace-nowrap leading-[160%] max-xl:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="shrink-0  self-stretch border border-solid bg-zinc-400 border-zinc-400 h-[90px]" />
                    <div className="flex flex-col flex-1 self-stretch my-auto">
                      <div
                        className={`self-center text-[25px] text-red} ${style.number}`}
                      >
                        15
                      </div>
                      <div className=" text-[16px] text-center tracking-tighter text-black">
                        No. of Gigs
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 self-stretch my-auto">
                      <div
                        className={`self-center text-[25px] text-red} ${style.number}`}
                      >
                        $6000
                      </div>
                      <div className=" text-[16px] text-center tracking-tighter text-black">
                        Earnings
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 self-stretch my-auto">
                      <div
                        className={`self-center text-[25px] text-red} ${style.number}`}
                      >
                        13
                      </div>
                      <div className=" text-[16px] text-center tracking-tighter text-black">
                        Reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl self-center   shadow-2xl mt-5 pt-7 px-4 pb-6 ">
            <div className="flex gap-5 ml-14 max-w-[500px]  py-1 px-1  text-base leading-5 text-center max-lg:rounded-[10px] bg-white border border-gray-200 border-solid rounded-[100px] text-neutral-700 max-2xl:flex-wrap">
              <div className="flex-auto text-sm self-stretch my-auto">
                <Link to={"/CurrentGigs"} className="grow text-sm mt-1">
                  Current Gigs
                </Link>
              </div>
              <div className="flex gap-2 self-stretch px-3 py-2.5 max-lg:ml-10 font-medium text-white whitespace-nowrap bg-red-500 rounded-[100px] max-md:px-5">
                <img
                  loading="lazy"
                  src="/images/completeProfile/cocktail.png"
                  className="shrink-0 w-7 aspect-square"
                />
                <div className=" mt-1 ">New Opportunities</div>
              </div>
              <Link
                to={"/PastGigs"}
                className="flex-auto text-sm self-stretch my-auto"
              >
                Past Gigs
              </Link>
            </div>
            <div className="flex gap-5  justify-between  mt-5 max-lg:flex-wrap max-md:max-w-full">
              <div className="flex-auto my-auto ml-2 text-[18px] text-black">
              New Opportunities
              </div>
              <div className="flex gap-5 justify-between px-5 py-4 mr-1 text-sm h-[50px] w-[280px] whitespace-nowrap bg-white border border-gray-200 border-solid shadow-sm rounded-[100px] text-neutral-400">
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
                    <span className=" flex text-blue-500 absolute top-[80px] left-[95px] bg-gray-100 rounded-[7px] border border-solid border-2 w-[87px] text-[11px] h-[25px] pl-1 ">
                      $20-$30
                      <span className=" text-black text-[9px] pl-[1px] pt-[2px]">
                        / hour
                      </span>
                    </span>

                    <div className="flex gap-2.5 mt-1.5 font-medium">
                      <div className="grow text-xs text-black tracking-tighter whitespace-nowrap">
                        ABG Establishment
                      </div>
                      <div className="flex-auto text-[10px] whitespace-nowrap pr-3  text-orange-400 capitalize">
                        5 days to go
                      </div>
                    </div>
                    <div className="mt-1 text-xs leading-5 whitespace-nowrap text-neutral-400">
                      Charlotte, North Carolina
                    </div>
                    <div className="flex gap-1 mt-1 text-xs text-neutral-700">
                      <img
                        loading="lazy"
                        src="/images/completeProfile/clock.png"
                        className=" w-3 h-3 mt-[2px]"
                      />
                      <div className="flex-auto whitespace-nowrap">
                        Shift Time: 7:00 PM - 11:30 PM <br />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3 px-1 py-1 text-xs text-center whitespace-nowrap">
                      <button className="grow py-2 justify-center w-[50%] text-black border border-amber-300 border-solid rounded-[79.075px]">
                        View Details
                      </button>
                      <Link
                        to={"/Success1"}
                        className="grow py-2 justify-center w-[50%]  text-black bg-amber-300 rounded-[79.075px]"
                      >
                        Apply
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* .... */}
        <div className=" max-md:flex-wrap flex-2 ">
          <div className="bg-white rounded-3xl shadow-2xl  max-w-[355px] ">
            <div className=" p-4">
              <div className="flex gap-5 justify-between  pt-2 pr-3.5 max-xl:flex-wrap max-md:max-w-full">
                <div
                  className={`flex-auto text-[18px] text-black} ${style.header}`}
                >
                  Available Now
                </div>
                <div className="flex flex-col justify-center py-1 pr-1.5 pl-8 bg-red-500 rounded-[56.25px] max-md:pl-5">
                  <div className="shrink-0 bg-white rounded-full h-[23px] w-[23px]" />
                </div>
              </div>
              <div className="mt-4 text-sm text-neutral-400 tracking-tighter max-xl:flex-wrap max-md:max-w-full">
                Establishments will see your expected hourly rate, but their
                posting may offer a higher/lower offer for a gig, you choose
                whether to accept or not at time of posting.
              </div>
              <div className="mt-8  ">
                {items.map(() => {
                  return (
                    <div className="flex flex-col px-2 pt-1.5 pb-3 mt-3  rounded-xl border-l-4 border-red-500 border-solid shadow-sm max-md:mr-2.5 max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-2.5">
                        <img
                          loading="lazy"
                          src="/images/completeProfile/Small_bar1.png"
                          className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                        />
                        <div className="flex flex-col grow shrink-0 basis-0 ">
                          <div className="flex gap-5 justify-between max-xl:flex-wrap">
                            <div className="flex-auto  text-[15px] tracking-tighter text-nowrap font-medium text-black">
                              ABG Establishment
                            </div>
                            <div className="justify-center px-2 pr-1 text-[11px] whitespace-nowrap bg-white rounded border border-solid border-zinc-100 text-neutral-500">
                              12 Applicants
                            </div>
                          </div>
                          <div className="text-[11px] text-neutral-400">
                            Charlotte, North Carolina
                          </div>
                          <div className="flex gap-1 mt-1 text-xs text-neutral-700">
                            <img
                              loading="lazy"
                              src="/images/completeProfile/clock.png"
                              className=" w-[13px] h-[13px] mt-[2px]"
                            />
                            <div className="flex-auto my-auto text-[11px]">
                              Shift Time: 7:00 PM - 11:30 PM <br />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-2">
                        <div className="grow my-auto text-[15px] text-blue-500">
                          <span className="font-medium">$20-$30 </span>
                          <span className="text-xs font-medium text-neutral-400">
                            / Hour
                          </span>
                        </div>
                        <Link
                          to={"/dash_success"}
                          className="grow justify-center py-2.5 w-[150px] text-[13px] text-center text-black bg-amber-300 rounded-[92.207px] "
                        >
                          Apply
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperDash>
  );
}
export default NewOpportunities;

{
  /* <div className="flex w-[100%] mt-8 gap-4  ml-1">
  <div className=" relative flex w-[100%]  pl-1 flex-col grow  pt-1.5 pb-1 rounded-xl  border border-solid bg-zinc-50 border-neutral-200 max-md:mt-5">
    <img
      loading="lazy"
      src="/images/completeProfile/bar_Img1.png"
      className=" w-full shadow-lg aspect-[2]"
    />
    <span className=" flex text-blue-500 absolute top-[80px] left-[95px] bg-gray-100 rounded-[7px] border border-solid border-2 w-[87px] text-[11px] h-[25px] pl-1 ">
      $20-$30
      <span className=" text-black text-[9px] pl-[1px] pt-[2px]">/ hour</span>
    </span>

    <div className="flex gap-2.5 mt-1.5 font-medium">
      <div className="grow text-xs text-black tracking-tighter whitespace-nowrap">
        ABG Establishment
      </div>
      <div className="flex-auto text-[10px] whitespace-nowrap pr-3  text-orange-400 capitalize">
        5 days to go
      </div>
    </div>
    <div className="mt-1 text-xs leading-5 whitespace-nowrap text-neutral-400">
      Charlotte, North Carolina
    </div>
    <div className="flex gap-1 mt-1 text-xs text-neutral-700">
      <img
        loading="lazy"
        src="/images/completeProfile/clock.png"
        className=" w-3 h-3 mt-[2px]"
      />
      <div className="flex-auto whitespace-nowrap">
        Shift Time: 7:00 PM - 11:30 PM <br />
      </div>
    </div>
    <div className="flex gap-2 mt-3 px-1 py-1 text-xs text-center whitespace-nowrap">
      <button className="grow py-2 justify-center w-[50%] text-black border border-amber-300 border-solid rounded-[79.075px]">
        View Details
      </button>
      <Link
        to={"/Success1"}
        className="grow py-2 justify-center w-[50%]  text-black bg-amber-300 rounded-[79.075px]"
      >
        Apply
      </Link>
    </div>
  </div>
</div>; */
}
