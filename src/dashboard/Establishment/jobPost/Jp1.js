import { Link } from "react-router-dom";
import Wrappers from "../../../complete_profile/Bartender/Wrappers";
import styles from "../../dashboard.module.css";
function Jp1() {
  return (
    <Wrappers>
      <div className="flex relative justify-center items-center self-center px-16 py-11  w-full rounded-3xl bg-white bg-opacity-80 max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1299px]">
          <div
            className={`self-center text-2xl leading-9 text-center text-black} ${styles.header}`}
          >
            Post A Job
          </div>
          <div className="self-center mt-1 text-base text-neutral-600">
            Lorem Ipsum Dolar
          </div>
          <div className="flex  self-center mt-5 max-w-full w-[381px]">
            <div className={`grow my-auto text-xl} ${styles.headers}`}>
              Post as
              <span className={`text-red-500 ${styles.headers}`}>
                ‘Emergency Hiring’
              </span>
            </div>
            <div className="flex flex-col justify-center items-start py-1">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-[85px] h-[40px] bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-9 after:w-10 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
              </label>
            </div>
          </div>
          <div className="flex gap-5 mt-8 text-xs max-md:flex-wrap">
            <div className="flex flex-1 flex-auto gap-4 px-5 py-3.5 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
              <img
                loading="lazy"
                src="/images/completeProfile/building.png"
                className="shrink-0 my-auto aspect-square w-[22px]"
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="text-black text-start max-md:max-w-full">
                  Choose Establishment
                </div>
                <div className="mt-2 text-zinc-500 text-start max-md:max-w-full">
                  <input
                    className="outline-none border-none text-[14px] w-full"
                    type="text"
                    placeholder="Jar Bar"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-auto gap-4 px-5 py-3.5 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
              <img
                loading="lazy"
                src="/images/completeProfile/drink_glass.png"
                className="shrink-0 my-auto aspect-square w-[23px]"
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="text-black text-start max-md:max-w-full">
                  Job Title
                </div>
                <div className="mt-2 text-zinc-500 max-md:max-w-full">
                  <input
                    className="outline-none border-none text-[14px] w-full"
                    type="text"
                    placeholder="Jar Bar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end items-start px-5 pt-3.5 pb-10 mt-6 text-xs bg-white rounded-3xl border border-gray-200 border-solid max-md:flex-wrap">
            <img
              loading="lazy"
              src="/images/completeProfile/pen.png"
              className="shrink-0 aspect-[1.04] w-[23px]"
            />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="text-black text-start max-md:max-w-full">
                Job Description
              </div>
              <div className="mt-2 text-start text-zinc-500 max-md:max-w-full">
                <textarea className="border-none outline-none w-full" name="w3review" rows="4" cols="50">
                
                </textarea>
              </div>
            </div>
          </div>
          <div className="self-end mt-4 text-base text-neutral-600 max-md:mr-2.5">
            0/200
          </div>
          <div className="flex gap-5 mt-7 text-xs whitespace-nowrap max-md:flex-wrap">
            <div className="flex flex-1 flex-auto gap-4 px-5 py-3.5 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="text-black text-start max-md:max-w-full">From</div>
                <div className="mt-2 text-zinc-500 max-md:max-w-full">
                <input
                    className="outline-none border-none w-full"
                    type="date"
                  />
                </div>
              </div>
              {/* <img
                loading="lazy"
                src="/images/completeProfile/celender.png"
                className="shrink-0 my-auto  aspect-square w-[22px]"
              /> */}
            </div>
            <div className="flex flex-1 flex-auto gap-4 px-5 py-3.5 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="text-black text-start max-md:max-w-full">To</div>
                <div className="mt-2 text-zinc-500 max-md:max-w-full">
                <input
                    className="outline-none border-none w-full"
                    type="date"
                  />
                </div>
              </div>
              {/* <img
                loading="lazy"
                src="/images/completeProfile/celender.png"
                className="shrink-0 my-auto aspect-square w-[22px]"
              /> */}
            </div>
          </div>
          <div className="flex gap-5 mt-6 text-xs max-md:flex-wrap">
            <div className="relative flex flex-1 flex-auto gap-4 items-center px-5 py-3.5 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
              <img
                loading="lazy"
                src="/images/completeProfile/stop-watch.png"

                className="shrink-0 self-stretch my-auto aspect-square w-[22px]"
              />
              <div className="flex flex-col self-stretch max-md:max-w-full">
                <div className="text-black max-md:max-w-full">Shift Time</div>
                <div className="mt-2 text-start text-zinc-500 max-md:max-w-full">
                  9:00 AM
                </div>
              </div>
             <button style={{fontSize:"20px"}} className=" absolute right-4 w-5"> &#11167; </button>
            </div>
            <div className=" relative flex flex-1 flex-auto gap-4 items-center px-5 py-3.5 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
              <img
                loading="lazy"
                src="/images/completeProfile/stop-watch.png"

                className="shrink-0 self-stretch my-auto aspect-square w-[22px]"
              />
              <div className="flex flex-col self-stretch max-md:max-w-full">
                <div className="text-black max-md:max-w-full">Shift Time</div>
                <div className="mt-2 text-left text-zinc-500 max-md:max-w-full">
                  9:00 AM{" "}
                </div>
              </div>
              <button style={{fontSize:"20px"}} className=" absolute right-4 w-5"> &#11167; </button>

            </div>
          </div>
          <Link to={"/Jp2"} className="justify-center self-center w-[50%] px-5 py-5 mt-10 text-sm text-center text-white bg-red-500 rounded-[92.207px] max-md:mt-10 max-md:max-w-full">
            Save & Next
          </Link>
        </div>
      </div>
    </Wrappers>
  );
}
export default Jp1;
