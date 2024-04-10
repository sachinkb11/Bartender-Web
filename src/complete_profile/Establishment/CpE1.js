import { useState } from "react";
import Wrappers from "../Bartender/Wrappers";
import styles from './CpE.module.css'
import { Link } from "react-router-dom";
function CpE1() {
    const [count, setcount] = useState(0);
    const HandleIncement = () => (
        setcount(count + 1)
    )
    const HandleDescrement = () => (
        setcount(count - 1)
    )
    return (
        <Wrappers>
            <div className="flex relative justify-center items-center self-center px-16 py-12 w-full  max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center mb-20 max-w-full w-[639px] max-md:mb-10">
                    <div className={`text-2xl leading-9 text-center max-md:max-w-full} ${styles.header}`}>
                        How Many Establishments Do You Own?
                    </div>
                    <div className="mt-1.5 text-base text-neutral-600 max-md:max-w-full">
                        Add the establishment where you want to use Bartender service
                    </div>
                    <img
                        loading="lazy"
                        src="/images/completeProfile/home_group.png"
                        className="mt-20 max-w-full aspect-[1.89] w-[142px] max-md:mt-10"
                    />
                    <div className="flex gap-5 justify-between items-center mt-24 max-w-full text-8xl leading-10 text-center whitespace-nowrap w-[337px] max-md:mt-10 max-md:text-4xl">
                        <button onClick={HandleDescrement} className="text-gray-500 ">
                            -
                        </button>
                        <div className={`self-stretch max-md:text-4xl } ${styles.headers}`}>{count}</div>
                        <button onClick={HandleIncement} className="text-gray-500 ">
                            +
                        </button>
                    </div>
                    <Link to={"/CpE2"} className="justify-center self-stretch px-5 py-5 mt-36 text-sm text-center text-white bg-red-500 rounded-[92.207px] max-md:mt-10 max-md:max-w-full">
                        Save & Next
                    </Link>
                </div>
            </div>
        </Wrappers>
    );

} export default CpE1;