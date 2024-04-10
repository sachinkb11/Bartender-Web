import { useState } from "react";
import WrapperDashEst from "../../../authWrapper/WrapperDashEst";
import style from "../../dashboard.module.css";
import DropdownEst from "../DropdownEst";
import NotificationEst from "../NotificationEst";
import { Link } from "react-router-dom";

function PendingAcceptance(props) {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <DropdownEst></DropdownEst>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <NotificationEst></NotificationEst>;
  const item = [1, 2, 3, 4, 5, 6];
  const items = [1, 2, 3, 4, 5];

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
          <div className="bg-white rounded-3xl self-center  shadow-2xl pt-7 px-4 pb-6 ">
            <div className="flex gap-5 ml-14 max-w-[500px]  py-1 px-1  text-base leading-5 text-center max-lg:rounded-[10px] bg-white border border-gray-200 border-solid rounded-[100px] text-neutral-700 max-2xl:flex-wrap">
              <Link to={"/CurrentGigsEstablishment"} className="grow text-sm mt-3">Current Gigs</Link>
              <div className="flex gap-2 self-stretch px-3 py-2.5  font-medium text-white whitespace-nowrap bg-red-500 rounded-[100px] max-md:px-5">
                <img
                  loading="lazy"
                  src="/images/completeProfile/cocktail.png"
                  className="shrink-0 w-7 aspect-square"
                />
                <Link
                  to={"/PendingAcceptance"}
                  className="flex-auto text-sm self-stretch my-auto"
                >
                  Pending Acceptance
                </Link>
              </div>

              <Link
                to={"/PastGigsEstablishment"}
                className="flex-auto text-sm self-stretch my-auto"
              >
                Past Gigs
              </Link>
            </div>
            <div className="flex gap-5  justify-between  mt-5 max-lg:flex-wrap max-md:max-w-full">
              <div className="flex-auto my-auto ml-2 text-[18px] text-black">
              Pending Acceptance
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
                    <div className=" absolute top-4 right-4  px-3 py-[1px] text-[10px] font-medium text-black  bg-white rounded-xl border border-amber-300 border-solid">
                      12 Applicants
                    </div>
                    <div className="flex gap-2 mt-2.5 font-medium">
                      <div className="grow text-[12px] text-black ">
                        ABG Establishment
                      </div>
                      <div className="flex-auto text-[9px] text-orange-400 tracking-tighter capitalize">
                        Posted 2 days <br />
                        Ago
                      </div>
                    </div>
                    <div className="mt-[1px] text-xs leading-5  text-neutral-400">
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
                  </div>
                );
              })}
            </div>
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
    </WrapperDashEst>
  );
}
export default PendingAcceptance;
