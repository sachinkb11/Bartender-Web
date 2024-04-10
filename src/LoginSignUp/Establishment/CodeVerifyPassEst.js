import * as React from "react";
import styles from "../../styles/codeverifyPass_Acc.module.css";
import { useNavigate } from "react-router-dom";
import WrapperEst from "./WrapperEst";
export default function CodeVerifyPassEst(props) {
  const navigate = useNavigate();
  function goToCreatePass() {
    navigate("/CreatePassEst");
  }
  return (
    <WrapperEst>
      <div className="flex flex-col items-center px-11 pt-12 pb-8 bg-white border-solid border-[5.241px] border-[color:var(--ffcc-42,#FFCC42)] rounded-[41.924px] max-md:px-5 max-md:max-w-full">
        <div className={styles.header}>Code Verification</div>
        <div className="mt-2 text-small text-center text-neutral-600 max-md:max-w-full">
          Code is sent to abc@mail.com & +1 9876567897
        </div>
        <div className="flex  gap-5 justify-between mt-6 text-xl whitespace-nowrap text-neutral-800 max-md:flex-wrap max-md:max-w-full">
          <input type="text" className={styles.inputField}></input>
          <input type="text" className={styles.inputField}></input>
          <input type="text" className={styles.inputField}></input>
          <input type="text" className={styles.inputField}></input>
        </div>
        <div className="mt-7 text-base leading-6 text-center w-[338px]">
          <span className="">Didn’t receive any code?</span>
          <br />
          <span className="text-red-500">Request new code again.</span>
        </div>
        <button
          onClick={goToCreatePass}
          className="justify-center p-3 w-[90%] text-small  text-center text-black bg-amber-300 rounded-[124.047px] max-md:px-5 max-md:max-w-full my-3 "
        >
          Verify & Reset Password
        </button>
      </div>
    </WrapperEst>
  );
}
