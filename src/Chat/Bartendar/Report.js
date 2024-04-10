import React from "react";

export default function Report() {
  return (
    <div className=" fixed top-[100px] right-[340px] flex flex-col items-start pt-5 pl-5 pb-5 text-base bg-white border-2 rounded-3xl max-w-[393px]">
      <div className="text-xl font-medium  text-black">
        Are you sure you want to report Josephine Arden?
      </div>
      <div className="flex gap-4 mt-5  text-black">
        <input
          type="checkbox"
          className="shrink-0 rounded-xl border border-solid border-stone-300 h-[27px] w-[27px]"
        />

        <div className="flex-auto">Lorem Ipsum Ipsum Dolar</div>
      </div>
      <div className="flex gap-4 mt-5 text-black">
        <input
          type="checkbox"
          className="shrink-0 rounded-xl border border-solid border-stone-300 h-[27px] w-[27px]"
        />

        <div className="flex-auto">Lorem Ipsum Ipsum Dolar</div>
      </div>
      <div className="flex gap-4 mt-5  text-black">
        <input
          type="checkbox"
          className="shrink-0 rounded-xl border border-solid border-stone-300 h-[27px] w-[27px]"
        />

        <div className="flex-auto">Lorem Ipsum Ipsum Dolar</div>
      </div>
      <div className="flex gap-4 mt-5  text-black">
        <input
          type="checkbox"
          className="shrink-0 rounded-xl border border-solid border-stone-300 h-[27px] w-[27px]"
        />
        <div className="flex-auto">Lorem Ipsum Ipsum Dolar</div>
      </div>
      <div className="flex gap-4 mt-5  text-black">
        <input
          type="checkbox"
          className="shrink-0 rounded-xl border border-solid border-stone-300 h-[27px] w-[27px]"
        />

        <div className="flex-auto">Lorem Ipsum Ipsum Dolar</div>
      </div>
      <div className="flex gap-4 mt-5 text-black">
        <input
          type="checkbox"
          className="shrink-0 rounded-xl border border-solid border-stone-300 h-[27px] w-[27px]"
        />

        <div className="flex-auto self-start mt-3">Lorem Ipsum Ipsum Dolar</div>
      </div>
      <div className="flex gap-2 mt-10 text-lg  text-center capitalize">
        <button className="justify-center px-5 py-3 text-black whitespace-nowrap bg-white border border-amber-300 border-solid rounded-[110px]">
          Cancel
        </button>
        <button className="justify-center px-5 py-3 text-white bg-red-500 rounded-[110px]">
          Submit Report
        </button>
      </div>
    </div>
  );
}
