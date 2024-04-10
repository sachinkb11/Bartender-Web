import * as React from "react";
import styles from '../dashboard.module.css'
import { Link } from "react-router-dom";

export default function SuccessMsg(props) {
    return (
        <div className="flex justify-center">

        <div className="flex flex-col mt-5 max-w-2xl bg-white rounded-3xl max-md:pl-5">
         <Link to={"/CurrentGigs"}  className="self-end aspect-square text-3xl">
          &#10005;
        </Link>
        <img
          loading="lazy"
          src="/images/completeProfile/Success_message.png"
          className="self-center mr-5 h-[600px] max-w-full aspect-[0.6] w-[410px]"
        />
      </div>
        </div>
    );
}


