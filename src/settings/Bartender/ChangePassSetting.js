import { useState } from "react";
import WrapperDash from "../../dashboard/WrapperDash";
import style from "../setting.module.css";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import { Link } from "react-router-dom";
import * as React from "react";

function ChangePassSetting() {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;
  return (
    <WrapperDash>
      {showModal && mainModal}
      {showModalnotify && mainModalnotify}
      <div className="flex flex-col grow shrink-0 basis-0 max-md:max-w-full max-w-full">
        <div className="flex flex-col px-5  bg-zinc-50 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between px-5 pb-5 w-full max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
            <div className=" mt-6 text-3xl ">
              <div className="grow ">
                <Link to={"/SettingMain"}
                 className="border-2 border-black rounded-[10px] px-4 ">
                  &#10094;
                </Link>
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
                  onClick={() => setShowModal((setShowModal) => !setShowModal)}
                  className="text-5xl items-center relative bottom-4  "
                >
                  &#751;
                </button>
              </div>
            </div>
          </div>
          {/* <div className="shrink-0 mt-5 h-px border border-solid bg-zinc-100 border-zinc-300 max-md:max-w-full" /> */}
          <div className="flex flex-col px-14 py-9 mt-8 bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col self-center max-w-full w-[556px]">
              <div
                className={`self-center text-[23px] tracking-wide text-center text-black capitalize} ${style.header}`}
              >
                Change Password
              </div>
              <div className="mt-1 text-[16px] text-center text-neutral-600 max-md:max-w-full">
                Your new password must be different from previous used passwords
              </div>
              <div className="flex gap-5 items-center px-6 py-2 mt-14 ml-3 bg-white border border-gray-200 border-solid rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src="/images/lock.png"
                  className="shrink-0 self-stretch my-auto aspect-[1.03] w-[30px]"
                />
                <div className="flex flex-col flex-1 text-[16px] self-stretch max-md:max-w-full">
                  <div className="text-black max-md:max-w-full">
                    Old Password
                  </div>
                
                  <input className="mt-1 text-zinc-500 max-md:max-w-full border-none outline-none" type="text" placeholder="Enter your password" />
                </div>
                <img
                  loading="lazy"
                  src="/images/eye.png"
                  className="shrink-0 self-stretch my-auto aspect-[1.03] w-[30px]"
                />
              </div>
              <div className="flex gap-5 items-center px-6 py-2 mt-3.5 ml-3 bg-white border border-gray-200 border-solid rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src="/images/lock.png"
                  className="shrink-0 self-stretch my-auto aspect-[1.03] w-[30px]"
                />
                <div className="flex flex-col flex-1 text-[16px] self-stretch max-md:max-w-full">
                  <div className="text-black max-md:max-w-full">
                  New Password
                  </div>
                
                  <input className="mt-1 text-zinc-500 max-md:max-w-full border-none outline-none" type="text" placeholder="Enter your password" />
                </div>
                <img
                  loading="lazy"
                  src="/images/eye.png"
                  className="shrink-0 self-stretch my-auto aspect-[1.03] w-[30px]"
                />
              </div>
              <div className="flex gap-5 items-center px-6 py-2 mt-3.5 ml-3 bg-white border border-gray-200 border-solid rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src="/images/lock.png"
                  className="shrink-0 self-stretch my-auto aspect-[1.03] w-[30px]"
                />
                <div className="flex flex-col text-[16px] flex-1 self-stretch max-md:max-w-full">
                  <div className="text-black  max-md:max-w-full">
                  Confirm New Password
                  </div>
                
                  <input className="mt-1 text-zinc-500 max-md:max-w-full border-none outline-none" type="text" placeholder="Enter your password" />
                </div>
                <img
                  loading="lazy"
                  src="/images/eye.png"
                  className="shrink-0 self-stretch my-auto aspect-[1.03] w-[30px]"
                />
              </div>
          
              
              <button className="justify-center py-4 mt-7 ml-3 text-[18px] text-center text-black bg-amber-300 rounded-[124.047px] max-md:px-5 max-md:max-w-full">
                Update Password
              </button>
            </div>
          
          </div>
        </div>
      </div>
    </WrapperDash>
  );
}

export default ChangePassSetting;
