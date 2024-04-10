import * as React from "react";
import { Link } from "react-router-dom";

export default function PopConfirmation() {
  return (
   
    <div className="flex absolute bottom-[-450px] left-[250px] z-50 flex-col px-11 py-8 text-center bg-white rounded-3xl shadow-xl mt-10 ml-10 max-w-[432px] ">
      <div className="self-center text-xl font-medium leading-8 text-black">
        Are you sure you want to
        <br />
        cancel your gig?
      </div>
      <div className="flex gap-2.5 mt-8 text-lg capitalize">
        <Link
          className="justify-center px-12 py-4 text-black whitespace-nowrap bg-white border border-amber-300 border-solid rounded-[121px]"
          to="/EstaCancel"

        >
          Cancel
        </Link>
       
        <Link
          className="justify-center px-7 py-4 text-black bg-amber-300 rounded-[121px]"
          to="/GigsNewApply"
        >
          Yes, I’m Sure
        </Link>
      </div>
    </div>
  );
}
