import React, { useState } from "react";
import style from "../celender.module.css";
import WrapperDashEst from "../../authWrapper/WrapperDashEst";
import DropdownEst from "../../dashboard/Establishment/DropdownEst";
import NotificationEst from "../../dashboard/Establishment/NotificationEst";
import { Link } from "react-router-dom";

function CelenderEst() {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <DropdownEst></DropdownEst>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <NotificationEst></NotificationEst>;
  return (
    <WrapperDashEst>
      {showModal && mainModal}
      {showModalnotify && mainModalnotify}
      <div className="flex gap-5 justify-between px-5 pb-5 mt-3 max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
        <div className="flex-auto font-[Bebas-Neue] my-auto text-5xl tracking-tighter  uppercase leading-[58.8px] text-neutral-700">
          Calendar
        </div>
        <div className="flex gap-5 justify-between text-lg text-white max-md:flex-wrap">
          <div className="flex flex-col justify-center px-5 py-3 bg-red-500 rounded-[113.703px] max-md:px-5">
            <div className="flex gap-2.5 py-1">
              <img
                loading="lazy"
                src="/images/completeProfile/white-plus.png"
                className=" w-6 aspect-square"
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

      <div className="flex mt-5">
        {/* first */}
        <div className="flex flex-col w-[350px] mr-5 grow mt-2.5 max-md:mt-8 max-md:max-w-full">
          <div className="flex flex-col ml-4 max-w-full w-[239px] max-md:ml-2.5">
            <div className="flex gap-2 whitespace-nowrap">
              <div className=" text-2xl font-medium text-black">November</div>
              <div className="text-2xl font-light text-center text-black">
                2023
              </div>
            </div>
            <div className="flex gap-3 mt-1 text-lg text-slate-400">
              <div className="  my-auto">02 - 07 November</div>
              <div>
                <button className="bg-gray-200 w-6 rounded-md mr-1 ">
                  {" "}
                  &lt;
                </button>
                <button className="bg-gray-200 w-6 rounded-md "> &gt;</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-5 py-5 mt-5 bg-white rounded-3xl shadow-2xl max-md:pl-5 max-md:max-w-full">
            <div className="flex flex-col px-9 pt-9 pb-3.5 rounded-xl bg-neutral-100 bg-opacity-60 max-md:px-5 max-md:max-w-full">
              <div className="flex ml-[100px] justify-between items-start self-center max-w-full whitespace-nowrap w-[460px] max-md:flex-wrap">
                <div className="flex flex-col">
                  <div className="text-lg text-zinc-500">Mon</div>
                  <div className="mt-5 text-base text-black">02</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg text-zinc-500">Tues</div>
                  <div className="mt-5 text-base text-black">03</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg text-zinc-500">Wed</div>
                  <div className="mt-5 text-base text-black">04</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg text-zinc-500">Thu</div>
                  <div className="mt-5 text-base text-black">05</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg text-zinc-500">Fri</div>
                  <div className="mt-5 text-base text-black">06</div>
                </div>
                <div className="flex flex-col self-stretch">
                  <div className="text-lg text-zinc-500">Sat</div>
                  <div className="mt-5 text-base text-black">07</div>
                </div>
              </div>
              <div className="flex gap-5 mt-5 max-md:flex-wrap">
                <div className="flex flex-col self-start text-sm whitespace-nowrap text-slate-900 max-md:hidden">
                  <div>09:00</div>
                  <div className="mt-14 max-md:mt-10">10:00</div>
                  <div className="mt-14 max-md:mt-10">11:00</div>
                  <div className="mt-14 max-md:mt-10">12:00</div>
                  <div className="mt-14 max-md:mt-10">13:00</div>
                  <div className="mt-14 max-md:mt-10">14:00</div>
                  <div className="mt-14 max-md:mt-10">15:00</div>
                </div>
                <div className="flex flex-col grow shrink-0 mt-1 basis-0  max-md:max-w-full">
                  <div className="shrink-0 h-0.5 border border-dashed bg-zinc-100 border-zinc-100 max-md:max-w-full" />
                  <div className="flex gap-5 px-px w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-1 gap-0">
                      <div className="shrink-0 w-0.5 border border-solid bg-zinc-100 border-zinc-100  h-[654px]" />
                      <div className="flex flex-col px-2 pt-3 pb-10 my-auto w-[110px]  bg-red-900 rounded-xl">
                        <img
                          loading="lazy"
                          src="/images/completeProfile/celeBar1.png"
                          className="self-center border-2 border-white border-solid aspect-[2.44] w-[100px]"
                        />
                        <div className="mt-3 text-[11px]  text-white">
                          ABH Establishment
                        </div>
                        <div className="flex gap-1 mt-1 text-[11px] tracking-tighter text-white text-opacity-60 max-md:mr-1.5">
                          <img
                            loading="lazy"
                            src="/images/completeProfile/white-stop-watch.png"
                            className="shrink-0 self-start w-3 aspect-square"
                          />
                          <div>
                            Shift Time: <br />
                            8:00 AM - 10:30 AM <br />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col pt-3 mr-10 pb-10 mt-10 px-2  bg-amber-300 rounded-xl h-fit max-w-[110px]">
                      <img
                        loading="lazy"
                        src="/images/completeProfile/celeBar2.png"
                        className="w-full border-2 border-white border-solid aspect-[2.63]"
                      />
                      <div className="mt-3 w-full text-[11px] text-black">
                        ABH Establishment
                      </div>
                      <div className="flex gap-1 mt-3 tracking-tighter  text-[11px] text-black text-opacity-60">
                        <img
                          loading="lazy"
                          src="/images/completeProfile/clock.png"
                          className="shrink-0 self-start w-3 aspect-square"
                        />
                        <div>
                          Shift Time: <br />
                          8:00 AM - 10:30 AM <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="ml-4">
          <div className="bg-white rounded-3xl shadow-2xl w-[360px] min-h-full ">
            <div className=" p-4  ">
              <div
                className={`text-xl text-black max-w-[343px]} ${style.headers}`}
              >
                <span
                  className={`text-red-500 font-semibold} ${style.headers}`}
                >
                  12 Bartenders
                </span>{" "}
                that are available today
              </div>
              <div className="flex flex-col px-2 pt-1.5 pb-3 mt-6 mr-3 w-full rounded-xl border-l-4 border-red-500 border-solid shadow-md max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-2.5">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/user1.png"
                    className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                  />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="flex gap-5  justify-between px-px">
                      <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
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
              <div className="flex flex-col px-2 pt-1.5 pb-3 mt-5 mr-3 w-full rounded-xl border-l-4 border-red-500 border-solid shadow-md max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-2.5">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/user2.png"
                    className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                  />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="flex gap-5  justify-between px-px">
                      <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
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

              <div className="flex flex-col px-2 pt-1.5 pb-3 mt-5 mr-3 w-full rounded-xl border-l-4 border-red-500 border-solid shadow-md max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-2.5">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/user3.png"
                    className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                  />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="flex gap-5  justify-between px-px">
                      <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
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

              <div className="flex flex-col px-2 pt-1.5 pb-3 mt-5 mr-4 w-full rounded-xl border-l-4  border-red-500 border-solid shadow-md max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-2.5 ">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/user4.png"
                    className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                  />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="flex gap-5  justify-between px-px">
                      <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
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
            </div>
          </div>
        </div>
      </div>
    </WrapperDashEst>
  );
}

export default CelenderEst;
