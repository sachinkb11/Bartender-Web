import * as React from "react";
import styles from "../dashboard.module.css";

export default function Notification(props) {

  
  return (
      
      <div className=" absolute top-20 right-[100px] z-20 overflow-y-scroll h-[400px] w-[300px]  flex flex-col mt-5 pt-9 ml-20 pb-7  bg-gray-100 rounded-3xl border border-solid border-neutral-200 max-w-[390px]">
      <div className="flex gap-5 justify-between self-center px-5 w-full text-2xl leading-8 whitespace-nowrap max-w-[326px] text-neutral-700">
        <div className={`flex-auto} ${styles.header}`}>Notifications</div>
       
        <button className="shrink-0 self-start w-5 aspect-square">
          &#10005;
        </button>
      </div>
      <div className="flex flex-col px-7 py-3 mt-5  w-full bg-red-100">
        <div className="flex gap-2.5 self-start ">
          <div className="flex justify-center items-center px-2.5 bg-red-500 h-[42px] rounded-[100px] w-[42px]">
            <img
              loading="lazy"
              src="/images/completeProfile/bell.png"
              className="aspect-[0.69] w-[22px]"
            />
          </div>
          <div className="flex flex-col flex-1 self-start mt-1">
            <div className="text-xs text-black">Lore, Ipsum</div>
            <div className=" text-xs text-neutral-400">2 hr ago</div>
          </div>
        </div>
        <div className="mt-2.5 text-xs font-light text-black">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry.
        </div>
      </div>

      <div className="flex z-100 flex-col px-8 mt-2.5 w-full">
        <div className="flex gap-2.5 self-start">
          <div className="flex justify-center items-center px-2.5 bg-neutral-400 h-[42px] rounded-[100px] w-[42px]">
            <img
              loading="lazy"
              src="/images/completeProfile/bell.png"
              className="aspect-[0.69] w-[22px]"
            />
          </div>
          <div className="flex flex-col flex-1 self-start mt-2.5">
            <div className="text-xs text-black">Jane Doe</div>
            <div className=" text-xs text-neutral-400">2 hr ago</div>
          </div>
        </div>
        <div className="mt-2.5 text-xs font-light text-black">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry.
        </div>
      </div>
      <div className="mt-4 w-full border border-solid bg-neutral-300 border-neutral-300 min-h-[1px]" />

      <div className="flex z-100 flex-col px-8 mt-2.5 w-full">
        <div className="flex gap-2.5 self-start">
          <div className="flex justify-center items-center px-2.5 bg-neutral-400 h-[42px] rounded-[100px] w-[42px]">
            <img
              loading="lazy"
              src="/images/completeProfile/bell.png"
              className="aspect-[0.69] w-[22px]"
            />
          </div>
          <div className="flex flex-col flex-1 self-start mt-2.5">
            <div className="text-xs text-black">Jane Doe</div>
            <div className=" text-xs text-neutral-400">2 hr ago</div>
          </div>
        </div>
        <div className="mt-2.5 text-xs font-light text-black ">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry.
        </div>
      </div>
      <div className="mt-4 w-full border border-solid bg-neutral-300 border-neutral-300 min-h-[1px]" />

      <div className="flex z-100 flex-col px-8 mt-2.5 w-full">
        <div className="flex gap-2.5 self-start">
          <div className="flex justify-center items-center px-2.5 bg-neutral-400 h-[42px] rounded-[100px] w-[42px]">
            <img
              loading="lazy"
              src="/images/completeProfile/bell.png"
              className="aspect-[0.69] w-[22px]"
            />
          </div>
          <div className="flex flex-col flex-1 self-start mt-2.5">
            <div className="text-xs text-black">Jane Doe</div>
            <div className=" text-xs text-neutral-400">2 hr ago</div>
          </div>
        </div>
        <div className="mt-2.5 text-xs font-light text-black">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry.
        </div>
      </div>
    </div>
  );
}
