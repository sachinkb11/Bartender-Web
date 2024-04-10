import { Link } from "react-router-dom";
import Wrappers from "../Bartender/Wrappers";
import styles from './CpE.module.css'
function CpE3() {


    return (
        <Wrappers>
          <div className="flex relative justify-center items-center self-center px-16 py-12 w-full  max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center mt-28 mx-[80px] mb-28 max-w-full w-[1299px] max-md:my-10">
        <div className={`text-2xl leading-9 text-center text-black max-md:max-w-full} ${styles.header}`}>
          Tell Us More About Your Establishment
        </div>
        <div className=" text-base whitespace-nowrap text-neutral-600">
          Lorem Ipsum Dolar
        </div>
        <div className="flex gap-5 justify-between self-stretch mt-10 text-xs max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-4 justify-between w-[50%] px-5 py-3.5 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="/images/completeProfile/multiUser.png"
              className="my-auto aspect-[1.3] w-[22px]"
            />
            <div className="flex flex-col flex-1  max-md:max-w-full">
              <div className="text-black text-left max-md:max-w-full">Customer flow</div>
              <div className="mt-2 text-zinc-500 text-left max-md:max-w-full">
              <input className="border-none outline-none w-full" type="text" placeholder="Customer flow"/>

              </div>
            </div>
          </div>
          <div className="flex justify-between gap-4 w-[50%] px-5 py-3.5 bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="/images/completeProfile/solarStar.png"
              className="my-auto aspect-square w-[22px]"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-black text-left max-md:max-w-full">
                Number of years in business
              </div>
              <div className="mt-2 text-zinc-500  text-left max-md:max-w-full">
              <input className="border-none outline-none w-full" type="text" placeholder="Number of years in business"/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-[49%] self-start px-5 py-3.5 mt-6 text-xs bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="/images/completeProfile/portFolio.png"
            className="my-auto aspect-square w-[23px]"
          />
          <div className="flex flex-col flex-1 max-md:max-w-full">
            <div className="text-black text-left max-md:max-w-full">Website Link</div>
            <div className="mt-2 text-zinc-500 text-left max-md:max-w-full">
              <input className="border-none outline-none w-full" type="text" placeholder="Website Link"/>
            </div>
          </div>
        </div>
        <Link to={"/CpE5"} className="justify-center px-5 py-5 mt-10 w-[60%] text-sm text-center text-white bg-red-500 rounded-[92.207px] max-md:max-w-full">
          Save & Next
        </Link>
      </div>
    </div>
        </Wrappers>
    );

} export default CpE3;