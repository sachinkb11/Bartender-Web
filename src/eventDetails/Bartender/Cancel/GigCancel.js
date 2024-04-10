import React, { useState } from "react";
import WrapperDash from "../../../dashboard/WrapperDash";
import style from "../../eventDeatail.module.css";
import { Link } from "react-router-dom";
import PopConfirmation from "./PopConfirmation";
import Dropdown from "../../../dashboard/Bartender/Dropdown";
import Notification from "../../../dashboard/Bartender/Notification";

function GigCancel() {
  const [showModaldrop, setShowModaldrop] = useState(false);
  const mainModaldrop = <Dropdown></Dropdown>;

  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;

  const [showModal, setShowModal] = useState(false);
  const mainModal = <PopConfirmation></PopConfirmation>;

  return (
    <WrapperDash>
        {showModal && mainModal}
      {showModaldrop && mainModaldrop}

      {showModalnotify && mainModalnotify}

      <div className="flex gap-5 justify-end px-5 pb-5 max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
        <div className="flex-auto my-auto text-5xl font-[Bebas-Neue] uppercase tracking-tighter text-neutral-900">
          Gig details
        </div>
        <div className="flex gap-5 pt-3 justify-between">
          <img
            onClick={() =>
              setShowModalnotify((setShowModalnotify) => !setShowModalnotify)
            }
            loading="lazy"
            src="/images/completeProfile/yellowNotify.png"
            className="shrink-0 self-start mt-4 aspect-square w-[42px]"
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
              onClick={() => setShowModaldrop((setShowModaldrop) => !setShowModaldrop)}
              className="text-5xl items-center relative bottom-4  "
            >
              &#751;
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-7 max-lg:flex-col">
        {/* first */}
        <div className=" relative flex flex-col grow items-start pt-5 pr-7 pb-20 pl-4 w-full bg-white rounded-3xl shadow-2xl max-md:pr-5 max-md:mt-6 max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col gap-5 self-stretch px-5 py-5 w-full min-h-[240px] max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="/images/completeProfile/Background-image.png"
              className=" rounded-xl absolute inset-0 size-full"
            />
            <div className="relative flex-auto max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/Bar-full.png"
                    className="shrink-0 max-w-full  border-2 border-white border-solid aspect-square w-[178px] max-md:mt-8"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl font-semibold tracking-tight leading-6 text-yellow-400 max-md:max-w-full">
                      ABG Establishment
                    </div>
                    <div className="mt-4 text-sm leading-5  text-white max-md:max-w-full">
                      10130 Perimeter Parkway Suite, Charloette, North Carolina,
                      1087
                    </div>
                    <div className="flex gap-5 mt-4 w-full text-xs max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-1.5 items-start self-start">
                        <img
                          loading="lazy"
                          src="/images/completeProfile/yellow-timer.png"
                          className="shrink-0 aspect-square w-[15px]"
                        />
                        <div className="flex flex-col">
                          <div className="text-white text-opacity-80">
                            Shift Time
                          </div>
                          <div className="mt-1 font-medium text-white">
                            7:00 PM - 11:30 PM
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-auto gap-5 justify-between">
                        <div className="flex gap-1.5 items-start self-start">
                          <img
                            loading="lazy"
                            src="/images/completeProfile/yellow-timer.png"
                            className="shrink-0 aspect-square w-[15px]"
                          />
                          <div className="flex flex-col">
                            <div className="text-white text-opacity-80">
                              Distance
                            </div>
                            <div className="mt-1 font-medium text-white">
                              1.7miles
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex gap-1.5 whitespace-nowrap text-white text-opacity-80">
                            <img
                              loading="lazy"
                              src="/images/completeProfile/yellow-user.png"
                              className="shrink-0 aspect-square w-[17px]"
                            />
                            <div className="flex-auto my-auto">
                              Accommodates
                            </div>
                          </div>
                          <div className="self-center mt-1.5 font-medium text-white">
                            100 - 200
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  flex-col">
              <button className=" absolute top-3 right-3 bg-white flex w-fit px-3 py-2  rounded-[110px] h-fit ">
                <img
                  loading="lazy"
                  src="/images/completeProfile/Vector.png"
                  className=" aspect-square w-[20px] h-[20px]   max-md:mt-10 max-md:ml-2.5"
                />

                <div className="pl-1 font-semibold"> 4.7</div>
              </button>
              <div className=" absolute bottom-4 right-4">
                <img
                  loading="lazy"
                  src="/images/completeProfile/white-chat.png"
                  className="  ml-5 aspect-square w-[50px] max-md:mt-10 max-md:ml-2.5"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between self-center px-2 py-1 mt-3.5 max-w-full text-sm leading-5 bg-white border border-gray-200 border-solid rounded-[100px] w-[550px] max-md:flex-wrap">
            <div className="flex gap-5">
              <div className="flex gap-2.5 px-6 py-3.5 font-medium text-white bg-red-500 rounded-[100px] max-md:px-5">
                <img
                  loading="lazy"
                  src="/images/completeProfile/cocktail.png"
                  className="shrink-0 w-6 aspect-square"
                />
                <button>About The Gig</button>
              </div>

              <Link
                className="flex-auto pl-5 my-auto text-neutral-700"
                to="/EstaCancel"
              >
                About Establishment
              </Link>
            </div>
            <Link
              className="my-auto text-center pr-10 text-neutral-700"
              to="/BenefitCancel"
            >
              {" "}
              Benefits
            </Link>
          </div>
          <div className=" flex flex-col mt-10 ml-7 text-sm text-neutral-400 max-md:ml-2.5">
            Job Title
            <span className="mt-1  text-sm text-neutral-800 max-md:ml-2.5">
              Lorem Ipsum
            </span>
          </div>
          <div className=" flex flex-col mt-6 ml-7 text-sm text-neutral-400 max-md:ml-2.5">
            About the Gig
            <span className="mt-1  text-sm text-neutral-800 max-md:ml-2.5">
              Lorem ipsum dolor sit amet consectetur. Gravida vehicula varius
              ornare ac nec velit gravida at. Lorem ipsum dolor sit amet
              consectetur. Gravida vehicula varius ornare ac nec velit gravida
              at.
            </span>
          </div>
          <div className=" flex flex-col mt-6 ml-7 text-sm text-neutral-400 max-md:ml-2.5">
            Shift Time
            <span className="mt-1  text-sm text-neutral-800 max-md:ml-2.5">
              7:00 PM - 11:30 PM{" "}
            </span>
          </div>
          <div className=" flex flex-col mt-6 ml-7 text-sm text-neutral-400 max-md:ml-2.5">
            Years of experience
            <span className="mt-1  text-sm text-neutral-800 max-md:ml-2.5">
              2-3 years{" "}
            </span>
          </div>
          <div className=" flex flex-col mt-6 ml-7 text-sm text-neutral-400 max-md:ml-2.5">
            Pay
            <span className="mt-1  text-sm text-neutral-800 max-md:ml-2.5">
              $20/hour{" "}
            </span>
          </div>
          <div className=" flex flex-col mt-6 ml-7 text-sm text-neutral-400 max-md:ml-2.5">
            Skills Required
            <span className="mt-1  text-sm text-neutral-800 max-md:ml-2.5">
              Lorem Ipsum{" "}
            </span>
          </div>
          <div className=" flex flex-col mt-6 ml-7 text-sm text-neutral-400 max-md:ml-2.5">
            Duties & Responsibilities{" "}
            <span className="mt-1  text-sm text-neutral-800 max-md:ml-2.5">
              <ul className="list-disc ml-7">
                <li>Lorem ipsum dolor sit amet consectetur. Gravida </li>
                <li>Lorem ipsum dolor sit amet consectetur. Gravida </li>
                <li>Lorem ipsum dolor sit amet consectetur. Gravida </li>
              </ul>
            </span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="justify-center self-center px-5 py-5 mt-10 w-[70%] text-sm text-center text-black bg-amber-300 rounded-[92.207px] max-md:max-w-full"
          >
            Cancel Booking
          </button>
        </div>
        {/* second */}
        <div className="ml-4">
          <div className="bg-white rounded-3xl shadow-2xl w-[350px] min-h-full ">
            <div className=" p-4  ">
              <div className="flex gap-5 justify-between  pt-2 pr-3.5 max-md:flex-wrap max-md:max-w-full">
                <div
                  className={`flex-auto text-xl text-black} ${style.headerss}`}
                >
                  Available Now
                </div>
                <div className="flex flex-col justify-center py-1 pr-1.5 pl-8 bg-red-500 rounded-[56.25px] max-md:pl-5">
                  <div className="shrink-0 bg-white rounded-full h-[23px] w-[23px]" />
                </div>
              </div>
              <div className="mt-4 text-sm text-neutral-400 tracking-tighter max-md:max-w-full">
                Establishments will see your expected hourly rate, but their
                posting may offer a higher/lower offer for a gig, you choose
                whether to accept or not at time of posting.
              </div>
              <div className="flex flex-col px-2 pt-1.5 pb-3 mt-8 mr-3 rounded-xl shadow-xl border-l-4 border-red-500 border-solid shadow-sm max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-2.5">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/Small_bar1.png"
                    className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                  />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="flex gap-3 justify-between px-px">
                      <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
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
                <div className="flex gap-3 mt-2 whitespace-nowrap">
                  <div className="grow my-auto text-base text-blue-500">
                    <span className="font-medium">$20-$30 </span>
                    <span className="text-xs font-medium text-neutral-400">
                      / Hour
                    </span>
                  </div>
                  <button className="grow justify-center w-[60%] py-2.5 text-sm text-center text-black bg-amber-300 rounded-[92.207px] ">
                    Apply
                  </button>
                </div>
              </div>
              <div className="flex flex-col px-2 pt-1.5 pb-3 mt-4 mr-3 rounded-xl shadow-xl border-l-4 border-red-500 border-solid shadow-sm max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-2.5">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/Small_bar2.png"
                    className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                  />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="flex gap-3 justify-between px-px">
                      <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
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
                <div className="flex gap-3 mt-2 whitespace-nowrap">
                  <div className="grow my-auto text-base text-blue-500">
                    <span className="font-medium">$20-$30 </span>
                    <span className="text-xs font-medium text-neutral-400">
                      / Hour
                    </span>
                  </div>
                  <button className="grow justify-center w-[60%] py-2.5 text-sm text-center text-black bg-amber-300 rounded-[92.207px] ">
                    Apply
                  </button>
                </div>
              </div>
              <div className="flex flex-col px-2 pt-1.5 pb-3 mt-4 mr-3 rounded-xl shadow-xl border-l-4 border-red-500 border-solid shadow-sm max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-2.5">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/Small_bar3.png"
                    className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                  />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="flex gap-3 justify-between px-px">
                      <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
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
                <div className="flex gap-3 mt-2 whitespace-nowrap">
                  <div className="grow my-auto text-base text-blue-500">
                    <span className="font-medium">$20-$30 </span>
                    <span className="text-xs font-medium text-neutral-400">
                      / Hour
                    </span>
                  </div>
                  <button className="grow justify-center w-[60%] py-2.5 text-sm text-center text-black bg-amber-300 rounded-[92.207px] ">
                    Apply
                  </button>
                </div>
              </div>

              <div className="flex flex-col px-2 pt-1.5 pb-3 mt-3 mr-4 rounded-xl shadow-xl border-l-4 border-red-500 border-solid shadow-sm max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-2.5">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/Small_bar1.png"
                    className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                  />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="flex gap-3 justify-between px-px">
                      <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
                        ABG Establishment
                      </div>
                      <div className=" px-2 pr-1 text-[11px] whitespace-nowrap bg-white rounded border border-solid border-zinc-100 text-neutral-500">
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
                <div className="flex gap-3 mt-2 whitespace-nowrap">
                  <div className="grow my-auto text-base text-blue-500">
                    <span className="font-medium">$20-$30 </span>
                    <span className="text-xs font-medium text-neutral-400">
                      / Hour
                    </span>
                  </div>
                  <button className="grow w-[60%] justify-center py-2.5 text-sm text-center text-black bg-amber-300 rounded-[92.207px] ">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperDash>
  );
}

export default GigCancel;
