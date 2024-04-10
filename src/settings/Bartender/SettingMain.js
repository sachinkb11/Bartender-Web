import { useState } from "react";
import React from "react";
import WrapperDash from "../../dashboard/WrapperDash";
import style from "../setting.module.css";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import { Link } from "react-router-dom";

function SettingMain() {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;
  return (
    <WrapperDash>
      {showModal && mainModal}
      {showModalnotify && mainModalnotify}
      <div className="flex flex-col grow shrink-0 basis-0 max-md:max-w-full max-w-full">
        <div className="flex flex-col px-5   bg-zinc-50 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between px-5 pb-5 w-full max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
            <div className="flex gap-5 my-auto text-4xl font-semibold tracking-tighter ">
              <div className="grow pt-3 my-auto">
                <span className=" text-neutral-700 font-[Bebas-Neue] uppercase ">
                SETTINGS
                </span>
              </div>
            </div>
            <div className="flex gap-5 pt-3  justify-between">
              <img
                onClick={() =>
                  setShowModalnotify(
                    (setShowModalnotify) => !setShowModalnotify
                  )
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
                  onClick={() =>
                    setShowModal((setShowModal) => !setShowModal)
                  }
                  className="text-5xl items-center relative bottom-4  "
                >
                  &#751;
                </button>
              </div>
            </div>
          </div>
          {/* <div className="shrink-0 mt-5 h-px border border-solid bg-zinc-100 border-zinc-300 max-md:max-w-full" /> */}
          <div className="mt-8 max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[250px] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-5 w-full text-[15px] text-black bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-9">
                  <img
                    loading="lazy"
                    src="/images/freq.png"
                    className="self-center aspect-square w-[60px]"
                  />
                  <Link to={"/FreqAsk"} className="mt-3.5 self-center">Frequently Asked Questions</Link>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[250px] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-5 w-full text-[15px] text-black bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-9">
                  <img
                    loading="lazy"
                    src="/images/solarPass.png"
                    className="self-center aspect-square w-[60px]"
                  />
                  <Link to={"/ChangePassSetting"} className="mx-2.5 mt-3.5 self-center">Change Password</Link>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[250px] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-5 w-full text-[15px] text-black bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-9">
                  <img
                    loading="lazy"
                    src="/images/solarBell.png"
                    className="self-center aspect-square w-[60px]"
                  />
                  <Link to={"/NotifictionSetting"} className="mt-3 max-md:ml-0.5 self-center">
                    Notification Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>
         
        </div>
     
      </div>
    </WrapperDash>
  );
}

export default SettingMain;
