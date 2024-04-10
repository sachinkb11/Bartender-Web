import { Link } from "react-router-dom";
import Wrappers from "./Wrappers";
import styles from './cp.module.css'
function Cp4() {
    return (
        <Wrappers>
            <div className="flex relative flex-col items-center self-center px-5 py-10  w-full rounded-3xl max-md:mt-10 max-md:max-w-full">
                <div className={`text-2xl leading-9 text-center text-black} ${styles.header}`}>
                    Links & Documents
                </div>
                <div className="mt-2.5 text-base whitespace-nowrap text-neutral-600">
                    Add your links, resume and certificates
                </div>
                <div className="flex flex-col items-start  self-stretch px-6 mt-8 max-md:px-5 max-md:max-w-full ">
                    <div className="flex gap-5 justify-between self-stretch text-xs max-md:flex-wrap max-md:max-w-full} ">
                        <div className="flex gap-4 justify-between px-5 py-3.5 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/portfolio.png"
                                className="my-auto aspect-square w-[23px]"
                            />
                            <div className="flex flex-col flex-1 w-[290px] max-md:max-w-full">
                                <div className="text-black text-start max-md:max-w-full">Portfolio Link</div>
                                <div className="mt-2 text-zinc-500 text-start  max-md:max-w-full}">
                                    <input className="border-none outline-none" type="text" placeholder="Add your portfolio link" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-between px-5 py-3.5 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/linkdin.png" className="my-auto aspect-square w-[23px]"
                            />
                            <div className="flex flex-col flex-1 w-[290px] max-md:max-w-full">
                                <div className="text-black text-start max-md:max-w-full">LinkedIn Link</div>
                                <div className="mt-2 text-zinc-500 text-start  max-md:max-w-full}">
                                    <input className="border-none outline-none" type="text" placeholder="Add your LinkedIn link" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-between px-5 py-3.5 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/insta.png" className="my-auto aspect-square w-[23px]"
                            />
                            <div className="flex flex-col flex-1 w-[290px] max-md:max-w-full">
                                <div className="text-black text-start max-md:max-w-full">Instagram Link</div>
                                <div className="mt-2 text-zinc-500 text-start  max-md:max-w-full}">
                                    <input className="border-none outline-none" type="text" placeholder="Add your LinkedIn link" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-12  ml-[150px] text-2xl text-black whitespace-nowrap max-md:mt-10 max-md:ml-2.5} ${styles.headers}`}>
                        Your Resume
                    </div>
                    <div className="flex justify-center items-center self-center w-[780px] h-[110px] px-16 py-7 mt-4 max-w-full text-center rounded-xl border border-dashed bg-red-500 bg-opacity-10 border-[color:var(--ff-3333,#F33)] leading-[153.3%] w-[1025px] max-md:px-5">
                        <div className="flex flex-col max-w-full w-[208px]">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/upload.png" className="self-center aspect-square w-[30px]"
                            />
                            <div className="mt-2 text-xs text-black ">
                                <span className="underline text-red-500 underline ">Browse</span>
                                <span className="text-black"> your file</span>

                            </div>
                            <div className="mt-1 text-xs text-neutral-400">
                                Supports JPEG, PNG, PDF
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col relative items-center pb-3 mt-5 ml-[148px] h-[110px] max-w-full bg-sky-200 rounded-xl w-[174px] max-md:ml-2.5">
                    <div className=" absolute top-[-7px] end-[-7px] ">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/red_cross.png"
                                 className="w-6 aspect-[0.95]"
                            />
                        </div>
                        <div className="flex justify-center items-center self-stretch px-16 py-5 bg-white rounded-xl border-4 border-sky-50 border-solid max-md:px-5">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/pdf.png" className="w-5 aspect-[0.95]"
                            />
                        </div>
                        <div className="mt-1 text-xs leading-4 text-black whitespace-nowrap">
                            Lorem 01.doc
                        </div>
                        <div className=" text-xs leading-4 whitespace-nowrap text-stone-500">
                            97.47 KB
                        </div>
                    </div>

                    <div className={`mt-16 ml-[150px] text-base text-black whitespace-nowrap max-md:mt-10 max-md:ml-2.5} ${styles.headers}`}>
                        Your Certifications
                    </div>
                    <div className="flex justify-center items-center self-center w-[780px] h-[110px] px-16 py-7 mt-4 max-w-full text-center rounded-xl border border-dashed bg-red-500 bg-opacity-10 border-[color:var(--ff-3333,#F33)] leading-[153.3%] w-[1025px] max-md:px-5">
                        <div className="flex flex-col max-w-full w-[208px]">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/upload.png" className="self-center aspect-square w-[30px]"
                            />
                            <div className="mt-2 text-xs text-black ">
                                <span className="underline text-red-500 underline ">Browse</span>
                                <span className="text-black"> your file</span>

                            </div>
                            <div className="mt-1 text-xs text-neutral-400">
                                Supports JPEG, PNG, PDF
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 ml-[148px] text-base italic whitespace-nowrap max-md:ml-2.5">
                        <span className="">Do not have any certifications? Here are few</span>
                        <span className="font-bold text-red-500"> links</span>
                    </div>
                    <div className="flex flex-col relative items-center pb-3 mt-3 ml-[148px] h-[110px] max-w-full bg-sky-200 rounded-xl w-[174px] max-md:ml-2.5">
                        <div className=" absolute top-[-7px] end-[-7px] ">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/red_cross.png"
                                 className="w-6 aspect-[0.95]"
                            />
                        </div>
                        <div className="flex justify-center items-center self-stretch px-16 py-5 bg-white rounded-xl border-4 border-sky-50 border-solid max-md:px-5">
                            <img
                                loading="lazy"
                                src="/images/completeProfile/pdf.png" className="w-5 aspect-[0.95]"
                            />
                        </div>
                        <div className="mt-1 text-xs leading-4 text-black whitespace-nowrap">
                            Lorem 01.doc
                        </div>
                        <div className=" text-xs leading-4 whitespace-nowrap text-stone-500">
                            97.47 KB
                        </div>
                    </div>
                    <Link to={"/cp5"} className="justify-center self-center px-5 py-5 mt-12 w-[50%] text-sm text-center text-black bg-amber-300 rounded-[92.207px] max-md:mt-10 max-md:max-w-full">
                        Save & Next
                    </Link>
                </div>
            </div>
        </Wrappers>
    );

} export default Cp4;