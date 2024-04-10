import { Link } from "react-router-dom";
import WrapperDashEst from "../../authWrapper/WrapperDashEst";
import style from "../dashboard.module.css";

export default function DashboardInvoice(props) {
  return (
    <WrapperDashEst>
      <div className=" opacity-20 relative">
        <div className="flex gap-5 justify-between px-5 pb-5 mt-3 w-full max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
          <div className="flex gap-5 my-auto  text-3xl font-semibold tracking-wider text-red-500 leading-[50px]">
            <div className="grow my-auto">
              <span className=" text-neutral-700">WELCOME</span>{" "}
              <span className="text-red-500 ">JOHN</span>
            </div>
            <img
              loading="lazy"
              src="/images/completeProfile/hand.png"
              className="shrink-0 aspect-square w-[40px]"
            />
          </div>
          <div className="flex gap-5  justify-between text-lg text-white max-md:flex-wrap">
            <div className="flex flex-col flex-1 justify-center px-4 bg-red-500 rounded-[113.703px] max-md:px-5">
              <div className="flex gap-2.5 ">
                <img
                  loading="lazy"
                  src="/images/completeProfile/plus.png"
                  className="shrink-0 w-5 py-3 "
                />
                <button className="grow text-sm py-3">
                  Create New Job Post
                </button>
              </div>
            </div>
            <img
              loading="lazy"
              src="/images/completeProfile/yellowNotify.png"
              className="shrink-0 my-auto  w-[42px]"
            />
            <select className="w-[100px]" name="users">
              <option
                value="United States"
                data-img="/images/completeProfile/users.png"
              ></option>
              <option
                value="United States"
                data-img="/images/completeProfile/users.png"
              ></option>
              <option
                value="United States"
                data-img="/images/completeProfile/users.png"
              ></option>
            </select>
          </div>
        </div>
        {/* ................ */}
        <div className="flex pt-6 px-2 ">
          <div className="">
            <div className="bg-white rounded-3xl  shadow-2xl mt-5 pt-7 px-4 max-w-[982px] pb-6 h-fit">
              <div className="flex gap-5 justify-between items-center py-1 px-2 ml-12 self-center  max-w-full text-base leading-5 text-center bg-white border border-gray-200 border-solid rounded-[100px] text-neutral-700 w-[530px] max-md:flex-wrap">
                <div className="self-stretch my-auto">Current Gigs</div>
                <div className="flex-auto self-stretch my-auto">
                  Pending Acceptance
                </div>
                <div className="flex gap-2 self-stretch px-5 py-3 text-white bg-red-500 rounded-[100px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/cocktail.png"
                    className="shrink-0 w-7 aspect-square"
                  />
                  <div className="my-auto">Past Gigs</div>
                </div>
              </div>
              <div className="flex gap-5  justify-between  mt-5 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto ml-3 tracking-tighter text-lg text-black">
                  Pending Acceptance
                </div>
                <div className="flex gap-5 justify-between px-5 py-4 mr-1 text-sm h-[50px] w-[280px] whitespace-nowrap bg-white border border-gray-200 border-solid shadow-sm rounded-[100px] text-neutral-400">
                  <div className="my-auto">
                    <input
                      className="border-none outline-none"
                      type="text"
                      placeholder="Search"
                    ></input>
                  </div>
                  <img
                    loading="lazy"
                    src="/images/completeProfile/search.png"
                    className="shrink-0 aspect-[1.05] w-[20px]"
                  />
                </div>
                <img
                  loading="lazy"
                  src="/images/completeProfile/filter.png"
                  className="shrink-0 aspect-[1.06] w-[53px]"
                />
              </div>
              {/* ... */}
              <div className="flex w-[100%] mt-3 gap-4  ml-1">
                <div className=" relative flex w-[100%]  pl-1 flex-col grow  pt-1.5 pb-1 rounded-xl  border border-solid bg-zinc-50 border-neutral-200 max-md:mt-5">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/bar_Img1.png"
                    className=" w-full shadow-lg aspect-[2]"
                  />
                  <span className=" flex text-blue-500 absolute top-[50%] left-[61%]  pl-1 ">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/Mask3.png"
                      className=" shadow-lg rounded-full h-[50px] w-[55px]  aspect-[2]"
                    />
                  </span>
                  <span className=" flex text-blue-500 absolute top-[50%] left-[68%]  pl-1 ">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/Mask2.png"
                      className=" shadow-lg rounded-full h-[50px] w-[55px]  aspect-[2]"
                    />
                  </span>
                  <span className=" flex text-blue-500 absolute top-[50%] left-[75%]  pl-1 ">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/Mask1.png"
                      className=" shadow-lg rounded-full h-[50px] w-[55px]  aspect-[2]"
                    />
                  </span>
                  <div className="flex gap-2 mt-2.5 font-medium">
                    <div className="grow text-xs text-black whitespace-nowrap">
                      ABG Establishment
                    </div>
                  </div>
                  <div className="mt-[1px] text-xs leading-5 whitespace-nowrap text-neutral-400">
                    Charlotte, North Carolina
                  </div>
                  <div className="flex gap-1 mt-1 text-xs text-neutral-700">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/clock.png"
                      className=" w-3 h-3 mt-[2px]"
                    />
                    <div className="flex-auto tracking-tigter text-[11px] whitespace-nowrap">
                      Shift Time: 7:00 PM - 11:30 PM | Pay: $20/hr
                    </div>
                  </div>
                </div>
                <div className=" relative flex w-[100%] pl-1  flex-col grow  pt-1.5 pb-1 rounded-xl  border border-solid bg-zinc-50 border-neutral-200 max-md:mt-5">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/bar_Img2.png"
                    className=" w-full shadow-lg aspect-[2]"
                  />
                  <span className=" flex text-blue-500 absolute top-[46%] left-[75%]  pl-1 ">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/Mask1.png"
                      className=" shadow-lg rounded-full h-[50px] w-[55px]  aspect-[2]"
                    />
                  </span>
                  <span className=" flex text-blue-500 absolute top-[66%] left-[75%]  pl-1 ">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/Star2.png"
                      className=" shadow-lg rounded-full h-[12px] w-[55px]  aspect-[2]"
                    />
                  </span>
                  <div className="flex gap-2.5 mt-2.5 font-medium">
                    <div className="grow text-base text-xs tracking-tighter whitespace-nowrap">
                      ABG Establishment
                    </div>
                  </div>
                  <div className="mt-1 text-xs leading-5 whitespace-nowrap text-neutral-400">
                    Charlotte, North Carolina
                  </div>
                  <div className="flex  mt-1 text-xs text-neutral-700">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/clock.png"
                      className=" w-3 h-3 mt-[2px] "
                    />
                    <div className="flex-auto tracking-tigter text-[11px] pl-1 whitespace-nowrap">
                      {" "}
                      Shift Time: 7:00 PM - 11:30 PM | Pay: $20/hr
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2 text-xs text-red-500">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/red-earn.png"
                      className="shrink-0 self-start w-3 aspect-square"
                    />
                    <div className="flex-auto">
                      Payment: $500 !not processed
                    </div>
                  </div>
                </div>
              </div>
              {/* .............. */}
            </div>
          </div>
          {/* .... */}
          <div className="ml-4">
            <div className="bg-white rounded-3xl shadow-2xl w-[360px] min-h-full ">
              <div className=" p-4  ">
                <div
                  className={`text-xl text-black max-w-[343px]} ${style.headers}`}
                >
                  <span
                    className={`text-red-500 font-semibold} ${style.headers}`}
                  >
                    12 Bartenders
                  </span>{" "}
                  that are available today
                </div>
                <div className="flex flex-col px-2 pt-1.5 pb-3 mt-6 mr-3 w-full rounded-xl border-l-4 border-red-500 border-solid shadow-md max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex gap-2.5">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/user1.png"
                      className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                    />
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                      <div className="flex gap-5 relative justify-between px-px">
                        <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
                          John Doe
                        </div>
                        <div className="justify-center whitespace-nowrap text-neutral-500">
                          <img
                            loading="lazy"
                            src="/images/completeProfile/yellowChat.png"
                            className="shrink-0 self-start  aspect-square"
                          />
                        </div>
                      </div>
                      <div className="text-[12px] text-neutral-400">
                        Available time: 7:00 PM - 11:30 PM
                      </div>
                      <div className="flex-auto my-auto text-[11px]">
                        Zip Code: 1098 <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-2 pt-1.5 pb-3 mt-5 mr-3 w-full rounded-xl border-l-4 border-red-500 border-solid shadow-md max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex gap-2.5">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/user2.png"
                      className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                    />
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                      <div className="flex gap-5 relative justify-between px-px">
                        <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
                          John Doe
                        </div>
                        <div className="justify-center whitespace-nowrap text-neutral-500">
                          <img
                            loading="lazy"
                            src="/images/completeProfile/yellowChat.png"
                            className="shrink-0 self-start  aspect-square"
                          />
                        </div>
                      </div>
                      <div className="text-[12px] text-neutral-400">
                        Available time: 7:00 PM - 11:30 PM
                      </div>
                      <div className="flex-auto my-auto text-[11px]">
                        Zip Code: 1098 <br />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col px-2 pt-1.5 pb-3 mt-5 mr-3 w-full rounded-xl border-l-4 border-red-500 border-solid shadow-md max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex gap-2.5">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/user3.png"
                      className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                    />
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                      <div className="flex gap-5 relative justify-between px-px">
                        <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
                          John Doe
                        </div>
                        <div className="justify-center whitespace-nowrap text-neutral-500">
                          <img
                            loading="lazy"
                            src="/images/completeProfile/yellowChat.png"
                            className="shrink-0 self-start  aspect-square"
                          />
                        </div>
                      </div>
                      <div className="text-[12px] text-neutral-400">
                        Available time: 7:00 PM - 11:30 PM
                      </div>
                      <div className="flex-auto my-auto text-[11px]">
                        Zip Code: 1098 <br />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col px-2 pt-1.5 pb-3 mt-5 mr-4 w-full rounded-xl border-l-4  border-red-500 border-solid shadow-md max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex gap-2.5 ">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/user4.png"
                      className="shrink-0 self-start mt-1.5 w-14 aspect-square"
                    />
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                      <div className="flex gap-5 relative justify-between px-px">
                        <div className="flex-auto  text-sm tracking-tighter text-nowrap font-medium text-black">
                          John Doe
                        </div>
                        <div className="justify-center whitespace-nowrap text-neutral-500">
                          <img
                            loading="lazy"
                            src="/images/completeProfile/yellowChat.png"
                            className="shrink-0 self-start  aspect-square"
                          />
                        </div>
                      </div>
                      <div className="text-[12px] text-neutral-400">
                        Available time: 7:00 PM - 11:30 PM
                      </div>
                      <div className="flex-auto my-auto text-[11px]">
                        Zip Code: 1098 <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex absolute top-10 left-[300px]  flex-col px-7 py-6 bg-white border-4 border-yellow-400 border-solid  max-w-[400px]  rounded-[43.208px] max-md:px-5">
      <div className="flex gap-5 justify-between  self-end max-w-full text-2xl text-center text-black whitespace-nowrap w-[390px]">
        <div className="self-end text-center pl-[130px] mt-6">Invoice</div>
        <Link to={"/PastGigsEstablishment"}>&#10005;</Link>
      </div>
      <div className="self-center mt-1 text-base leading-6 text-center text-neutral-600 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Nisl nulla ultrices vestibulum.
      </div>
      <div className="flex justify-center items-center px-16 py-3 mt-5 text-center rounded-xl bg-amber-300 bg-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-3xl font-medium leading-6 text-neutral-800">
            $2,600.00
          </div>
          <div className="mt-1 text-base leading-6 text-yellow-400">
            Payment Success
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-center mt-5 w-full max-w-[664px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="my-auto text-xl text-black">From:</div>
        <div className="flex flex-col text-lg leading-6 text-right text-neutral-600">
          <div>John Doe</div>
          <div >VISA 0987</div>
        </div>
      </div>
      <input className=" outline-none border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400" type="text"></input>
      <div  />
      <div className="flex gap-5 justify-between self-center mt-4 w-full max-w-[664px] max-md:flex-wrap max-md:max-w-full">
        <div className="my-auto text-xl text-black">To:</div>
        <div className="flex flex-col text-lg leading-6 text-right text-neutral-600">
          <div>John Doe</div>
          <div>VISA 0987</div>
        </div>
      </div>
      <input className=" outline-none border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400" type="text"></input>
      <div className="flex gap-5 self-center mt-6 w-full max-w-[656px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="text-xl mb-2 text-black">Date:</div>
        <div className="flex-auto text-lg leading-6 text-right text-neutral-600">
          Jan 26, 2023
        </div>
      </div>
      <input className=" outline-none border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400" type="date"></input>
      <button className="justify-center px-6 py-4 mt-10 text-lg text-center text-white bg-red-500 rounded-[117.179px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        Download Invoice
      </button>
    </div>
    </WrapperDashEst>
  );
}
