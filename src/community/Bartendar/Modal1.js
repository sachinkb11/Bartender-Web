import React from "react";
import style from '../community.module.css'
function Modal1({ items }) {
  return (
    <div className="mb-5">
     
      {items.map((item) => {
        return (
          <>
            <div className="flex gap-3.5  px-4 mx-5 mb-2 py-1  rounded-md border border-solid border-neutral-200 max-md:flex-wrap max-md:px-5">
              <img
                loading="lazy"
                src={item.image}
                className="shrink-0 rounded-full border-4 border-white border-solid shadow-lg aspect-square w-[55px]"
              />
              <div className="flex flex-col my-auto">
                <div className="flex gap-2.5">
                  <div className="flex gap-1 items-center text-black">
                    <div className={`grow self-stretch my-auto text-xl} ${style.header}`}>Jane Doe</div>
                    <img
                      loading="lazy"
                      src={item.image2}
                      className="shrink-0 self-stretch aspect-[1.05] w-[21px]"
                    />
                    <div className="self-stretch my-auto text-sm">
                      {item.location}
                    </div>
                  </div>
                  <div className="my-auto text-sm text-zinc-400">{item.distance}</div>
                </div>
                <div className="flex gap-5 mt-1 text-sm font-medium text-black whitespace-nowrap max-md:pr-5">
                  <div className="flex gap-1.5">
                    <img
                      loading="lazy"
                      src={item.image3}
                      className="shrink-0 w-4 aspect-[0.94]"
                    />
                    <div>{item.BartendarQuantity}</div>
                  </div>
                  <div className="flex gap-1">
                    <img
                      loading="lazy"
                      src={item.image4}
                      className="shrink-0 aspect-square w-[17px]"
                    />
                    <div className="my-auto">{item.buildingQuantity}</div>
                  </div>
                  <div className="flex gap-1">
                    <img
                      loading="lazy"
                      src={item.image5}
                      className="shrink-0 aspect-square w-[17px]"
                    />
                    <div className="my-auto">{item.starQuantity}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Modal1;
