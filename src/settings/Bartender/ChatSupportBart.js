import { useState } from "react";
import * as React from "react";
import WrapperDash from "../../dashboard/WrapperDash";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import style from "../setting.module.css";

function ChatSupportBart(props) {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const [showModal1, setShowModal1] = React.useState(false);
  return (
    <WrapperDash>
      {showModal && mainModal}
      {showModalnotify && mainModalnotify}

      <div className="flex gap-5 justify-between px-5 pb-5  max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
        <div className="flex gap-5 my-auto text-4xl font-semibold tracking-tighter text-yellow-400 whitespace-nowrap leading-[58.8px]">
          <div className=" mt-6 text-3xl ">
            <div className="grow text-black">
              <Link to={"/FreqAsk"}
              className="border-2 border-black rounded-[10px] px-4 ">
                &#10094;
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-5 pt-3 justify-between">
          <img
            onClick={() =>
              setShowModalnotify((setShowModalnotify) => !setShowModalnotify)
            }
            loading="lazy"
            src="/images/completeProfile/yellowNotify.png"
            className="shrink-0 self-start mt-4 aspect-square w-[42px]"
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

      <div className="flex gap-4 mt-5">
        {/* first */}
        <div className="   p-4 bg-white rounded-3xl shadow-2xl max-w-[480px]  min-h-[806px]">
          <div className="flex gap-2 px-6 py-2  mt-5 text-base leading-6 rounded-xl bg-neutral-100 text-stone-300 max-md:px-5 max-md:mx-2.5">
            <img
              loading="lazy"
              src="/images/search.png"
              className="shrink-0 aspect-square w-[15px] py-1"
            />
            <div className="flex-auto text-[15px] ">Search Here</div>
          </div>
          <div className="flex px-2 py-2 mt-10  bg-white">
            <div className="flex flex-col">
              <div className="text-base text-amber-300">
                <span
                  className={`text-[14px] text-black leading-4} ${style.header}`}
                >
                  Title of the ticket &nbsp; &nbsp;
                </span>
                <span className="text-[14px] font-medium leading-5 text-amber-300">
                  (Open)
                </span>
              </div>
              <div className="mt-1 text-[13px] leading-6 text-stone-500">
                Let have a meeting.. I will be available around 8pm.
              </div>
            </div>
            <div className="self-start text-[12px] text-stone-300">
              An hour ago
            </div>
          </div>

          <div
            style={{ backgroundColor: "rgba(255, 204, 66, 0.12)" }}
            className="flex px-2 py-2 mt-1.5 bg-white"
          >
            <div className="flex flex-col">
              <div className="text-base text-amber-300">
                <span
                  className={`text-[14px] text-black leading-4} ${style.header}`}
                >
                  Title of the ticket &nbsp; &nbsp;
                </span>
                <span className="text-[14px] font-medium leading-5  text-emerald-500">
                  (Closed)
                </span>
              </div>
              <div className="mt-1 text-[13px] leading-6 text-stone-500">
                Let have a meeting.. I will be available around 8pm.
              </div>
            </div>
            <div className="self-start text-[12px] text-stone-300">
              An hour ago
            </div>
          </div>
          <div className="flex px-2 py-2 mt-1.5 bg-white">
            <div className="flex flex-col">
              <div className="text-base text-amber-300">
                <span
                  className={`text-[14px] text-black leading-4} ${style.header}`}
                >
                  Title of the ticket &nbsp; &nbsp;
                </span>
                <span className="text-[14px] font-medium leading-5  text-emerald-500">
                  (Closed)
                </span>
              </div>
              <div className="mt-1 text-[13px] leading-6 text-stone-500">
                Let have a meeting.. I will be available around 8pm.
              </div>
            </div>
            <div className="self-start text-[12px] text-stone-300">
              An hour ago
            </div>
          </div>
          <div className="flex px-2 py-2 mt-1.5 bg-white">
            <div className="flex flex-col">
              <div className="text-base text-amber-300">
                <span
                  className={`text-[14px] text-black leading-4} ${style.header}`}
                >
                  Title of the ticket &nbsp; &nbsp;
                </span>
                <span className="text-[14px] font-medium leading-5  text-emerald-500">
                  (Closed)
                </span>
              </div>
              <div className="mt-1 text-[13px] leading-6 text-stone-500">
                Let have a meeting.. I will be available around 8pm.
              </div>
            </div>
            <div className="self-start text-[12px] text-stone-300">
              An hour ago
            </div>
          </div>
          <div className="flex px-2 py-2 mt-1.5 bg-white">
            <div className="flex flex-col">
              <div className="text-base text-amber-300">
                <span
                  className={`text-[14px] text-black leading-4} ${style.header}`}
                >
                  Title of the ticket &nbsp; &nbsp;
                </span>
                <span className="text-[14px] font-medium leading-5 text-amber-300">
                  (Open)
                </span>
              </div>
              <div className="mt-1 text-[13px] leading-6 text-stone-500">
                Let have a meeting.. I will be available around 8pm.
              </div>
            </div>
            <div className="self-start text-[12px] text-stone-300">
              An hour ago
            </div>
          </div>
          <div className="flex px-2 py-2 mt-1.5 bg-white">
            <div className="flex flex-col">
              <div className="text-base text-amber-300">
                <span
                  className={`text-[14px] text-black leading-4} ${style.header}`}
                >
                  Title of the ticket &nbsp; &nbsp;
                </span>
                <span className="text-[14px] font-medium leading-5 text-amber-300">
                  (Open)
                </span>
              </div>
              <div className="mt-1 text-[13px] leading-6 text-stone-500">
                Let have a meeting.. I will be available around 8pm.
              </div>
            </div>
            <div className="self-start text-[12px] text-stone-300">
              An hour ago
            </div>
          </div>
          <button
            onClick={() => setShowModal1(true)}
            className="justify-center py-4 w-full mt-2 text-sm text-center text-white bg-black rounded-[92.207px]"
          >
            Create New Ticket
          </button>
        </div>
        {/* second */}
        <div className="bg-white p-4 pt-5   rounded-3xl shadow-2xl w-full min-h-[806px]">
          <div className="flex flex-col px-5 max-w-[993px]">
            <div className="flex gap-5   justify-between border-b-2 pb-3 max-md:flex-wrap ">
              <div className="flex gap-4 ">
                <img
                  loading="lazy"
                  src="/images/chat2.png"
                  className="shrink-0 rounded-full aspect-square w-[60px]"
                />
                <div className="flex flex-col ">
                  <div className="text-[18px] text-black">Wanda Dean</div>
                  <div className="self-start  text-xs text-emerald-400 max-md:ml-2.5">
                    <span className="mr-[4px] text-sm">&#x2022;</span>
                    Online
                  </div>
                </div>
              </div>
              <Button
                variant="primary"
                onClick={() => setModalShow((setModalShow) => !setModalShow)}
              >
                &#x2022;&#x2022;&#x2022;
              </Button>
            </div>

            <div className="self-center mt-10 text-sm leading-6 text-zinc-500">
              Yesterday
            </div>
            <div className="flex gap-2 self-start mt-1.5 text-[15px] leading-7 text-black max-lg:flex-wrap">
              <img
                loading="lazy"
                src="/images/chat1.png"
                className="shrink-0 self-start mt-3 rounded-full aspect-square w-[30px]"
              />
              <div className="grow shrink-0 px-3.5 p-3 rounded-3xl bg-neutral-100 max-md:pr-5 max-w-[450px] max-md:max-w-full">
                Cool, let's talk about it later, shall we? This is going to be a
                huge!! We already sent you the details bro.
              </div>
            </div>
            <div className="flex flex-col pl-14 mt-1 w-full max-md:pl-5 max-md:max-w-full">
              <div className="text-[13px] leading-6 text-stone-500 max-md:max-w-full">
                15:30
              </div>
              <div className="justify-center items-start self-end p-3 mt-1 max-w-full text-[15px] leading-7 text-black bg-amber-300 rounded-3xl w-[433px] max-md:px-5">
                Cool, let's talk about it later, shall we? This is going to be a
                huge!! We already sent
              </div>
            </div>
            <div className="text-[13px] text-end mr-4 mt-1 leading-6 text-stone-500">
              15:30
            </div>

            <div className="flex gap-5 justify-between items-start mt-1 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2 mt-1.5 text-[15px] leading-7 text-black max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="/images/chat1.png"
                  className="shrink-0 self-start mt-3.5 rounded-full aspect-square w-[30px]"
                />
                <div className="grow p-3 pb-2.5 rounded-3xl bg-neutral-100 max-w-[450px] max-md:max-w-full">
                  Ok.. Will send you and John the meeting invite on your mail.
                </div>
              </div>
            </div>
            <div className="text-[13px] ml-14 mt-1 leading-6 text-stone-500">
              15:30
            </div>

            <div className="flex flex-col pl-14 mt-2.5 w-full max-md:pl-5 max-md:max-w-full">
              <div className="justify-center self-end p-3 mt-1.5 max-w-full text-[15px] leading-7 text-black bg-amber-300 rounded-3xl w-[432px] max-md:px-5">
                Ok.. See you in the meeting.. I will be good if John be in the
                meeting.. He has to be there.!
              </div>
            </div>
            <div className="text-[13px] text-end mr-3 mt-1 leading-6 text-stone-500">
              15:30
            </div>
            <div className="flex gap-5 justify-between mt-4 max-w-[450px] max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2 text-[15px] leading-7 text-black max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="/images/chat2.png"
                  className="shrink-0 self-start mt-2 rounded-full aspect-square w-[30px]"
                />
                <div className="grow justify-center p-3 rounded-3xl bg-neutral-100 w-fit max-md:max-w-full">
                  Ok.. Will send you and John the meeting invite on your mail.
                </div>
              </div>
            </div>
            <div className="self-start mt-1 ml-14 text-[13px] leading-6 text-stone-500 max-md:ml-2.5">
              15:30
            </div>
            <div className="flex  justify-between px-7 py-4 mt-10 w-full text-base leading-6 rounded-3xl bg-neutral-100 text-stone-500 text-opacity-109 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="/images/chatEmoji.png"
                  className="shrink-0 aspect-square w-[23px]"
                />
                <div className="flex-auto my-auto"></div>
                <input
                  className="w-[400px] bg-neutral-100 outline-none border-none"
                  type="text"
                  placeholder="Yeah, Me too! Let’s go out tonight."
                />
              </div>
              <img
                loading="lazy"
                src="/images/chatEnter.png"
                className="shrink-0 self-start aspect-[1.1] fill-black w-[23px]"
              />
            </div>
          </div>
        </div>
      </div>

      {showModal1 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col bg-white rounded-3xl max-w-[615px]">
                  <div className="flex self-center">
                    <div className={` text-[22px] mt-7 } ${style.header}`}>
                      Create Ticket
                    </div>
                    <button
                      onClick={() => setShowModal1(false)}
                      className="absolute right-4 top-2 text-xl"
                    >
                      &#10005;
                    </button>
                  </div>
                  <div className="flex flex-col px-7 mt-8 text-xs max-md:px-5 w-[400px] max-md:max-w-full">
                    <div className="flex flex-col px-5 py-2 bg-white border  border-gray-200 border-solid rounded-[92.207px] ">
                      <div className="text-black pl-1 max-md:max-w-full">
                        Ticket Title
                      </div>

                      <input
                        className="mt-1 pl-1 text-zinc-500 max-md:max-w-full outline-none border-none"
                        type="text"
                        placeholder="Enter Your Ticket Title Here"
                      />
                    </div>
                    <div className="flex gap-4 px-5 py-2 mt-4 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
                      <div className="flex flex-col flex-1 max-md:max-w-full">
                        <div className="text-black pl-1 max-md:max-w-full">
                          Select Subject
                        </div>
                        <div className="mt-1  text-zinc-500 max-md:max-w-full">
                          <select
                            id="countries"
                            className=" border-none outline-none w-full"
                          >
                            <option selected>Select Subject</option>
                            <option value="US">Lorem 1</option>
                            <option value="CA">Lorem 2</option>
                            <option value="FR">Lorem 3</option>
                            <option value="DE">Lorem 4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start  px-5 py-2  mt-3.5 border border-gray-200 border-solid rounded-[30px] max-md:px-5 max-md:max-w-full">
                      <div className="text-black">Ticket Description</div>
                      <textarea 
                        className="mt-2.5 w-full mb-10 border-none outline-none h-full "
                        placeholder=" Enter Ticket Description"
                      ></textarea>
                      
                    </div>
                    <button className="justify-center py-3.5 my-8 text-sm text-center text-black bg-amber-300 rounded-[92.207px] max-md:max-w-full">
                      Create Ticket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </WrapperDash>
  );
}

export default ChatSupportBart;
