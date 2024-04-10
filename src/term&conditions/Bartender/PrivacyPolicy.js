import { useState } from "react";
import WrapperDash from "../../dashboard/WrapperDash";
import styles from '../termCondition.module.css'
import Dropdown from '../../dashboard/Bartender/Dropdown'
import Notification from '../../dashboard/Bartender/Notification'


export default function PrivacyPolicy() {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;
  return (
    <WrapperDash>
          {showModal && mainModal}
      {showModalnotify && mainModalnotify}
      <div className="flex  flex-col px-9  pb-6 rounded-3xl bg-zinc-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-5 pb-5 w-full max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
          <div className="flex gap-5 my-auto text-3xl font-semibold tracking-tighter text-yellow-400 whitespace-nowrap leading-[58.8px]">
            <div className="grow pt-3 my-auto uppercase font-[Bebas-Neue]">
              <span className=" text-neutral-700 font-[Bebas-Neue]">Privacy  </span>
              <span className="text-red-500 font-[Bebas-Neue] "> Policy</span>
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
          <div className={`text-[24px] text-red-500 text-left max-md:max-w-full} ${styles.header}`}>
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div className="mt-7 text-left max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Lobortis a et volutpat elit
            facilisis. Sed adipiscing sapien sed volutpat morbi netus augue.
            Phasellus tristique laoreet et tortor quis duis. Phasellus molestie
            elementum accumsan viverra in blandit tortor. Euismod justo nisl
            adipiscing sit faucibus. Neque amet sit posuere nec sed. Lorem ipsum
            dolor sit amet consectetur. Lobortis a et volutpat elit facilisis.
            Sed adipiscing sapien sed volutpat morbi netus augue. Phasellus
            tristique laoreet et tortor quis duis. Phasellus molestie elementum
            accumsan viverra in blandit tortor. Euismod justo nisl adipiscing
            sit faucibus. Neque amet sit posuere nec sed.
          </div>
          <div className="mt-3 text-left max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Lobortis a et volutpat elit
            facilisis. Sed adipiscing sapien sed volutpat morbi netus augue.
            Phasellus tristique laoreet et tortor quis duis. Phasellus molestie
            elementum accumsan viverra in blandit tortor. Euismod justo nisl
            adipiscing sit faucibus. Neque amet sit posuere nec sed. Lorem ipsum
            dolor sit amet consectetur. Lobortis a et volutpat elit facilisis.
            Sed adipiscing sapien sed volutpat morbi netus augue. Phasellus
            tristique laoreet et tortor quis duis. Phasellus molestie elementum
            accumsan viverra in blandit tortor. Euismod justo nisl adipiscing
            sit faucibus. Neque amet sit posuere nec sed. Lorem ipsum dolor sit
            amet consectetur. Lobortis a et volutpat elit facilisis. Sed
            adipiscing sapien sed volutpat morbi netus augue. Phasellus
            tristique laoreet et tortor quis duis. Phasellus molestie elementum
            accumsan viverra in blandit tortor. Euismod justo nisl adipiscing
            sit faucibus. Neque amet sit posuere nec sed. Lorem ipsum dolor sit
            amet consectetur. Lobortis a et volutpat elit facilisis. Sed
            adipiscing sapien sed volutpat morbi netus augue. Phasellus
            tristique laoreet et tortor quis duis. Phasellus molestie elementum
            accumsan viverra in blandit tortor. Euismod justo nisl adipiscing
            sit faucibus. Neque amet sit posuere nec sed.
          </div>
          <div className="mt-3 text-left max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Lobortis a et volutpat elit
            facilisis. Sed adipiscing sapien sed volutpat morbi netus augue.
            Phasellus tristique laoreet et tortor quis duis. Phasellus molestie
            elementum accumsan viverra in blandit tortor. Euismod justo nisl
            adipiscing sit faucibus. Neque amet sit posuere nec sed. Lorem ipsum
            dolor sit amet consectetur. Lobortis a et volutpat elit facilisis.
            Sed adipiscing sapien sed volutpat morbi netus augue. Phasellus
            tristique laoreet et tortor quis duis. Phasellus molestie elementum
            accumsan viverra in blandit tortor. Euismod justo nisl adipiscing
            sit faucibus. Neque amet sit posuere nec sed.
          </div>
          <div className="mt-3 text-left max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Lobortis a et volutpat elit
            facilisis. Sed adipiscing sapien sed volutpat morbi netus augue.
            Phasellus tristique laoreet et tortor quis duis. Phasellus molestie
            elementum accumsan viverra in blandit tortor. Euismod justo nisl
            adipiscing sit faucibus. Neque amet sit posuere nec sed. Lorem ipsum
            dolor sit amet consectetur. Lobortis a et volutpat elit facilisis.
            Sed adipiscing sapien sed volutpat morbi netus augue. Phasellus
            tristique laoreet et tortor quis duis. Phasellus molestie elementum
            accumsan viverra in blandit tortor. Euismod justo nisl adipiscing
            sit faucibus. Neque amet sit posuere nec sed. Lorem ipsum dolor sit
            amet consectetur. Lobortis a et volutpat elit facilisis. Sed
            adipiscing sapien sed volutpat morbi netus augue. Phasellus
            tristique laoreet et tortor quis duis. Phasellus molestie elementum
            accumsan viverra in blandit tortor. Euismod justo nisl adipiscing
            sit faucibus. Neque amet sit posuere nec sed. Lorem ipsum dolor sit
            amet consectetur. Lobortis a et volutpat elit facilisis. Sed
            adipiscing sapien sed volutpat morbi netus augue. Phasellus
            tristique laoreet et tortor quis duis. Phasellus molestie elementum
            accumsan viverra in blandit tortor. Euismod justo nisl adipiscing
            sit faucibus. Neque amet sit posuere nec sed.
          </div>
          <div className="mt-3 text-left max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Lobortis a et volutpat elit
            facilisis. Sed adipiscing sapien sed volutpat morbi netus augue.
            Phasellus tristique laoreet et tortor quis duis. Phasellus molestie
            elementum accumsan viverra in blandit tortor. Euismod justo nisl
            adipiscing sit faucibus. Neque amet sit posuere nec sed. Lorem ipsum
            dolor sit amet consectetur. Lobortis a et volutpat elit facilisis.
            Sed adipiscing sapien sed volutpat morbi netus augue. Phasellus
            tristique laoreet et tortor quis duis. Phasellus molestie elementum
            accumsan viverra in blandit tortor. Euismod justo nisl adipiscing
            sit faucibus. Neque amet sit posuere nec sed.
          </div>
    
        </div>
      </div>
    </WrapperDash>
  );
}
 
