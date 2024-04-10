import { useState } from "react";
import WrapperDash from "../../dashboard/WrapperDash";
import style from "../setting.module.css";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import { Link } from "react-router-dom";
import * as React from "react";

function NotifictionSetting() {
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
          <div className="flex flex-col px-14 pb-[100px] py-9 mt-8 bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full">
              <div className="flex flex-col items-center self-center max-w-full text-lg leading-7 text-black w-[763px]">
                <div className={`text-[22px] leading-8} ${style.header}`}>
                  Notification Settings
                </div>
                <div className="self-stretch mt-3.5 text-[16px] leading-5 text-neutral-700 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Gravida vehicula
                  varius ornare ac nec velit gravida at.
                </div>
                <div className="flex gap-5 px-9 py-5 mt-14 max-w-full whitespace-nowrap bg-white border border-gray-200 border-solid rounded-[129.664px] w-[533px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
                  <div className="flex-auto text-[18px] my-auto">Notifications</div>
                  <label>
                    <input
                      type="checkbox"
                      class="accent-red-500 w-[24px] h-[24px]"
                    />
                  </label>
                </div>
                <div className="flex gap-5 px-9 py-5 mt-4 max-w-full whitespace-nowrap bg-white border border-gray-200 border-solid rounded-[129.664px] w-[533px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
                  <div className="flex-auto text-[18px] my-auto">Lorem Ipsum</div>
                  <label>
                    <input
                      type="checkbox"
                      class="accent-red-500 w-[24px] h-[24px]"
                    />
                  </label>
                </div>
                <div className="flex gap-5 px-9 py-5 mt-4 max-w-full whitespace-nowrap bg-white border border-gray-200 border-solid rounded-[129.664px] w-[533px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
                  <div className="flex-auto text-[18px] my-auto">Chat Notification</div>
                  <label>
                    <input
                      type="checkbox" checked
                      class="accent-red-500 w-[24px] h-[24px]"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperDash>
  );
}

export default NotifictionSetting;
