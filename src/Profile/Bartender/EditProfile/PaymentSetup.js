import React from "react";
import style from "../../profile.module.css";
import { Link } from "react-router-dom";

function PaymentSetup() {
  return (
    <div>
      <img
        loading="lazy"
        src="/images/completeProfile/complete_Profile_backImg.png"
        className="object-cover fixed inset-0 size-full"
      />

      <div className="flex overflow-hidden relative flex-col  px-20 py-[60px] text-3xl text-white min-h-[130px] rounded-b-3xl max-md:flex-wrap max-md:px-5">
        <img
          loading="lazy"
          src="/images/completeProfile/upper_img.png"
          className="object-cover absolute inset-0 size-full"
        />

        <div className="relative flex-auto my-auto max-md:max-w-full">
          <Link
            to={"/MainProfile"}
            className="border-2 px-4 rounded-[10px] mr-5 } "
          >
            &#10094;
          </Link>
          <span className={`${style.header} `}>Edit Your Profile</span>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="flex relative justify-center items-center self-center px-16 pt-10 mb-5 mt-14 w-full rounded-3xl bg-white bg-opacity-80 max-w-[1099px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-center mt-7 mb-1.5 max-w-full w-[1213px]">
              <div
                className={`text-2xl leading-9 text-center text-black whitespace-nowrap} ${style.header}`}
              >
                Payment setup
              </div>
              <div className="self-stretch mt-1.5 text-base text-center text-neutral-600 max-md:max-w-full">
                Establishments will see your expected hourly rate, but their
                posting may offer a higher/lower offer for a gig, you choose
                whether to accept or not at time of posting.
              </div>
              <div className="flex flex-col mt-10 max-w-full text-xs w-[639px] max-md:mt-10">
                <div className="flex gap-4 justify-between px-5 py-2 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/tick-circle-solid.png"
                    className="my-auto aspect-square w-[23px]"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-black text-start max-md:max-w-full">
                      Setup Hourly Rates
                    </div>
                    <div className="mt-2 text-zinc-500 text-start pl-10 max-md:max-w-full">
                      {" "}
                      /hr
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-10 text-xl leading-9 text-left text-black capitalize max-md:mt-10 max-md:max-w-full} ${style.header}`}
                >
                  Set up the Payment Account
                </div>
                <div className="mt-1 text-neutral-600 text-left max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="px-5 py-2 mt-6 mb-0 text-black text-start bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                  <div>Bank Name</div>
                  <input
                    className="border-none outline-none w-full pt-2"
                    type="text"
                  />
                </div>
                <div className="px-5 py-2 mt-3.5 mb-0 text-black text-start bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                  <div>Account Holder’s Name</div>
                  <input
                    className="border-none outline-none w-full pt-2"
                    type="text"
                  />
                </div>
                <div className="px-5 py-2 mt-3.5 mb-0 text-black text-start bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                  <div>Bank Code</div>
                  <input
                    className="border-none outline-none w-full pt-2"
                    type="text"
                  />
                </div>
                <div className="px-5 py-2 mt-3.5 mb-0 text-black text-start bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                  <div>Account Number</div>
                  <input
                    className="border-none outline-none w-full pt-2"
                    type="text"
                  />
                </div>
                <button
                  
                  className="justify-center px-5 py-4 mt-5 text-sm text-center text-black whitespace-nowrap bg-amber-300 rounded-[92.207px] max-md:max-w-full"
                >
                  Save & Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  );
}

export default PaymentSetup;
