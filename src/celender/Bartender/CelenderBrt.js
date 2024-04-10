import { useState } from "react";
import WrapperDash from "../../dashboard/WrapperDash";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import Availibilty from "./Availibilty";
import SetAvailibility from "./SetAvailibility";
import GigCancel from "../../eventDetails/Bartender/Cancel/GigCancel";
import { Link } from "react-router-dom";

function CelenderBrt() {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;

  const [showModalAvailibilty, setShowModalAvailibity] = useState(false);
  const mainModalAvailibilty = <Availibilty></Availibilty>;

  const [ShowSetAvailibity, SetAvailibity] = useState(false);
  const MainSetAvailibity = <SetAvailibility></SetAvailibility>;
  return (
    <WrapperDash>
      {showModal && mainModal}
      {showModalnotify && mainModalnotify}
      {showModalAvailibilty && mainModalAvailibilty}
      {ShowSetAvailibity && MainSetAvailibity}

      <div className="flex gap-5 justify-between px-5 pb-5  max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
        <div className="flex gap-5 my-auto text-4xl font-semibold tracking-tighter text-yellow-400 whitespace-nowrap leading-[58.8px]">
          <div className="grow pt-3 my-auto">
            <span className=" text-neutral-700 uppercase font-[BebasNeue] ">
            Calendar
            </span>
          </div>
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
              onClick={() => setShowModal((setShowModal) => !setShowModal)}
              className="text-5xl items-center relative bottom-4  "
            >
              &#751;
            </button>
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
                        <Link to={"/GigCancel"}>
                       
                        <img
                          loading="lazy"
                          src="/images/completeProfile/celeBar1.png"
                          className="self-center border-2 border-white border-solid aspect-[2.44] w-[100px]"
                        />
                         </Link>
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
                      <Link to={"/GigCancel"}>
                      <img
                        loading="lazy"
                        src="/images/completeProfile/celeBar2.png"
                        className="w-full border-2 border-white border-solid aspect-[2.63]"
                      /></Link>
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
        <div className="flex flex-col flex-1 grow px-5 pt-7 pb-20 w-full bg-white rounded-3xl shadow-2xl max-md:mt-6 max-md:max-w-full">
          <div className="flex  max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto my-auto text-[16px] text-slate-900">
              Your Availability
            </div>
            <button
              onClick={() => SetAvailibity((SetAvailibity) => !SetAvailibity)}
              className="justify-center px-6 py-2 text-[12px] text-center text-black bg-amber-300 rounded-[113.703px] max-md:px-5"
            >
              Set Your Availability
            </button>
          </div>
          {/* <div className="flex gap-5 justify-between py-2.5  pr-7 pl-2.5 mt-9 w-full whitespace-nowrap bg-white rounded-xl shadow-xl max-md:flex-wrap max-md:pr-5 max-md:max-w-full"> */}
          <div className="flex gap-5 justify-between px-2 py-2 mt-9 w-full whitespace-nowrap bg-white rounded-xl shadow-xl max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
            <div className="flex gap-5">
              <div className="flex flex-col items-start px-4  text-red-500 rounded-xl border border-red-500 border-solid bg-red-500 bg-opacity-10 h-[52px] w-[52px] max-md:pr-5">
                <div className="text-[17px] font-medium">18</div>
                <div className=" text-base text-[15px]">Mo</div>
              </div>
              <div className="flex-auto my-auto text-[17px] tracking-wide leading-7 text-zinc-400">
                Unavailable
              </div>
            </div>
            <img
              loading="lazy"
              src="/images/completeProfile/dark-pen.png"
              className="shrink-0 my-auto w-6 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between px-2 py-2.5 mt-2 w-full whitespace-nowrap bg-white rounded-xl shadow-xl max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
            <div className="flex gap-5">
              <div className="flex flex-col items-start px-4  text-red-500 rounded-xl border border-red-500 border-solid bg-red-500 bg-opacity-10 h-[52px] w-[52px] max-md:pr-5">
                <div className="text-[17px] font-medium">19</div>
                <div className=" text-[15px]">Tu</div>
              </div>
              <div className="flex-auto my-auto text-[17px] tracking-wide leading-7 text-zinc-400">
                Unavailable
              </div>
            </div>
            <img
              loading="lazy"
              src="/images/completeProfile/dark-pen.png"
              className="shrink-0 my-auto w-6 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between px-2 py-2.5 mt-2 w-full whitespace-nowrap bg-white rounded-xl shadow-xl max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
            <div className="flex gap-5">
              <div className="flex flex-col px-2   text-red-500 rounded-xl border border-red-500 border-solid bg-red-500 bg-opacity-10 h-[52px] w-[52px]">
                <div className="text-[17px] pl-1 font-medium">20</div>
                <div className=" text-[15px]">Wed</div>
              </div>
              <div className="flex-auto my-auto text-lg tracking-wide leading-7 text-zinc-400">
                Unavailable
              </div>
            </div>
            <img
              loading="lazy"
              src="/images/completeProfile/dark-pen.png"
              className="shrink-0 my-auto w-6 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between px-2 py-2.5 mt-2 w-full bg-white rounded-xl shadow-xl max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col items-start px-4  text-red-500 whitespace-nowrap rounded-xl border border-red-500 border-solid bg-red-500 bg-opacity-10 h-[52px] w-[52px] max-md:pr-5">
                <div className="text-lg font-medium">21</div>
                <div className="text-base">Th</div>
              </div>
              <div className="flex gap-1 my-auto text-[17px] text-black">
                <img
                  loading="lazy"
                  src="/images/completeProfile/big-stop-watch.png"
                  className=" h-[18px] mt-[2px] w-4 "
                />
                <div className="my-auto text-[17px] tracking-tighter">
                  8:00 AM - 10:30 AM <br />
                </div>
              </div>
            </div>
            <img
              onClick={() =>
                setShowModalAvailibity(
                  (setShowModalAvailibity) => !setShowModalAvailibity
                )
              }
              loading="lazy"
              src="/images/completeProfile/dark-pen.png"
              className="shrink-0 my-auto w-6 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between px-2 py-2.5 mt-2 w-full bg-white rounded-xl shadow-xl max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col items-start px-4  text-red-500 whitespace-nowrap rounded-xl border border-red-500 border-solid bg-red-500 bg-opacity-10 h-[52px] w-[52px]">
                <div className="text-lg font-medium">22</div>
                <div className=" text-base text-center">Fr</div>
              </div>
              <div className="flex gap-1 my-auto text-[17px] text-black">
                <img
                  loading="lazy"
                  src="/images/completeProfile/big-stop-watch.png"
                  className=" h-[18px] mt-[2px] w-4  "
                />
                <div className="my-auto tracking-tighter">
                  8:00 AM - 10:30 AM <br />
                </div>
              </div>
            </div>

            <img
              onClick={() =>
                setShowModalAvailibity(
                  (setShowModalAvailibity) => !setShowModalAvailibity
                )
              }
              loading="lazy"
              src="/images/completeProfile/dark-pen.png"
              className="shrink-0 my-auto w-6 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between px-2 py-2.5 mt-2 w-full whitespace-nowrap bg-white rounded-xl shadow-xl max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
            <div className="flex gap-5">
              <div className="flex flex-col items-start px-4  text-red-500 rounded-xl border border-red-500 border-solid bg-red-500 bg-opacity-10 h-[52px] w-[52px]">
                <div className="text-lg font-medium">23</div>
                <div className="text-base">Sa</div>
              </div>
              <div className="flex-auto my-auto text-[17px] tracking-wide leading-7 text-zinc-400">
                Unavailable
              </div>
            </div>
            <img
              loading="lazy"
              src="/images/completeProfile/dark-pen.png"
              className="shrink-0 my-auto w-6 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between px-2 py-2.5 mt-2 w-full whitespace-nowrap bg-white rounded-xl shadow-xl max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
            <div className="flex gap-5">
              <div className="flex flex-col items-start px-4  text-red-500 rounded-xl border border-red-500 border-solid bg-red-500 bg-opacity-10 h-[52px] w-[52px]">
                <div className="text-lg font-medium">24</div>
                <div className=" text-base">Su</div>
              </div>
              <div className="flex-auto my-auto text-[17px] tracking-wide leading-7 text-zinc-400">
                Unavailable
              </div>
            </div>
            <img
              loading="lazy"
              src="/images/completeProfile/dark-pen.png"
              className="shrink-0 my-auto w-6 aspect-square"
            />
          </div>
        </div>
      </div>
    </WrapperDash>
  );
}

export default CelenderBrt;
