import { Link } from "react-router-dom";
import Wrappers from "../Bartender/Wrappers";
import styles from './CpE.module.css'
function CpE3() {


    return (
        <Wrappers>
            <div className="flex relative justify-center items-center self-center px-16 py-10  w-[85%] text-xs max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[1299px]">
                    <div className={`self-center text-2xl leading-9 text-center text-black max-md:max-w-full} ${styles.header}`}>
                        Tell Us More About Your Establishment
                    </div>
                    <div className="self-center  text-base whitespace-nowrap text-neutral-600">
                        Lorem Ipsum Dolar
                    </div>
                    <div className="flex gap-4 justify-between px-5 py-3.5 mt-8 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="/images/completeProfile/building.png"
                            className="my-auto aspect-square w-[22px]"
                        />
                        <div className="flex flex-col flex-1 max-md:max-w-full">
                            <div className="text-black text-left max-md:max-w-full">
                                Name of Establishment
                            </div>
                            <div className="mt-2 text-zinc-500 text-left max-md:max-w-full">
                                <input className="border-none outline-none" type="text" placeholder="Name of Establishment" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between items-start px-5 pt-3.5 mt-6 bg-white rounded-3xl border-gray-200 border-solid border-[0.922px] max-md:flex-wrap max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="/images/completeProfile/pen.png"
                            className="aspect-[1.04] w-[23px]"
                        />
                        <div className="flex flex-col flex-1 max-md:max-w-full">
                            <div className="text-black text-left max-md:max-w-full">
                                Write about your Establishment
                            </div>
                            <div className="mt-2 text-zinc-500 text-left max-md:max-w-full">
                                <textarea  className="border-none outline-none" rows="6" cols="110">
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="self-end mt-4 mr-3 text-base text-neutral-600 max-md:mr-2.5">
                        0/200
                    </div>
                    <div className="flex  justify-between  mt-5 max-md:flex-wrap max-md:max-w-full">
                        <div className="flex gap-4 justify-between w-[420px] px-5 py-3.5 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/drink_glass.png"
                                className="my-auto aspect-square w-[23px]"
                            />
                            <div className="flex flex-col  flex-1 max-md:max-w-full">
                                <div className="text-black text-left max-md:max-w-full">
                                    Type of service
                                </div>
                                <div className="mt-2 text-zinc-500 text-left max-md:max-w-full">
                                    <input className="border-none outline-none" type="text" placeholder="Type of service" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-between w-[420px] px-5 py-3.5 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/dressCode.png"
                                className="my-auto aspect-square w-[22px]"
                            />
                            <div className="flex flex-col flex-1 max-md:max-w-full">
                                <div className="text-black text-left max-md:max-w-full">
                                    Dress Code (Optional)
                                </div>
                                <div className="mt-2 text-zinc-500 text-left max-md:max-w-full">
                                    <input className="border-none outline-none" type="text" placeholder="Dress Code (Optional)" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 self-start px-5 py-3.5 mt-6 w-[420px] bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="/images/completeProfile/tick-circle-solid.png"
                            className="my-auto aspect-square w-[23px]"
                        />
                        <div className="flex flex-col flex-1 max-md:max-w-full">
                            <div className="text-black text-left max-md:max-w-full">
                                POS Software (Optional)
                            </div>
                            <div className="mt-2 text-left text-zinc-500 max-md:max-w-full">
                                <input className="border-none outline-none" type="text" placeholder="POS Software (Optional)" />
                            </div>
                        </div>
                    </div>
                    <Link to={"/CpE4"} className="justify-center self-center px-5 py-5 mt-16 w-[60%] text-sm text-center text-white bg-red-500 rounded-[92.207px] max-md:mt-10 max-md:max-w-full">
                        Save & Next
                    </Link>
                </div>
            </div>
        </Wrappers>
    );

} export default CpE3;