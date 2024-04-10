import { useState } from "react";
import WrapperDash from "../../dashboard/WrapperDash";
import styles from "../reference.module.css";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";

export default function Reference({ item }) {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;

  const [showModal1, setShowModal1] = useState(false);

  return (
    <WrapperDash>
      {showModal && mainModal}
      {showModalnotify && mainModalnotify}
      <div className="flex  flex-col px-9  pb-6 rounded-3xl bg-zinc-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-5 pb-5 w-full max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
          <div className="flex gap-5 my-auto text-3xl font-semibold tracking-tighter text-yellow-400 whitespace-nowrap leading-[58.8px]">
            <div className="grow pt-3 my-auto uppercase font-[Bebas-Neue]">
              <span className=" text-neutral-700 font-[Bebas-Neue]">
                Refer A
              </span>
              <span className="text-red-500 font-[Bebas-Neue] "> Friend</span>
            </div>
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
        <div className="flex flex-col px-5 py-8 mt-8 text-sm leading-6 bg-white rounded-3xl shadow-2xl text-neutral-700 max-md:px-5 max-md:max-w-full">
          <div className="w-full relative text-white ">
            <img className="w-full h-[120px]" src="/images/refer-img.png" />
            <div className="absolute top-[42%] content-center flex justify-between w-full ">
              <div className="flex gap-5">
                <img
                  className="w-[110px] relative bottom-5"
                  src="/images/Shutter.png"
                />
                <div className="text-[16px] relative bottom-5 text-[#929292] leading-8">
                  <div>Referrals</div>
                  <div
                    style={{ fontFamily: "Righteous" }}
                    className="text-white text-[30px]"
                  >
                    10
                  </div>
                </div>
                <div className="text-[16px] relative bottom-5 text-[#929292] leading-8">
                  <div>Total Earnings</div>
                  <div
                    style={{ fontFamily: "Righteous" }}
                    className="text-white text-[30px]"
                  >
                    $200
                  </div>
                </div>
              </div>
              <div className="flex gap-12 justify-between relative bottom-7 items-start px-5 py-3 mr-2 bg-white bg-opacity-10 max-w-[352px] rounded-[100px]">
                <div className="flex flex-col ">
                  <div className="text-[12px] text-white text-opacity-40">
                    REFERRAL CODE
                  </div>
                  <div className=" text-[18px] font-bold tracking-widest text-center text-white">
                    EXFGIJHLLSW
                  </div>
                </div>
                <img src="/images/copy.png" className=" pt-4 ml-4 w-[25px]" />
              </div>
            </div>
          </div>
          <div className="self-center font-medium text-[17px] flex mt-5">
            My Referrals
            <button
              onClick={() => setShowModal1((setShowModal1) => !setShowModal1)}
              className="text-[21px] pl-2 pt-[1px]"
            >
              {" "}
              &#x1F6C8;
            </button>
          </div>

          <div className="grid grid-cols-2  w-full mx-auto xl:grid-cols-3 max-w-full gap-5 mt-5 ">
            {item.map((items) => {
              return (
                <div className="flex flex-1 gap-4 py-2 pr-20 pl-3.5 rounded-xl border max-w-[300px] border-dashed border-zinc-300 max-md:pr-5">
                  <img
                    loading="lazy"
                    src={items.image}
                    className="shrink-0 rounded-full aspect-square w-[52px]"
                  />
                  <div className="flex flex-col my-auto">
                    <div className="text-base text-black">{items.name}</div>
                    <div className="mt-2 text-sm text-neutral-500">
                      {items.phone}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {showModal1 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col bg-white rounded-3xl max-w-[615px]">
                  <div className="flex flex-col items-center px-8 py-8 text-black bg-white rounded-3xl shadow-2xl max-w-[375px]">
                    <button
                      onClick={() => setShowModal1(false)}
                      className="absolute right-4 top-2 text-xl"
                    >
                      &#10005;
                    </button>
                    <div className="text-xl font-semibold">
                      This Is How It Works!
                    </div>
                    <div className="shrink-0 h-[2px] bg-gray-300 w-[196px]" />
                    <div className="mt-5 text-lg text-red-500">
                      5 Referrals = $100
                    </div>
                    <div className="flex gap-5 justify-between items-start self-stretch mt-7 text-sm text-center">
                      <div className="  flex flex-col mt-2.5">
                        <div className=" relative self-center rounded-full  h-[90px] w-[90px]  bg-indigo-900 bg-opacity-10">
                          <img
                            loading="lazy"
                            src="/images/girlPhone.png"
                            className=" absolute bottom-[1px] left-4  h-[100px] w-[75px]"
                          />
                        </div>
                        <div className="mt-2.5 text-[14px]">Refer to your 5 friends</div>
                      </div>
                      <div className="text-3xl mt-9">&#x2794;</div>
                      <div className="  flex flex-col mt-2.5">
                        <div className=" relative self-center rounded-full  h-[90px] w-[90px]  bg-indigo-900 bg-opacity-10">
                          <img
                            loading="lazy"
                            src="/images/coinss.png"
                            className=" absolute bottom-[1px] w-full h-[110px]"
                          />
                        </div>
                        <div className="mt-2.5 text-[14px]">Earn $100</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </WrapperDash>
  );
}
