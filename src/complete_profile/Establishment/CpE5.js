import { Link } from "react-router-dom";
import Wrappers from "../Bartender/Wrappers";
import styles from './CpE.module.css'
function CpE5() {


    return (
        <Wrappers>
            <div className="flex relative justify-center items-center self-center px-16  py-12 w-full max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col mx-[50px] items-center max-w-full w-[1300px]">
                    <div className={`text-2xl leading-9 text-center text-black} ${styles.header}`}>
                        Location
                    </div>
                    <div className="text-base whitespace-nowrap text-neutral-600">
                        Lorem Ipsum Dolar
                    </div>
                    <div className="flex justify-center items-center px-16 py-7 mt-14 max-w-full text-center rounded-xl border border-dashed bg-red-500 bg-opacity-10 border-[color:var(--ff-3333,#F33)] leading-[153.3%] w-[80%] h-[130px] max-md:px-5 max-md:mt-10">
                        <div className="flex flex-col items-center max-w-full w-[164px]">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/redLoction.png"
                                className="aspect-square w-[31px]"
                            />
                            <div className="self-stretch mt-2.5 text-xs text-black">
                                Auto Locate Your Location
                            </div>
                            <div className="mt-2 text-xs text-neutral-400">
                                Supports JPEG, PNG, PDF
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-base font-bold text-black">OR</div>
                    <div className="flex gap-5 justify-between self-stretch mt-7 text-xs max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col flex-1 px-5 py-3.5 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                            <div className="text-black text-left max-md:max-w-full">Street Name</div>
                            <div className="mt-2 text-zinc-500 text-start max-md:max-w-full">
                                <input className="border-none outline-none w-full" type="text" placeholder="Street Name" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 px-5 py-3.5 whitespace-nowrap bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                            <div className="text-black text-left max-md:max-w-full">City</div>
                            <div className="mt-2 text-zinc-500 text-left max-md:max-w-full">
                                <input className="border-none outline-none w-full" type="text" placeholder="City" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between self-stretch mt-6 text-xs max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col flex-1 px-5 py-3.5 whitespace-nowrap bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                            <div className="text-black text-left max-md:max-w-full">State</div>
                            <div className="mt-2 text-zinc-500 text-left max-md:max-w-full">
                                <input className="border-none outline-none w-full" type="text" placeholder="State" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 px-5 py-3.5 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                            <div className="text-black text-left max-md:max-w-full">Postal Code</div>
                            <div className="mt-2 text-zinc-500 text-left max-md:max-w-full">
                                <input className="border-none outline-none w-full" type="text" placeholder="Postal Code" />

                            </div>
                        </div>
                    </div>
                    <Link to={"/CpE6"} className="justify-center px-5 py-5 mt-20 w-[60%] text-sm text-center text-white bg-red-500 rounded-[92.207px] max-md:mt-10 max-md:max-w-full">
                        Save & Next
                    </Link>
                </div>
            </div>
        </Wrappers>
    );

} export default CpE5;