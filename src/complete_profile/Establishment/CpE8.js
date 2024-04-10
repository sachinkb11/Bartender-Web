import { useState } from "react";
import Wrappers from "../Bartender/Wrappers";
import styles from './CpE.module.css'
import { Link } from "react-router-dom";
function CpE8() {
    return (
        <Wrappers>
            <div className="flex relative justify-center items-center self-center px-16 pt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center mb-10 max-w-full w-full max-md:mb-10">
                    <div className={`text-2xl leading-9 text-center text-black max-md:max-w-full} ${styles.header}`}>
                        How Many Establishments Do You Own?
                    </div>
                    <div className="self-stretch mt-2.5 text-base text-neutral-600 w-full max-md:max-w-full">
                        Add the establishment where you want to use Bartender service
                    </div>
                    <div>
                        <div className="flex gap-5 justify-between self-center mt-28 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/barBottle.png"
                                className="max-w-full aspect-[0.98] w-[112px]"
                            />
                            <div className="flex flex-col flex-1 my-auto">
                                <div className="flex  justify-between mr-2  text-2xl leading-7 text-black whitespace-nowrap">
                                    <div className={`grow my-auto} ${styles.header}`}>ABS Restro</div>
                                    <div>

                                        <img
                                            loading="lazy"
                                            src="/images/completeProfile/greenVerify.png"
                                            className="mt-1  mr-5 w-[22px]"
                                        />
                                    </div>
                                </div>
                                <div className=" text-lg ml-1 text-start leading-7 text-red-500"> Edit details</div>
                            </div>
                        </div>
                        <div className="flex gap-5  justify-between mt-20 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/dinner.png"
                                className="max-w-full aspect-[1.10] w-[112px]"
                            />
                            <div className="flex flex-col flex-1 my-auto">
                                <div className={`text-2xl mt-4 leading-7 ml-1 text-black whitespace-nowrap ${styles.header}`}>
                                    Establishment 2
                                </div>
                                <div className=" text-lg text-left ml-1 leading-7 text-red-500">
                                    Add details
                                    <div className=" whitespace-nowrap text-neutral-400">(You can add later)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={"/CurrentGigsEstablishment"} className="justify-center px-5 py-5 mt-32 w-[60%] text-sm text-center text-white bg-red-500 rounded-[92.207px] max-md:mt-10 max-md:max-w-full">
      Go To Dashboard
    </Link>
                </div>
            </div>
        </Wrappers>
    );
} export default CpE8;