import * as React from "react";

export default function FilterEst() {
  return (
    <div className=" absolute z-10 left-[250px] flex flex-col justify-center  px-4 py-5 text-base text-black whitespace-nowrap rounded-3xl border border-solid bg-neutral-50 border-stone-200 max-w-[315px]">
      <div className="flex flex-col items-start  py-3 pr-20 pl-3 w-full bg-white rounded-xl">
        <div className="text-lg font-medium text-red-500">Earnings</div>
        <div className="flex gap-3 mt-3 ml-3">
          <input className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" type="checkbox"/>
                    <div className="my-auto">All</div>
        </div>
        <div className="flex gap-3 mt-3 ml-3">
        <input className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" type="checkbox"/>
          <div className="grow my-auto">Earnings Processed</div>
        </div>
        <div className="flex gap-3 mt-3 ml-3">
        <input className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" type="checkbox"/>
          <div className="grow my-auto">Earnings Not Processed</div>
        </div>
      </div>
      <div className="flex flex-col items-start py-3 pr-20 pl-3 mt-4 w-full bg-white rounded-xl">
        <div className="text-lg font-medium text-red-500">Reviews</div>
        <div className="flex gap-3 mt-3 ml-3">
        <input className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" type="checkbox"/>
          <div className="my-auto">All</div>
        </div>
        <div className="flex gap-3 mt-3 ml-3">
        <input className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" type="checkbox"/>
          <div className="grow my-auto">Gigs Reviewed</div>
        </div>
        <div className="flex gap-3 mt-3 ml-3 ">
        <input className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300" type="checkbox"/>
          <div className="grow my-auto">Gigs Not Reviewed</div>
        </div>
      </div>
    </div>
  );
}


