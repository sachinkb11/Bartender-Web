import { Link } from "react-router-dom";
import Wrappers from "./Wrappers";
import styles from './cp.module.css'
function Cp3() {
    return (
        <Wrappers>
            <div className="flex relative justify-center items-center self-center px-16 py-9  w-full rounded-3xl bg-white bg-opacity-80 max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-center max-w-full w-[1301px]">
      <div className={`text-2xl leading-9 text-center  } ${styles.header}`}>
        Your Skills & Interest
      </div>
      <div className="mt-3.5 text-base whitespace-nowrap text-neutral-600">
        We would like to know your skills & interests.
      </div>
      
      <div className="flex gap-4 justify-between self-stretch px-5 py-3.5 mt-8 text-xs bg-white border-gray-200 border-solid border-[0.922px] rounded-[92.207px] max-md:flex-wrap max-md:max-w-full">
      <img
        loading="lazy"
        src="/images/completeProfile/pen.png"
        className="my-auto aspect-square w-[23px]"
      />
      <div className="flex flex-col flex-1 max-md:max-w-full">
        <div className="text-black text-left max-md:max-w-full">Add Your Skills</div>
        <div className="mt-2 text-left text-zinc-500 max-md:max-w-full">
        <input style={{width:"100%", border:"none", outline:"none", fontSize:"13px"}} type="text" placeholder="Bartending"/>
        </div>
      </div>
    </div>
      <div className="flex flex-col self-stretch p-3.5 mt-4 text-black bg-white rounded-2xl shadow-md max-md:max-w-full">
        <div className="flex gap-5 justify-between px-0.5 text-sm font-medium max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-left pl-1 my-auto">Suggested Skills</div>
          <img
            loading="lazy"
            src="/images/completeProfile/cross.png"
            className="w-6 aspect-square"
          />
        </div>
        <div className="flex gap-2.5 self-start px-px mt-2.5 text-xs max-md:flex-wrap max-md:max-w-full">
          <div className="grow justify-center px-4 py-2.5 whitespace-nowrap bg-neutral-100 rounded-[100px]">
            Bartending
          </div>
          <div className="grow justify-center px-4 py-2.5 whitespace-nowrap bg-neutral-100 rounded-[100px]">
            Barback
          </div>
          <div className="grow justify-center px-4 py-2.5 whitespace-nowrap bg-neutral-100 rounded-[100px]">
            FOH Support
          </div>
          <div className="grow justify-center px-4 py-2.5 whitespace-nowrap bg-neutral-100 rounded-[100px]">
            Mixologist
          </div>
          <div className="justify-center px-4 py-2.5 whitespace-nowrap aspect-[1.55] bg-neutral-100 rounded-[100px]">
            Host
          </div>
          <div className="grow justify-center px-4 py-2.5 text-center bg-neutral-100 rounded-[100px]">
            Cashier
          </div>
          <div className="justify-center px-4 py-2.5 text-center whitespace-nowrap aspect-[1.84] bg-neutral-100 rounded-[100px]">
            Server
          </div>
        </div>
      </div>
      <div className={`mt-16 text-2xl leading-9 text-center text-black capitalize max-md:mt-10 ${styles.header}`}>
        Choose your interest
      </div>
      <div className="mt-4 text-base whitespace-nowrap text-neutral-600">
        We would like to know your skills & interests.
      </div>
      <div className="flex justify-center items-center self-stretch px-16 py-7 mt-5 bg-white rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full">
        <div className="max-w-full w-[1060px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
              <div className="grow px-px max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm text-black max-md:mt-10">
                      <div className="text-base text-left whitespace-nowrap text-neutral-500">
                        Professional Sports
                      </div>
                      <div className="flex gap-3 justify-between mt-4 whitespace-nowrap">
                        <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="flex-auto text-left my-auto">Football</div>
                      </div>
                      <div className="flex gap-3 justify-between mt-5">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="flex-auto text-left my-auto">Basketball  </div>
                      </div>
                      <div className="flex gap-3 justify-between mt-5 whitespace-nowrap">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="flex-auto text-left my-auto">Soccer</div>
                      </div>
                      <div className="flex gap-3 justify-between mt-5">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="flex-auto text-left my-auto">Baseball  </div>
                      </div>
                      <div className="flex gap-3 justify-between mt-5 whitespace-nowrap">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>

                        <div className="flex-auto text-left">Hockey</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm text-black max-md:mt-10">
                      <div className="text-base text-left whitespace-nowrap text-neutral-500">
                        Collegiate Sports
                      </div>
                      <div className="flex gap-3 justify-between mt-4 whitespace-nowrap">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="flex-auto text-left my-auto">Football</div>
                      </div>
                      <div className="flex gap-3 justify-between mt-5">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="grow text-left my-auto">Basketball  </div>
                      </div>
                      <div className="flex gap-3 justify-between mt-5 whitespace-nowrap">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="flex-auto text-left my-auto">Soccer</div>
                      </div>
                      <div className="flex gap-3 justify-between mt-5">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="flex-auto text-left my-auto">Baseball  </div>
                      </div>
                      <div className="flex gap-3 justify-between mt-5 whitespace-nowrap">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="flex-auto text-left">Hockey</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
              <div className="px-px max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-sm text-black whitespace-nowrap max-md:mt-10">
                      <div className="text-base text-left text-neutral-500">
                        Festivals
                      </div>
                      <div className="flex gap-3 justify-between mt-5">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="flex-auto text-left my-auto">Art</div>
                      </div>
                      <div className="flex gap-3 justify-between mt-5">
                      <input className="w-5 h-5  border  border-solid border-neutral-400"  type="checkbox"/>
                        <div className="grow text-left">Food & Beverage </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm text-black whitespace-nowrap max-md:mt-10">
                      <div className="text-base text-left text-neutral-500">Others</div>
                      <div className="flex gap-3 justify-between mt-5">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="flex-auto text-left">Theatre/Plays</div>
                      </div>
                      <div className="flex gap-3 justify-between mt-5">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="grow text-left">Sports, Bars & Restaurants</div>
                      </div>
                      <div className="flex gap-3 justify-between mt-5">
                      <input className="w-5 h-5 rounded-md border border-solid border-neutral-400"  type="checkbox"/>
                        <div className="grow text-left">Neighborhood & Restaurants </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/cp4"} className="justify-center px-5 py-5 mt-10 text-sm w-[55%] text-center text-black bg-amber-300 rounded-[92.207px] max-md:max-w-full">
        Save & Next
      </Link>
    </div>
    </div>
        </Wrappers>
    );

} export default Cp3;