import React from "react";

function ReviewFilter() {
  return (
    <div className="flex flex-col justify-center px-4 py-6 text-base text-black rounded-3xl border border-solid bg-neutral-50 border-zinc-400 max-w-[375px]">
      <div className="flex flex-col items-start py-4 pr-20 pl-3 w-full bg-white rounded-xl">
        <div className="text-lg font-medium text-red-500">Reviews</div>
        <div className="flex gap-3 mt-4 ml-3 whitespace-nowrap">
          <input
            className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300"
            type="checkbox"
          />

          <div className="my-auto">All</div>
        </div>
        <div className="flex gap-3 mt-3 ml-3">
          <input
            className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300"
            type="checkbox"
          />

          <div className="flex-auto my-auto">Reviews Received</div>
        </div>
        <div className="flex gap-3 mt-3 ml-3">
          <input
            className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300"
            type="checkbox"
          />
          <div className="flex-auto my-auto">Reviews Not Received</div>
        </div>
      </div>
    </div>
  );
}

export default ReviewFilter;
