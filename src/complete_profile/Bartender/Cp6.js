import { Link } from "react-router-dom";
import Wrappers from "./Wrappers";
import styles from './cp.module.css'
function Cp6() {
    return (
        <Wrappers>
            <div className="flex relative justify-center items-center self-center px-16  py-12 mt-10 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center mb-36 max-w-full w-[1293px]  max-md:my-10">
                    <div className={`text-2xl leading-9 text-center text-black whitespace-nowrap} ${styles.header}`}>
                        Background Check
                    </div>
                    <div className="self-stretch mt-1 text-[14px] text-center text-neutral-600 max-md:max-w-full">
                        The background check is optional and do not feel obligated to enter
                        your SS# now. You will have a higher certification to the employers if
                        we do provide a background check.
                    </div>
                    <div className="flex gap-4 px-5  py-3.5 mt-[75px] max-w-full text-xs bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] w-[639px] max-md:flex-wrap max-md:mt-10">
                        <img
                            loading="lazy"
                            src="/images/completeProfile/tick-circle-solid.png"
                            className="my-auto aspect-square w-[22px]"
                        />
                        <div className="flex flex-col flex-1 max-md:max-w-full">
                            <div className="text-black text-left max-md:max-w-full">
                                SS Number (optional)
                            </div>
                            <div className="mt-2 text-left text-zinc-500 max-md:max-w-full">
                                <input className="border-none outline-none w-full" type="text" placeholder="Enter your SS Number" />

                            </div>
                        </div>
                    </div>
                    <Link to={"/cp7"} className="justify-center px-5 py-5 mt-9 max-w-full text-sm text-center text-black bg-amber-300 rounded-[92.207px] w-[639px] max-md:max-w-full">
                        Save & Next
                    </Link>
                </div>
            </div>
        </Wrappers>
    );

} export default Cp6;