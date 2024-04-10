import * as React from "react";
import styles from "../../styles/signUp.module.css";
import Wrapper from "../../authWrapper/Wrapper";
import { Link } from "react-router-dom";

export default function SignUp(props) {
  const [activeTab, setActiveTab] = React.useState(0);

  const [isChecked, setIsChecked] = React.useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Wrapper>
      <div className="flex flex-col items-center bg-white border-solid border-[5.241px] border-[color:var(--ffcc-42,#FFCC42)] rounded-[41.924px] max-md:px-5 max-md:max-w-full">
        <div className={styles.header}>sign Up</div>
        <div className="flex flex-col items-center ">
        <div className="flex gap-5 justify-between px-1.5 py-1 mt-3 text-base shadow-[0_1px_5px_rgb(0,0,0,0.2)] leading-6 text-center whitespace-nowrap bg-white rounded-[132.798px]">
            <div className="justify-center px-9 py-3 font-medium text-white bg-red-500 rounded-[132.798px] max-md:px-5">
              Bartender
            </div>
            <Link to={"/SignUpEst"} className="my-auto text-neutral-400">Establishment</Link>
          </div>
          <div className="flex gap-5 justify-between items-center self-stretch px-3 py-2 ml-7 mr-7  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="/images/person.png"
              className="my-auto aspect-[1.03] w-[25px]"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-black max-md:max-w-full">Your Full Name</div>
              <div className="mt-1 text-zinc-500 max-md:max-w-full ">
                <input
                  className=" border-none outline-none w-full"
                  type="text"
                  placeholder="Enter your full name"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center self-stretch px-3 py-2 ml-7 mr-7  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="/images/mail.png"
              className="my-auto aspect-[1.03] w-[25px]"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-black max-md:max-w-full">Email ID</div>
              <div className="mt-1 text-zinc-500 max-md:max-w-full ">
                <input
                  className=" border-none outline-none w-full"
                  type="text"
                  placeholder="Enter your phone number"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center self-stretch px-3 py-2 ml-7 mr-7  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="/images/contactLogo.png"
              className="my-auto aspect-[1.03] w-[25px]"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-black max-md:max-w-full">Phone Number</div>
              <div className="mt-1 text-zinc-500 max-md:max-w-full ">
                <input
                  className=" border-none outline-none w-full"
                  type="text"
                  placeholder="Enter your phone number"
                ></input>
              </div>
            </div>
          </div>

          <div className="flex gap-5 justify-between items-center self-stretch px-3 py-2 ml-7 mr-7  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="/images/lock.png"
              className="self-stretch my-auto aspect-[1.03] w-[25px]"
            />
            <div className="flex flex-col flex-1 px-0 self-stretch max-md:max-w-full">
              <div className="  text-black max-md:max-w-full">
                Create Password
              </div>
              <div className="mt-1 text-zinc-500 max-md:max-w-full">
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
              src="/images/multiUser.png"
              className="my-auto aspect-[1.03] w-[25px]"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-black max-md:max-w-full">Referral Code</div>
              <div className="mt-1 text-zinc-500 max-md:max-w-full ">
                <input
                  className=" border-none outline-none w-full"
                  type="text"
                  placeholder="Enter your referral code"
                ></input>
              </div>
            </div>
          </div>
          <button className="justify-center p-3 mt-4 w-[85%] text-small text-center text-black bg-amber-300 rounded-[124.047px] max-md:px-5 max-md:max-w-full my-3 ">
            Sign Up
          </button>
          <div className="self-center mt-3 text-small text-center text-black-500 w-[323px]">
            By clicking this button, you agree with <br />
            {/* our <span className="text-red-500">Terms and Condition</span> */}
            <Link className="text-red-500" to="/TermCondtion">
              Terms and Condition
            </Link>
          </div>
          <div className="flex gap-2.5 items-center px-5 text-sm font-medium text-zinc-600 my-5">
            <img
              loading="lazy"
              src="/images/rectangle1.png"
              className="self-stretch my-auto max-w-full aspect-[100] fill-[linear-gradient(270deg,rgba(217,217,217,0.75)_0%,rgba(217,217,217,0.00)_94.39%)] w-[126px]"
            />
            <div className="flex-auto self-stretch">Or continue with</div>
            <img
              loading="lazy"
              src="/images/rectangle2.png"
              className="self-stretch my-auto max-w-full aspect-[100] fill-[linear-gradient(90deg,rgba(217,217,217,0.75)_0%,rgba(217,217,217,0.00)_105.61%)] w-[126px]"
            />
          </div>
          <div className="flex gap-2.5 ">
            <div className="flex flex-1 justify-center items-center px-10 py-5  bg-white shadow rounded-[120.9px]">
              <img
                loading="lazy"
                src="/images/google.png"
                className="w-5 aspect-[0.96]"
              />
            </div>
            <div className="flex flex-1 justify-center items-center px-10 py-2 bg-white shadow rounded-[120.9px]">
              <img
                loading="lazy"
                src="/images/apple-black.png"
                className="w-6 aspect-[0.83]"
              />
            </div>
            <div className="flex flex-1 justify-center items-center px-11 py-3 bg-white shadow rounded-[120.9px]">
              <img
                src="/images/fb-logo.png"
                className="aspect-square w-[29px]"
              />
            </div>
          </div>
          <div className="text-small my-4 text-center text-red-500 ">
            <span className="text-zinc-600">New to Barooom?</span>
            <Link to="/">Sign In</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
