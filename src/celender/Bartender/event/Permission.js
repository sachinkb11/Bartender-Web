import * as React from "react";

export default function Permission() {
  return (
    <div className="flex flex-col px-11 py-8 mt-10 ml-10 text-center bg-white shadow-xl rounded-3xl max-w-[432px]">
      <div className="self-center text-xl font-medium leading-8 text-black">
        Are you sure you want to
        <br />
        cancel your gig?
      </div>
      <div className="flex gap-2.5 mt-8 text-lg capitalize">
        <button className="justify-center px-12 py-4 text-black whitespace-nowrap bg-white border border-amber-300 border-solid rounded-[121px]">
          Cancel
        </button>
        <button className="justify-center px-7 py-4 text-black bg-amber-300 rounded-[121px]">
          Yes, I’m Sure
        </button>
      </div>
    </div>
  );
}

