import { useState } from "react";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import WrapperDash from "../../dashboard/WrapperDash";
import style from '../community.module.css'
import { Link } from "react-router-dom";

export default function InvitationRecived({ menu1 }) {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;
  console.log(menu1);
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
              <Link to={"/Myfrnd"} className="justify-center self-stretch px-5 py-3   max-md:pl-5">
                My Friends (10)
              </Link>
              <div className="flex-auto self-stretch text-center font-medium px-5 py-3 text-white bg-red-500 rounded-[100px] my-auto">
                Invitations (2)
              </div>
              <Link to={"/NearbyBart"} className="flex-auto self-stretch my-auto text-center">
                Nearby Bartenders (10)
              </Link>
              <Link to={"/NearbyEst"} className="flex-auto self-stretch my-auto text-center">
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
          <div className="flex flex-col items-center self-center px-16 pt-4 mt-7 max-w-full text-base whitespace-nowrap border-b border-gray-200 border-solid w-[385px] max-md:px-5">
            <div className="flex flex-col max-w-full w-[173px]">
              <div className="flex gap-5 justify-between">
                <div className="font-semibold text-red-500">Received</div>
                <Link to={"/InvitationSent"} className="text-black">Sent</Link>
              </div>
              <div className="shrink-0 mt-3 bg-red-500 w-[80px] border-red-500 border-solid border-[3px] h-[3px]" />
            </div>
          </div>
          {/* headerComplete */}

          {/* invitations */}
          <div className="mt-5"></div>
          {menu1.map((item) => {
            return (
              <div className="flex z-10 flex-col pt-2 pb-2 mt-1 bg-white rounded-md border-b border-solid border-neutral-200 max-md:px-5 max-md:max-w-full">
                <div className="flex z-10 gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-5 items-center max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between self-stretch text-xl text-black">
                      <img
                        loading="lazy"
                        src={item.image}
                        className="shrink-0 rounded-full border-4 border-white border-solid shadow-lg aspect-square h-[60px] w-[60px]"
                      />
                      <div className={`my-auto text-[17px] flex-auto self-stretch} ${style.header}`}>
                       {item.name}
                      </div>
                    </div>
                    <div className="flex-auto self-stretch my-auto text-base text-zinc-500">
                      {item.connections}
                    </div>
                    <div className="flex gap-1  items-start self-end ">
                      <img
                        loading="lazy"
                        src={item.image2}
                        className="shrink-0 aspect-square mt-[6px] w-[22px]"
                      />
                      <div className="flex flex-col mt-1.5">
                        <div className="text-base text-black">{item.location}</div>
                        <div className=" text-sm text-zinc-400">{item.distance}</div>
                      </div>
                    </div>
                    <div className="flex gap-2 self-stretch my-auto text-xl font-medium text-black whitespace-nowrap">
                      <img
                        loading="lazy"
                        src={item.image3}
                        className="shrink-0 aspect-[0.96] w-[23px]"
                      />
                      <div className="my-auto text-base">{item.userQuantity}</div>
                    </div>
                    <div className="flex gap-1.5 self-stretch my-auto text-xl font-medium text-black whitespace-nowrap">
                      <img
                        loading="lazy"
                        src={item.image4}
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="my-auto text-base">{item.buildingQuantity}</div>
                    </div>
                    <div className="flex gap-2 self-stretch my-auto text-xl font-medium text-black whitespace-nowrap">
                      <img
                        loading="lazy"
                        src={item.image5}
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="my-auto text-base">{item.starQuantity}</div>
                    </div>
                  </div>
                  <div className="flex gap-3.5 my-auto text-sm text-center whitespace-nowrap">
                    <div className="justify-center px-5 py-3 text-white bg-emerald-500 rounded-[92.207px]">
                      Accept
                    </div>
                    <div className="justify-center px-5 py-3 text-red-500 border border-red-500 border-solid rounded-[92.207px]">
                      Reject
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </WrapperDash>
  );
}
