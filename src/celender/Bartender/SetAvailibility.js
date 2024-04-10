import React from "react";
import styles from "../celender.module.css";
function SetAvailibility() {
  return (
    <div className=" absolute  left-[25%]  flex flex-col pt-2 pb-8 bg-white shadow-2xl rounded-2xl mt-10 ml-10 max-w-[419px]">
      <div className="flex flex-col px-11 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex justify-end">
        <img
            loading="lazy"
            src="/images/completeProfile/cross.png"
            className="shrink-0 self-start w-7 absolute right-3 top-3 aspect-square"
          />  </div>
          <div
            className={`flex-auto self-center text-[23px] mt-8 text-center} ${styles.header}`}
          >
            Set Your Availability
          </div>
         
      
        <div className="relative flex flex-1 flex-auto gap-4 items-center px-5 mt-4 py-1 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
          <img
            loading="lazy"
            src="/images/completeProfile/stop-watch.png"
            className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
          <div className="flex flex-col self-stretch w-full text-[12px] max-md:max-w-full">
            <div className="text-black max-md:max-w-full">Select Time Zone</div>
            <div className="mt-1 text-start text-zinc-500 max-md:max-w-full">
              <input
                className=" border-none outline-none w-full"
                type="text"
                placeholder="Eastern Time (America/New York)"
              />
            </div>
          </div>
          <button
            style={{ fontSize: "20px" }}
            className=" absolute right-4 w-5"
          >
            &#11167;
          </button>
        </div>
        <div className="relative flex flex-1 flex-auto gap-4 items-center px-5 mt-3 py-1 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
          <img
            loading="lazy"
            src="/images/completeProfile/celender.png"
            className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
          <div className="flex flex-col self-stretch w-full text-[12px] max-md:max-w-full">
            <div className="text-black max-md:max-w-full">Select Month</div>
            <div className="mt-1 text-start text-zinc-500 max-md:max-w-full">
              <input
                className=" border-none outline-none w-full"
                type="month"
              />
            </div>
          </div>
          {/* <button
            style={{ fontSize: "20px" }}
            className=" absolute right-4 w-5"
          >
            &#11167;
          </button> */}
        </div>
        <div className="mt-7 text-[15px] tracking-wide leading-7  text-black max-md:mt-10 max-md:max-w-full">
          Select the date
        </div>
        <div className="flex gap-3 justify-between items-center self-center mt-3 w-full tracking-wide text-center whitespace-nowrap max-w-[418px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto">
            <div className="text-lg font-semibold leading-7 text-slate-800">
              18
            </div>
            <div className="text-sm leading-7 text-slate-400">Mo</div>
          </div>
          <div className="flex flex-col self-stretch my-auto">
            <div className="text-lg font-semibold leading-7 text-slate-800">
              19
            </div>
            <div className="text-sm leading-7 text-slate-400">Tu</div>
          </div>
          <div className="flex gap-1.5 self-stretch text-red-500">
            <div className="flex flex-col flex-1 px-1 py-2 bg-rose-200 rounded-2xl">
              <div className="text-lg font-semibold ">20</div>
              <div className=" text-sm font-medium ">Wed</div>
            </div>
            <div className="flex flex-col flex-1 px-3 py-2 bg-rose-200 rounded-2xl">
              <div className="text-lg font-bold ">21</div>
              <div className="text-sm font-medium ">Th</div>
            </div>
          </div>
          <div className="flex gap-5 items-start self-stretch my-auto">
            <div className="flex flex-col flex-1">
              <div className="text-lg font-semibold leading-7 text-slate-800">
                22
              </div>
              <div className="text-sm leading-7 text-slate-400">Fr</div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-lg font-semibold leading-7 text-slate-800">
                23
              </div>
              <div className="text-sm leading-7 text-slate-400">Sa</div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-lg font-semibold leading-7 text-slate-800">
                24
              </div>
              <div className="text-sm leading-7 text-slate-400">Su</div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-lg font-semibold leading-7 text-slate-800">
                25
              </div>
              <div className="text-sm leading-7 text-slate-400">Mo</div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-lg font-semibold leading-7 text-slate-800">
                26
              </div>
              <div className="text-sm leading-7 text-slate-400">Tu</div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-[15px] tracking-wide leading-7 text-black max-md:max-w-full">
          Select time
        </div>
        <div className="flex gap-5 justify-between items-start px-10 py-1 mt-4 tracking-wide whitespace-nowrap rounded-xl bg-slate-100 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-sm font-medium leading-7 text-slate-400">
              From
            </div>
            <div className="flex gap-5 mt-1.5 text-xl  leading-6 text-slate-800">
              <div className="flex-auto font-bold">12:00pm</div>
              <button className="pl-2 text-3xl">&#62;</button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-medium leading-7 text-neutral-400">
              To
            </div>
            <div className="mt-1.5 text-xl font-bold leading-6 text-slate-800">
              02:00pm
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="/images/completeProfile/red-plus.png"
          className="self-end mt-1.5  aspect-square w-[25px] max-md:mr-2.5"
        />
      </div>
      <div className="flex flex-col px-11  w-full text-base text-black whitespace-nowrap max-md:px-5 max-md:max-w-full">
        <div className="tracking-wide leading-[186%] max-md:max-w-full">
          Note
        </div>
        <div  />
        <textarea className="shrink-0 mt-2.5 rounded-xl border border-gray-200 border-solid h-[70px] max-md:max-w-full indent-2" name="w3review" ></textarea>
        <div className="justify-center p-4 mt-8 text-center bg-amber-300 rounded-[99.611px] max-md:max-w-full">
          Save
        </div>
      </div>
    </div>
  );
}

export default SetAvailibility;
