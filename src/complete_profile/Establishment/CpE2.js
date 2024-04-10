import { useState } from "react";
import Wrappers from "../Bartender/Wrappers";
import styles from './CpE.module.css'
import { Link } from "react-router-dom";
function CpE1() {
    return (
        <Wrappers>
            <div className="flex relative justify-center items-center self-center px-16 py-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center mb-20 max-w-full w-full max-md:mb-10">
                    <div className={`text-2xl leading-9 text-center text-black max-md:max-w-full} ${styles.header}`}>
                        How Many Establishments Do You Own?
                    </div>
                    <div className="self-stretch mt-2.5 text-base text-neutral-600 w-full max-md:max-w-full">
                        Add the establishment where you want to use Bartender service
                    </div>
                    <div>
                        <div className="flex gap-5 justify-between mt-20 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/dinner2.png"
                                className="max-w-full  w-[108px]"
                            />
                            <div className="flex flex-col flex-1 my-auto">
                                <div className={`text-2xl leading-7 text-left text-black whitespace-nowrap} ${styles.header}`}>
                                    Establishment 1
                                </div>
                                <Link to={"/CpE3"} className="mt-1 text-lg text-left leading-7 text-red-500">
                                    Add details
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-5  justify-between mt-20 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/dinner.png"
                                className="max-w-full aspect-[1.10] w-[112px]"
                            />
                            <div className="flex flex-col flex-1 my-auto">
                                <div className={`text-2xl leading-7 text-black whitespace-nowrap ${styles.header}`}>
                                    Establishment 2
                                </div>
                                <Link to={"/CpE3"} className="mt-1 text-lg text-left leading-7 text-red-500">
                                    Add details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrappers>
    );

} export default CpE1;