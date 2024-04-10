import * as React from "react";
import styles from '../dashboard.module.css'
import { Link } from "react-router-dom";

export default function Review() {
    return (
        <div className="flex flex-col m-auto items-center my-5 pb-5 max-w-2xl rounded-3xl bg-neutral-50">
            <div className="flex overflow-hidden relative flex-col items-center self-stretch rounded-t-xl pt-5 pr-5 pb-12 pl-20 w-full min-h-[143px] max-md:pl-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    src="/images/completeProfile/review_back_img.png"
                    className="object-cover absolute inset-0 size-full"
                />
                <span className="object-cover absolute inset-0 size-full">&#10005;</span>
                <div className="relative self-center mt-1 text-lg text-white">Rate</div>
                <div className={`relative text-2xl text-center text-amber-300 max-md:max-w-full} ${styles.header}`}>
                    Estelle Establishment
                </div>
                <div className="absolute text-2xl z-20 right-5 text-white max-md:max-w-full">
                   
                    <Link to={"/PastGigs"}>&#10005;</Link>
                </div>
            </div>
            <div className="flex z-10 flex-col items-center px-16 pt-3.5 pb-1.5 -mt-2.5 w-full whitespace-nowrap bg-white rounded-lg max-w-[617px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col items-center max-w-full w-[280px]">
                    <div className="text-base text-black">Overall</div>
                    <div className="mt-1.5 text-xs text-zinc-500">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <img
                        loading="lazy"
                        src="/images/completeProfile/Star1.png"
                        className="mt-1.5 w-full aspect-[6.25]"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center px-16 py-2.5 mt-5 w-full whitespace-nowrap bg-white rounded-lg max-w-[617px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col items-center max-w-full w-[280px]">
                    <div className="text-base text-black">Experience</div>
                    <div className="text-xs text-zinc-500">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <img
                        loading="lazy"
                        src="/images/completeProfile/Star2.png"
                        className="mt-2 w-full aspect-[6.25]"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center px-16 py-2.5 mt-4 w-full whitespace-nowrap bg-white rounded-lg max-w-[617px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col items-center max-w-full w-[280px]">
                    <div className="text-base text-black">Staff</div>
                    <div className="mt-1.5 text-xs text-zinc-500">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <img
                        loading="lazy"
                        src="/images/completeProfile/Star3.png"
                        className="mt-2 w-full aspect-[6.25]"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center px-16 py-2.5 mt-4 w-full whitespace-nowrap bg-white rounded-lg max-w-[617px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col items-center max-w-full w-[280px]">
                    <div className="text-base text-black">Value</div>
                    <div className="mt-1.5 text-xs text-zinc-500">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <img
                        loading="lazy"
                        src="/images/completeProfile/Star4.png"
                        className="mt-2.5 w-full aspect-[6.25]"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center px-16 pt-5 pb-20 mt-5 w-full bg-white rounded-lg border border-gray-200 border-solid max-w-[619px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col mb-2">
                    <div className="self-center text-sm text-center text-black">
                        Write Detailed Review
                    </div>
                    <div className="mt-2.5 text-xs whitespace-nowrap text-center text-zinc-500">
                        <textarea className="border-none outline-none " name="w3review" rows="4" cols="50">
                            Lorem ipsum dolor sit amet consectetur ipsum dolor .
                        </textarea>
                    </div>
                </div>
            </div>
            <Link to={"/PastGigs"} className="justify-center p-4 mt-8 w-full text-base text-center text-black bg-amber-300 max-w-[619px] rounded-[85.613px] max-md:max-w-full">
                Submit Review
            </Link>
        </div>
    );
}


