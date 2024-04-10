import { Link } from "react-router-dom";
import Wrappers from "./Wrappers";
import styles from './cp.module.css'
function Cp2() {
    return (
        <Wrappers>
            <div className="self-center px-5 mt-20  w-full max-w-[585px] max-md:max-w-full">
                <div className={`self-stretch text-2xl leading-9 text-center text-black} ${styles.header}`}>
                    Your Designation
                </div>
                <div className="mt-2.5 text-base whitespace-nowrap text-neutral-600">
                    Select al that apply.
                </div>

                <div className="px-5 mt-10 max-w-[585px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col px-6 py-7 mx-auto text-lg font-medium tracking-widest leading-8 text-center text-red-500 capitalize whitespace-nowrap rounded-2xl border-solid bg-red-500 bg-opacity-20 border-[3.032px] border-[color:var(--ff-3333,#F33)] h-[150px] w-[150px] max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="/images/completeProfile/cocktail-glass.png"
                                    className="self-center w-15 aspect-[1.01]"
                                />
                                <div className="mt-1">Bartender</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col px-3 py-5 mx-auto text-lg font-medium tracking-widest leading-8 text-center capitalize whitespace-nowrap bg-white rounded-2xl border-solid shadow-lg border-[1.516px] border-zinc-400 h-[150px] text-zinc-400 w-[150px] max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="/images/completeProfile/barback.png"
                                    className="self-center w-20 aspect-[1.01]"
                                />
                                <div className="mt-4">Bar-Back</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col px-7 py-5  mx-auto text-lg font-medium tracking-widest leading-8 text-center capitalize whitespace-nowrap bg-white rounded-2xl border-solid shadow-lg border-[1.516px] border-zinc-400 h-[150px] text-zinc-400 w-[150px] max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="/images/completeProfile/shutterstock.png"
                                    className="self-center w-20 aspect-[1.01]"
                                />
                                <div className="mt-4">Server</div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center ml-4 py-4 mt-12 mb-20 text-sm text-center text-black bg-amber-300 rounded-[92.207px] max-md:max-w-full">
                        
                        <Link to={"/cp3"}>Save & Next</Link>
                    </div>
                </div>

            </div>
        </Wrappers>
    );

} export default Cp2;