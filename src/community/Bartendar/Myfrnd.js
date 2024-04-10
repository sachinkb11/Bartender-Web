import { useState } from "react";
import styles from "../community.module.css";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import WrapperDash from "../../dashboard/WrapperDash";
import { Link } from "react-router-dom";
import UserReview from "./UserReview";

export default function Myfrnd({ menu }) {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;
  console.log(menu);
  return (
    <WrapperDash>
      {showModal && mainModal}
      {showModalnotify && mainModalnotify}
      <div className="flex  flex-col px-3  pb-6 rounded-3xl bg-zinc-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-5 pb-5 w-full max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
          <div className="flex gap-5 my-auto text-4xl font-semibold tracking-tighter ">
            <div className="grow pt-3 my-auto">
              <span className=" text-neutral-700 font-[Bebas-Neue] uppercase ">
                Community{" "}
              </span>
            </div>
          </div>
          <div className="flex gap-5 pt-3 justify-between">
            <img
              onClick={() =>
                setShowModalnotify((setShowModalnotify) => !setShowModalnotify)
              }
              loading="lazy"
              src="/images/completeProfile/yellowNotify.png"
              className="shrink-0 self-start mt-3.5 aspect-square w-[42px]"
            />
            <div className="flex shadow-lg items-center rounded-lg px-2 border-black gap-3 ">
              <div>
                {" "}
                <img
                  loading="lazy"
                  src="/images/completeProfile/user1.png"
                  className="shrink-0 self-start mt-2.5 aspect-square w-[42px]"
                />
              </div>
              
              <button   
                onClick={() => setShowModal((setShowModal) => !setShowModal)}
                className="text-5xl items-center relative bottom-4  "
              >
                &#751;
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-10 py-12 mt-8 text-sm leading-6 bg-white rounded-3xl shadow-2xl text-neutral-700 max-md:px-5 max-md:max-w-full">
          {/* header */}
          <div className="flex flex-col self-center max-w-full w-[690px]">
            <div className="flex gap-3 items-center py-1 px-1 text-sm leading-5 bg-white border border-gray-200 border-solid rounded-[100px] text-neutral-700 max-md:flex-wrap">
              <div className="justify-center self-stretch px-5 py-3 font-medium text-center text-white bg-red-500 rounded-[100px] max-md:pl-5">
                My Friends (10)
              </div>
              <Link
                to={"/InvitationRecived"}
                className="flex-auto self-stretch  my-auto"
              >
                Invitations (2)
              </Link>
              <Link
                to={"/NearbyBart"}
                className="flex-auto self-stretch my-auto text-center"
              >
                Nearby Bartenders (10)
              </Link>
              <Link
                to={"/NearbyEst"}
                className="flex-auto self-stretch my-auto text-center"
              >
                Nearby Establishments (10)
              </Link>
            </div>
            <div className="flex gap-5 justify-between self-center px-5 py-3 mt-5 max-w-full text-sm whitespace-nowrap bg-white border border-gray-200 border-solid shadow-sm rounded-[100px] text-neutral-400 w-[300px]">
              <input
                className="my-auto outline-none border-none"
                type="text"
                placeholder="Search"
              />
              <img
                loading="lazy"
                src="/images/completeProfile/search.png"
                className="shrink-0 aspect-[1.05] w-[21px]"
              />
            </div>
          </div>
          {/* headerComplete */}
          {/* small boxes */}
          <div className="  grid grid-cols-5 gap-5">
            {menu.map((item) => {
              return (
                <div className="flex mt-8 relative flex-col items-center  max-w-full rounded-3xl border border-solid border-neutral-200 w-[178px]">
                  <img
                    onClick={() => setShowModal1(true)}
                    loading="lazy"
                    src={item.image}
                    className="z-10 mt-0 w-[60px] absolute top-[-25px] rounded-full border-white border-solid shadow-lg aspect-square border-[3px]"
                  />
                  <div
                    className={` text-base  mt-11 text-stone-900} ${styles.header}`}
                  >
                    {item.name}
                  </div>
                  <div className="flex gap-2  text-xs">
                    <div className="flex gap-1 text-black whitespace-nowrap">
                      <img
                        loading="lazy"
                        src={item.image2}
                        className="shrink-0 aspect-square w-[17px]"
                      />
                      <div className="my-auto">{item.location}</div>
                    </div>
                    <div className="my-auto text-zinc-400">{item.distance}</div>
                  </div>
                  <div className="flex gap-5 self-stretch py-1.5 pr-5 pl-2.5 mt-3.5 text-sm font-medium text-black whitespace-nowrap rounded-b-3xl bg-neutral-100 max-md:pr-5">
                    <div className="flex flex-1 gap-1">
                      <img
                        loading="lazy"
                        src={item.image3}
                        className="shrink-0 w-4 aspect-square"
                      />
                      <div className="my-auto">{item.userQuantity}</div>
                    </div>
                    <div className="flex pl-2 flex-1 gap-1">
                      <img
                        loading="lazy"
                        src={item.image4}
                        className="shrink-0 w-4 aspect-square"
                      />
                      <div className="my-auto">{item.buildingQuantity}</div>
                    </div>
                    <div className="flex flex-1 gap-1">
                      <img
                        loading="lazy"
                        src={item.image5}
                        className="shrink-0 w-4 aspect-square"
                      />
                      <div className="my-auto">{item.starQuantity}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {showModal1 ? (
            <>
              <div className="justify-center max-h-cover mt-10 mb-10 items-center pt-[420px] pl-[290px] flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-2xl bg-white pb-2  relative flex flex-col w-full  outline-none focus:outline-none">
                    {/*header*/}

                    <div className="flex overflow-hidden relative flex-col items-end min-w-[354px] min-h-[204px] max-md:px-5 max-md:max-w-full">
                      <img
                        loading="lazy"
                        src="images/Comminity/reviewBack.png"
                        className="object-cover absolute inset-0 rounded-2xl size-full"
                      />
                     
                      <div className="flex flex-col absolute w-full  text-white text-lg   ">
                      <button
                        className=" text-end items-end justify-end pr-5 pt-2 text-xl"
                        onClick={() => setShowModal1(false)}
                      >
                        <span className=" ">&#10005;</span>
                      </button>
                        <div
                          className={` flex  justify-center pb-1 } ${styles.header}`}
                        >
                          Jane Doe Reviews
                        </div>
                        <div className="flex  justify-center ">
                          <img
                            loading="lazy"
                            src="images/Comminity/user1.png"
                            className="w-[60px] border-[1px] rounded-[95px] border-white"
                          />
                        </div>
                        <div className="flex justify-center">
                          <div className={styles.header}>John Doe</div>
                        </div>
                        <div className="flex  justify-center text-sm text-[#8C8C8C] ">
                          <div>
                            <img
                              loading="lazy"
                              src="images/Comminity/location.png"
                            />
                          </div>
                          <div>Charlotte 0.2 mi</div>
                        </div>
                        <div className=" flex gap-5 py-1 justify-center">
                          <div className="flex gap-1">
                            <img
                              loading="lazy"
                              src="images/Comminity/yellowUsers.png"
                              className="shrink-0 w-5 aspect-square"
                            />
                            <div className="text-sm">500</div>
                          </div>
                          <div className="flex gap-1 ">
                            <img
                              loading="lazy"
                              src="images/Comminity/yellowBuilding.png"
                              className="shrink-0 w-5 aspect-square"
                            />
                            <div className="text-sm">19</div>
                          </div>
                          <div className="flex gap-1 ">
                            <img
                              loading="lazy"
                              src="images/Comminity/yellowStar.png"
                              className="shrink-0 aspect-[1.05] w-[21px]"
                            />
                            <div className="text-sm">23</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    

                  <UserReview></UserReview>
                    
                  
                  </div>
            
                </div>
              </div>

              <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </WrapperDash>
  );
}
