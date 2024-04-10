import * as React from "react";
import { Link } from "react-router-dom";

function DropdownEst(props) {
  return (
    <div className="flex absolute  right-10 top-[70px] bg-gray-100  flex-col justify-center mt-5 ml-5 text-sm text-black border border-solid border-neutral-200 rounded-2xl max-w-[290px]">
    <div className="flex gap-2.5 px-6 pt-6  pb-3 ">
      <img
        loading="lazy"
        src="/images/completeProfile/red_user.png"
        className="shrink-0 aspect-square   w-[26px]"
      />
      <div className="flex-auto self-start  mt-1">My Profile</div>
    </div>
    <div className="flex flex-col items-start pt-4 pr-20 pb-1.5 pl-6 w-full ">
      <div className="flex gap-3 whitespace-nowrap">
        <img
          loading="lazy"
          src="/images/completeProfile/red_setting.png"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Settings</div>
      </div>
      <div className="flex gap-2.5 mt-7">
        <img
          loading="lazy"
          src="/images/completeProfile/red_about.png"
          className="shrink-0 w-6 aspect-square"
        />
        <Link to={"/AboutUsEst"} className="self-start ">About Us</Link>
      </div>
    </div>
    <div className="flex gap-3 items-start px-6 pt-3 pb-7 whitespace-nowrap   ">
      <img
        loading="lazy"
        src="/images/completeProfile/logout_line.png"
        className="shrink-0 w-6 aspect-square"
      />
      <div className="flex-auto mt-1.5">Logout</div>
    </div>
  </div>
  );
} export default DropdownEst;


