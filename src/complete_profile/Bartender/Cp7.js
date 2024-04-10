import { Link } from "react-router-dom";
import Wrappers from "./Wrappers";
import styles from './cp.module.css'
function Cp7() {
    return (
        <Wrappers>
            <div className="flex relative justify-center items-center self-center px-16 py-12 mt-14 w-full rounded-3xl bg-white bg-opacity-80 max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center mt-7 mb-1.5 max-w-full w-[1213px]">
                    <div className={`text-2xl leading-9 text-center text-black whitespace-nowrap} ${styles.header}`}>
                        Payment setup
                    </div>
                    <div className="self-stretch mt-1.5 text-base text-center text-neutral-600 max-md:max-w-full">
                        Establishments will see your expected hourly rate, but their posting
                        may offer a higher/lower offer for a gig, you choose whether to accept
                        or not at time of posting.
                    </div>
                    <div className="flex flex-col mt-16 max-w-full text-xs w-[639px] max-md:mt-10">
                        <div className="flex gap-4 justify-between px-5 py-3.5 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/tick-circle-solid.png"
                                className="my-auto aspect-square w-[23px]"
                            />
                            <div className="flex flex-col flex-1 max-md:max-w-full">
                                <div className="text-black text-start max-md:max-w-full">
                                    Setup Hourly Rates
                                </div>
                                <div className="mt-2 text-zinc-500 text-start pl-10 max-md:max-w-full"> /hr</div>
                            </div>
                        </div>
                        <div className={`mt-16 text-xl leading-9 text-left text-black capitalize max-md:mt-10 max-md:max-w-full} ${styles.header}`}>
                            Set up the Payment Account
                        </div>
                        <div className="mt-2.5 text-neutral-600 text-left max-md:max-w-full">
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                        <div className="px-5 pt-3.5 pb-4 mt-6 mb-0 text-black text-start bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                            <div >
                                Bank Name
                            </div>
                            <input className="border-none outline-none w-full pt-2" type="text" />
                        </div>
                        <div className="px-5 pt-3.5 pb-4 mt-3.5 mb-0 text-black text-start bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                            <div >
                                Account Holder’s Name
                            </div>
                            <input className="border-none outline-none w-full pt-2" type="text" />
                        </div>
                        <div className="px-5 pt-3.5 pb-4 mt-3.5 mb-0 text-black text-start bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                            <div >
                                Bank Code
                            </div>
                            <input className="border-none outline-none w-full pt-2" type="text" />
                        </div>
                        <div className="px-5 pt-3.5 pb-4 mt-3.5 mb-0 text-black text-start bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:max-w-full">
                            <div >
                                Account Number
                            </div>
                            <input className="border-none outline-none w-full pt-2" type="text" />
                        </div>
                        <Link to={"/cp8"} className="justify-center px-5 py-5 mt-3.5 text-sm text-center text-black whitespace-nowrap bg-amber-300 rounded-[92.207px] max-md:max-w-full">
                            Finish
                        </Link>
                    </div>
                </div>
            </div>
        </Wrappers>
    );

} export default Cp7;