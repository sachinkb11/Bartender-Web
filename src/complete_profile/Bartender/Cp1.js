import { Link } from "react-router-dom";
import Wrappers from "./Wrappers";
import styles from './cp.module.css'
function Cp1() {
    return (
        <Wrappers>
            <div className="flex flex-col mt-10 items-center ">
                <div className={styles.header}>
                    Tell Us More About You John
                </div>
                <div className="mt-3 text-base whitespace-nowrap text-neutral-600">
                    What will be your title/designation?
                </div>
                <img
                    loading="lazy"
                    src="/images/completeProfile/PersonGroup.png"
                    className="mt-8 max-w-full aspect-square w-[124px] max-md:mt-10"
                />
                <div className="flex justify-center gap-4  self-stretch mt-8 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex  items-center self-stretch px-3 py-2 w-[450px] h-[65px]  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full ">
                        <img
                            loading="lazy"
                            src="/images/completeProfile/pen.png"
                            className="my-auto aspect-[1.03] w-[25px]"
                        />
                        <div className="flex flex-col flex-1 max-md:max-w-full">
                            <div className="text-black text-left pl-4 max-md:max-w-full">Curate Your Bio</div>
                            <div className="mt-1 lowercase text-left pl-4 text-zinc-500 max-md:max-w-full">
                                <input className="outline-none border-none" type="text" placeholder="Curate Your Bio"></input>
                            </div>
                        </div>

                    </div>

                    <div className="flex  items-center self-stretch px-3 py-2 w-[450px] h-[65px]  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full ">

                        <img
                            loading="lazy"
                            src="/images/completeProfile/drink_glass.png"
                            className="my-auto aspect-[1.03] w-[25px]"
                        />
                        <div className="flex flex-col flex-1 max-md:max-w-full">
                            <div className="text-black text-left pl-4 max-md:max-w-full">Years of Experience</div>
                            <div className="mt-1 lowercase text-left pl-4 text-zinc-500 max-md:max-w-full">
                                <input className="outline-none border-none" type="text" placeholder="Your Years of Experience"></input>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex gap-5 justify-between self-stretch mt-1.5 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex  items-center self-stretch px-3 py-2 w-[450px] h-[65px]  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full ">

                        <img
                            loading="lazy"
                            src="/images/completeProfile/location.png"
                            className="my-auto aspect-[1.03] w-[25px]"
                        />
                        <div className="flex flex-col flex-1 max-md:max-w-full">
                            <div className="text-black text-left pl-4 max-md:max-w-full"> Based From Which City, State?</div>
                            <div className="mt-1 lowercase text-left pl-4 text-zinc-500 max-md:max-w-full">
                                <input className="outline-none border-none" type="text" placeholder="Enter Your Loaction"></input>
                            </div>
                        </div>

                    </div>
                    <div className="flex  items-center self-stretch px-3 py-2 w-[450px] h-[65px]  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full ">

                        <img
                            loading="lazy"
                            src="/images/completeProfile/location.png"
                            className="my-auto aspect-[1.03] w-[25px]"
                        />
                        <div className="flex flex-col flex-1 max-md:max-w-full">
                            <div className="text-black text-left pl-4 max-md:max-w-full"> Zip Code</div>
                            <div className="mt-1 lowercase text-left pl-4 text-zinc-500 max-md:max-w-full">
                                <input className="outline-none border-none" type="text" placeholder="Enter Your Zip Code"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex  items-center self-stretch px-3 py-2 w-[450px] h-[65px]  mt-3.5 text-sm bg-white border-gray-200 border-solid border-[1.24px] rounded-[124.047px] max-md:flex-wrap max-md:px-5 max-md:max-w-full ">

                    <img
                        loading="lazy"
                        src="/images/completeProfile/celender.png"
                        className="my-auto aspect-[1.03] w-[25px]"
                    />
                    <div className="flex flex-col flex-1 max-md:max-w-full">
                        <div className="text-black text-left pl-4 max-md:max-w-full">Birthdate</div>
                        <div className="mt-1 lowercase text-left pl-4 text-zinc-500 max-md:max-w-full">
                            <input className="outline-none border-none" type="text" placeholder="Enter Your Birthdate"></input>
                        </div>
                    </div>
                </div>

                <Link to={"/cp2"} className="justify-center p-3 mt-10 mb-5 w-[60%] text-small text-center text-black bg-amber-300 rounded-[124.047px] max-md:px-5 max-md:max-w-full my-3 ">
                    Save & Next
                </Link>
            </div>
        </Wrappers>
    );

} export default Cp1;