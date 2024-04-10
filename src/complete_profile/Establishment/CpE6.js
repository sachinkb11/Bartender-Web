import { Link } from "react-router-dom";
import Wrappers from "../Bartender/Wrappers";
import styles from './CpE.module.css'
function CpE6() {


    return (
        <Wrappers>
            <div className="flex relative justify-center items-center self-center px-16 py-12 w-full  max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center mx-20 max-w-full w-[1025px]">
                    <div className={`text-2xl leading-9 text-center text-black} ${styles.header}`}>
                        Establishment Photos
                    </div>
                    <div className=" text-base whitespace-nowrap text-neutral-600">
                        Lorem Ipsum Dolar
                    </div>
                    <div className="flex justify-center items-center self-stretch px-16 py-5 mt-16 text-center rounded-xl border border-dashed bg-red-500 bg-opacity-10 border-[color:var(--ff-3333,#F33)] leading-[153.3%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col max-w-full w-[258px]">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/redLoction.png"
                                className="self-center aspect-square w-[31px]"
                            />
                            <div className="mt-2.5 text-xs text-black">
                                <span className="text-red-500 underline"> Browse</span>
                                <span> your file</span>
                            </div>
                            <div className="mt-2.5 text-xs text-neutral-400">
                                Supports JPEG, PNG, PDF
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2.5 self-start mt-4 max-w-full w-[342px]">
                        <img
                            loading="lazy"
                            src="/images/completeProfile/bar1.png"
                            className="flex-1 shrink-0  aspect-[0.98]"
                        />
                        <img
                            loading="lazy"
                            src="/images/completeProfile/bar2.png"
                            className="flex-1 shrink-0 w-full aspect-[0.98]"
                        />
                        <img
                            loading="lazy"
                            src="/images/completeProfile/bar3.png"
                            className="flex-1 shrink-0 w-full aspect-[0.98]"
                        />
                    </div>
                    <Link to={"/CpE7"} className="justify-center px-5 py-5 mt-40 w-[73%] text-sm text-center text-white bg-red-500 rounded-[92.207px] max-md:mt-10 max-md:max-w-full">
                        Save & Next
                    </Link>
                </div>
            </div>
        </Wrappers>
    );

} export default CpE6;