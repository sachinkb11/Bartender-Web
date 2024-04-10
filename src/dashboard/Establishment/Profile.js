import React from "react";
import styles from '../dashboard.module.css'
import WrapperDashEst from "../../authWrapper/WrapperDashEst";

function Profile() {
  return (
    <WrapperDashEst>
      <div className="text-3xl font-semibold tracking-tight border-solid border-b-2 mb-10 pb-3  leading-[58.8px] max-md:max-w-full">
        BAERENDER’S <span className="text-red-500">PROFILE</span>
      </div>
      <div className="flex ">
        {/* fisrt */}
        <div className="w-[70%] mr-5 ">
          <div className="px-5 pb-5 bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="/images/completeProfile/review-person1.png"
                  className="shrink-0 self-stretch mt-4 max-w-full aspect-square w-[120px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col ml-3 w-[83%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-0 max-md:mt-2 max-md:max-w-full">
                  <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col self-end mt-4 max-md:mt-10">
                      <div className="text-xl font-semibold text-amber-300">
                        JOHN DOE
                      </div>
                      <div className=" text-sm tracking-wide text-slate-950">
                        Bartender
                      </div>
                      <div className="shrink-0 mt-3 h-px border border-solid bg-neutral-400 border-neutral-400" />
                    </div>
                    <div className="flex relative top-[-25px] right-[10px] gap-5 justify-between items-start self-start text-center">
                      <div className="flex relative   flex-col  whitespace-nowrap bg-white rounded-full border border-solid border-zinc-300 h-[74px] stroke-[1px] w-[74px]">
                        <img
                          loading="lazy"
                          src="/images/completeProfile/Vector.png"
                          className="z-10 self-center mt-0 aspect-[1.10] absolute top-[-8px]  fill-yellow-400 w-[28px]"
                        />
                        <div className=" mt-5 text-sm font-medium text-black">
                          4.4
                        </div>
                        <div className="text-[11px]">Rating</div>
                      </div>
                      <div className="flex flex-col self-stretch pt-2 whitespace-nowrap rounded-full border-white border-solid bg-slate-100 border-[5px] h-[74px] stroke-[5px] w-[74px] max-md:px-5">
                        <div className="text-2xl font-medium text-red-500">
                          16
                        </div>
                        <div className=" text-[11px] text-neutral-400">
                          Gigs
                        </div>
                      </div>
                      <div className="flex flex-col py-1 rounded-full border-white border-solid bg-slate-100 border-[5px] h-[74px] stroke-[5px] w-[74px]">
                        <div className="text-2xl font-medium text-red-500">
                          3<span className="text-sm "> Yrs</span>
                        </div>
                        <div className=" text-[10px] text-neutral-400">
                          Experience
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`mt-3 text-sm text-black  max-md:max-w-full} ${styles.headers}`}>
                    About me
                  </div>
                  <div className="mt-1 text-sm leading-5 text-neutral-700 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur. Gravida vehicula
                    varius ornare ac nec velit gravida at. Lorem ipsum dolor sit
                    amet consectetur. Gravida vehicula varius ornare ac nec
                    velit gravida at.
                  </div>
                  <div className="flex gap-1.5 self-start mt-3 text-xs text-black">
                    <button className="justify-center px-3.5 py-2.5 bg-neutral-100 rounded-[100px]">
                      Project Management
                    </button>
                    <button className="justify-center px-4 py-2.5 bg-neutral-100 rounded-[100px]">
                      Lorem Ipsum
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 pr-20 pl-10 mt-7 bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-3 max-md:mt-10">
                  <div className={`text-base text-black} ${styles.headers}`}>Website Link</div>
                  <div className="mt-2.5 text-sm leading-4 text-neutral-700">
                    https://www.johndoe.com/
                  </div>

                  <div className={`mt-10 text-base text-black max-md:mt-10} ${styles.headers}`}>
                    Documents
                  </div>
                  <div className="flex flex-col items-center pb-3 mt-3 rounded-xl bg-zinc-100">
                    <div className="flex justify-center items-center self-stretch px-16 py-6 bg-white rounded-xl border-4 border-solid border-zinc-100 max-md:px-5">
                      <img
                        loading="lazy"
                        src="/images/completeProfile/pdf.png"
                        className="w-5 aspect-[0.95] fill-neutral-400"
                      />
                    </div>
                    <div className="mt-1 text-xs leading-4 text-black">
                      resume.doc
                    </div>
                    <div className="mt-1 text-xs leading-4 text-stone-500">
                      97.47 KB
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-9 max-md:max-w-full">
                  <div className="flex flex-col items-start self-end py-3 pr-20 pl-3 max-w-full bg-white rounded-xl w-[342px] max-md:pr-5">
                    <div className={`text-base text-black} ${styles.headers}`}>LinkedIn Link</div>
                    <div className="mt-2.5 text-sm leading-4 whitespace-nowrap text-neutral-700">
                      https://www.linkedin.com/in/john-doe/
                    </div>
                  </div>
                  <div className="flex flex-col items-center pb-3 mt-16 max-w-full rounded-xl bg-zinc-100 w-[174px] max-md:mt-10">
                    <div className="flex justify-center items-center self-stretch px-16 py-6 bg-white rounded-xl border-4 border-solid border-zinc-100 max-md:px-5">
                      <img
                        loading="lazy"
                        src="/images/completeProfile/pdf.png"
                        className="w-5 aspect-[0.95] fill-neutral-400"
                      />
                    </div>
                    <div className="mt-1 text-xs leading-4 text-black">
                      certificates.doc
                    </div>
                    <div className="mt-1 text-xs leading-4 text-stone-500">
                      97.47 KB
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-9 pr-20 pl-9 mt-7 bg-white rounded-3xl  shadow-2xl max-md:px-5 max-md:max-w-full">
            <div className={`text-base mb-4 text-black} ${styles.headers}`}>Gigs Hosted</div>

            <div className="flex gap-5  max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col  max-md:mt-10">
                  <div className=" relative flex  pl-1 flex-col grow  pt-1.5 pb-1 rounded-xl  border border-solid bg-zinc-50 border-neutral-200 max-md:mt-5">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/bar_Img1.png"
                      className=" w-full shadow-lg aspect-[2]"
                    />
                    <span className=" flex text-blue-500 relative  bottom-4 left-[140px] bg-gray-100 rounded-[7px] border border-solid border-2 w-[87px] text-[11px] h-[25px] pl-1 ">
                      $20-$30
                      <span className=" text-black text-[9px] pl-[1px] pt-[2px]">
                        {" "}
                        / hour
                      </span>
                    </span>

                    <div className="flex  font-medium">
                      <div className=" mt-[-10px] text-xs text-black tracking-tighter whitespace-nowrap">
                        ABG Establishment
                      </div>
                    </div>
                    <div className="mt-1 text-xs leading-5 whitespace-nowrap text-neutral-400">
                      Charlotte, North Carolina
                    </div>
                    <div className="flex gap-1 mt-1 text-xs text-neutral-700">
                      <img
                        loading="lazy"
                        src="/images/completeProfile/clock.png"
                        className=" w-3 h-3 mt-[2px]"
                      />
                      <div className="flex-auto whitespace-nowrap">
                        Shift Time: 7:00 PM - 11:30 PM <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" relative flex  pl-1 flex-col grow  pt-1.5 pb-1 rounded-xl  border border-solid bg-zinc-50 border-neutral-200 max-md:mt-5">
                <img
                  loading="lazy"
                  src="/images/completeProfile/bar_Img3.png"
                  className=" w-full shadow-lg aspect-[2]"
                />
                <span className=" flex text-blue-500 relative  bottom-4 left-[150px] bg-gray-100 rounded-[7px] border border-solid border-2 w-[87px] text-[11px] h-[25px] pl-1 ">
                  $20-$30
                  <span className=" text-black text-[9px] pl-[1px] pt-[2px]">
                    {" "}
                    / hour
                  </span>
                </span>

                <div className="flex  font-medium">
                  <div className=" mt-[-10px] text-xs text-black tracking-tighter whitespace-nowrap">
                    ABG Establishment
                  </div>
                </div>
                <div className="mt-1 text-xs leading-5 whitespace-nowrap text-neutral-400">
                  Charlotte, North Carolina
                </div>
                <div className="flex gap-1 mt-1 text-xs text-neutral-700">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/clock.png"
                    className=" w-3 h-3 mt-[2px]"
                  />
                  <div className="flex-auto whitespace-nowrap">
                    Shift Time: 7:00 PM - 11:30 PM <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 pr-10 pl-9 mt-7 bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:max-w-full">
            <div className={`text-base text-black mb-5} ${styles.headers}`}>Reviews</div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="flex flex-col px-2.5 pt-2.5 pb-5  w-full rounded-xl border border-solid bg-zinc-50 border-neutral-200">
                    <div className="flex gap-5 justify-between px-px">
                      <div className="flex gap-2.5 my-auto">
                        <img
                          loading="lazy"
                          src="/images/completeProfile/review-person1.png"
                          className="shrink-0 aspect-square w-[43px] h-11"
                        />
                        <div className="flex flex-col my-auto">
                          <div className="text-base whitespace-nowrap  font-medium text-black">
                            ABG Establishment
                          </div>
                          <div className="flex gap-2.5  text-xs leading-5 whitespace-nowrap text-neutral-700 max-md:pr-5">
                            <div className="my-auto">4.5</div>
                            <img
                              loading="lazy"
                              src="/images/completeProfile/Star2.png"
                              className="shrink-0 aspect-[6.25] w-[82px]"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        src="/images/completeProfile/quotes.png"
                        className="shrink-0 aspect-square w-[50px]"
                      />
                    </div>
                    <div className="mt-1 text-xs italic font-medium leading-4 text-neutral-400">
                      Lorem ipsum dolor sit amet consectetur. Turpis eu
                      ultricies adipiscing gravida auctor. Hendrerit convallis
                      cras interdum neque. Sem curabitur hendrerit aliquet
                      pellentesque
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pl-3 pr-2 pt-2.5 pb-5 mx-auto  w-full rounded-xl border border-solid bg-zinc-50 border-neutral-200 max-md:mt-10">
                  <div className="flex gap-5 justify-between px-px">
                    <div className="flex gap-2.5 my-auto">
                      <img
                        loading="lazy"
                        src="/images/completeProfile/review-person2.png"
                        className="shrink-0 aspect-square w-[43px] h-11"
                      />
                      <div className="flex flex-col my-auto">
                        <div className="text-base whitespace-nowrap font-medium text-black">
                          ABG Establishment
                        </div>
                        <div className="flex gap-2.5  text-xs leading-5 whitespace-nowrap text-neutral-700 max-md:pr-5">
                          <div className="my-auto">4.5</div>
                          <img
                            loading="lazy"
                            src="/images/completeProfile/Star1.png"
                            className="shrink-0 aspect-[7.25] w-[82px]"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="/images/completeProfile/quotes.png"
                      className="shrink-0 aspect-square w-[50px]"
                    />
                  </div>
                  <div className="mt-1 text-xs italic font-medium leading-4 text-neutral-400">
                    Lorem ipsum dolor sit amet consectetur. Turpis eu ultricies
                    adipiscing gravida auctor. Hendrerit convallis cras interdum
                    neque. Sem curabitur hendrerit aliquet pellentesque
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div>
          <div className="flex flex-col px-8 pt-9 pb-20 w-[25vw] bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-7 max-md:max-w-full">
            <div className="flex gap-5 items-start px-px w-full max-md:flex-wrap max-md:max-w-full">
              <div className={`flex-auto mt-1 text-xl text-slate-900} ${styles.headers}`}>
                Your Availability
              </div>
              <div className="flex gap-4">
                <button> &lt; </button>
                <button> &gt; </button>
              </div>
            </div>
            <div className="mt-7 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-center whitespace-nowrap max-md:mt-9">
                    <div className="flex flex-col items-center py-1 rounded-3xl border-amber-300 border-solid bg-slate-100 border-t-[5px] max-md:px-5">
                      <div className="text-base text-neutral-400">Nov</div>
                      <div className=" text-xl text-black">19</div>
                    </div>

                    <div className="flex flex-col items-center py-1 mt-2 rounded-3xl border-amber-300 border-solid bg-slate-100 border-t-[5px] max-md:px-5">
                      <div className="text-base text-neutral-400">Nov</div>
                      <div className=" text-xl text-black">20</div>
                    </div>
                    <div className="flex flex-col items-center py-1 mt-2 rounded-3xl border-amber-300 border-solid bg-slate-100 border-t-[5px] max-md:px-5">
                      <div className="text-base text-neutral-400">Nov</div>
                      <div className=" text-xl text-black">21</div>
                    </div>
                    <div className="flex flex-col items-center py-1 mt-2 rounded-3xl border-amber-300 border-solid bg-slate-100 border-t-[5px] max-md:px-5">
                      <div className="text-base text-neutral-400">Nov</div>
                      <div className=" text-xl text-black">22</div>
                    </div>
                    <div className="flex flex-col items-center py-1 mt-2 rounded-3xl border-amber-300 border-solid bg-slate-100 border-t-[5px] max-md:px-5">
                      <div className="text-base text-neutral-400">Nov</div>
                      <div className=" text-xl text-black">23</div>
                    </div>
                    <div className="flex flex-col items-center py-1 mt-2 rounded-3xl border-amber-300 border-solid bg-slate-100 border-t-[5px] max-md:px-5">
                      <div className="text-base text-neutral-400">Nov</div>
                      <div className=" text-xl text-black">24</div>
                    </div>
                    <div className="flex flex-col items-center py-1 mt-2 rounded-3xl border-amber-300 border-solid bg-slate-100 border-t-[5px] max-md:px-5">
                      <div className="text-base text-neutral-400">Nov</div>
                      <div className=" text-xl text-black">25</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-3 w-[70%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch mt-1 text-lg text-neutral-400 max-md:mt-10">
                    <div>Sunday</div>
                    <div className=" text-[16px] text-black">
                      8:00 PM - 10:00 PM
                    </div>
                    <div className="mt-4 max-md:mt-10">Monday</div>
                    <div className=" text-[16px] text-black">
                      9:00 PM - 11:00 PM
                    </div>
                    <div className="mt-4 max-md:mt-10">Tuesday</div>
                    <div className=" text-[16px] text-black">
                      9:00 PM - 11:00 PM
                    </div>
                    <div className="mt-5 max-md:mt-10">Wednesday</div>
                    <div className=" text-[16px] text-black">
                      8:00 PM - 10:00 PM
                    </div>
                    <div className="mt-5 max-md:mt-10">Thursday</div>
                    <div className=" text-[16px] text-black">Unavailable</div>
                    <div className="mt-5 max-md:mt-10">Friday</div>
                    <div className=" text-[16px] text-black">Unavailable</div>
                    <div className="mt-5 max-md:mt-10">Saturday</div>
                    <div className=" text-[16px] text-black">
                      8:00 PM - 10:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperDashEst>
  );
}

export default Profile;
