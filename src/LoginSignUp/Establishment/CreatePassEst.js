import * as React from "react";
import styles from "../../styles/createPass.module.css";

import { useNavigate } from "react-router-dom";
import WrapperEst from "./WrapperEst";
export default function CreatePassEst(props) {
  const navigate = useNavigate();
  function goToCodeVerifyAccount() {
    navigate("/CodeVerifyAccountEst");
  }
  return (
    <WrapperEst>
      <div className="flex flex-col p-4 items-center bg-white border-solid border-[5.241px] border-[color:var(--ffcc-42,#FFCC42)] rounded-[41.924px] max-md:px-5 max-md:max-w-full">
        <div className={styles.header}>Create New Password</div>
        <section className="mt-5 text-sm text-center text-neutral-600 max-md:max-w-full">
          <p>
            Your new password must be different from previous used passwords.
          </p>
        </section>
        <div className="flex gap-5 justify-between items-center self-stretch px-3 py-2 ml-7 mr-7  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="/images/lock.png"
            className="self-stretch my-auto aspect-[1.03] w-[25px]"
          />
          <div className="flex flex-col flex-1 px-0 self-stretch max-md:max-w-full">
            <div className="  text-black max-md:max-w-full">Password</div>
            <div className="mt-1 text-zinc-500 max-md:max-w-full ">
              <input
                className=" border-none outline-none w-full"
                type="text"
                placeholder="Enter your password"
              ></input>
            </div>
          </div>
          <img
            loading="lazy"
            src="/images/eye.png"
            className="self-stretch my-auto aspect-[1.03] w-[25px]"
          />
        </div>
        <div className="flex gap-5 justify-between items-center self-stretch px-3 py-2 ml-7 mr-7  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="/images/lock.png"
            className="self-stretch my-auto aspect-[1.03] w-[25px]"
          />
          <div className="flex flex-col flex-1 px-0 self-stretch max-md:max-w-full">
            <div className="  text-black max-md:max-w-full">
              {" "}
              Confirm New Password
            </div>
            <div className="mt-1 text-zinc-500 max-md:max-w-full ">
              <input
                className=" border-none outline-none w-full"
                type="text"
                placeholder="Enter your password"
              ></input>
            </div>
          </div>
          <img
            loading="lazy"
            src="/images/eye.png"
            className="self-stretch my-auto aspect-[1.03] w-[25px]"
          />
        </div>
        <button
          onClick={goToCodeVerifyAccount}
          className="justify-center w-[85%] p-3 mt-4 text-small text-center text-black bg-amber-300 rounded-[124.047px] max-md:px-5 max-md:max-w-full my-3 "
        >
          Send OTP
        </button>
      </div>
    </WrapperEst>
  );
}
