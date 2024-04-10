import * as React from "react";

import styles from "../../styles/forgetPass.module.css";
import { useNavigate } from "react-router-dom";
import WrapperEst from "./WrapperEst";
export default function ForgotPassEst(props) {
  const navigate = useNavigate();
  function GoTocodeverify() {
    navigate("/CodeVerifyPassEst");
  }
  return (
    <WrapperEst>
      <div className="flex flex-col w-[550px] p-5 items-center bg-white border-solid border-[5.241px] border-[color:var(--ffcc-42,#FFCC42)] rounded-[41.924px] max-md:px-5 max-md:max-w-full}">
        <div className={styles.header}>Forgot Your Password?</div>
        <div className="mt-4 text-small text-center tracking-tight text-neutral-550 max-md:max-w-full} ">
          Don’t worry! Enter the email address or phone number and we’ll send an
          email with instructions with OTP to reset your password.
        </div>
        <div className="flex gap-5 mt-5 justify-between items-center self-stretch px-3 py-2 ml-7 mr-7  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="/images/person.png"
            className="my-auto aspect-[1.03] w-[25px]"
          />
          <div className="flex flex-col flex-1 max-md:max-w-full">
            <div className="text-black max-md:max-w-full">
              Enter Email ID or Phone Number
            </div>
            <div className="text-zinc-500 max-md:max-w-full ">
              <input
                className=" border-none outline-none w-full"
                type="text"
                placeholder="Enter your password"
              ></input>
            </div>
          </div>
        </div>
        <button
          onClick={GoTocodeverify}
          className="justify-center p-3 text-small w-[87%] mt-4 mb-6 text-center text-black bg-amber-300 rounded-[124.047px] max-md:px-5 max-md:max-w-full my-3 "
        >
          Send OTP
        </button>
      </div>
    </WrapperEst>
  );
}
