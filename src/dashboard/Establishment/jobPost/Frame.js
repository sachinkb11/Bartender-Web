import React from 'react'

function Frame() {
  return (
    <div className="flex flex-col px-4 py-4 mt-10 ml-10 text-lg font-bold text-red-500 bg-white rounded-3xl border border-solid border-stone-300 max-w-[639px]">
      <div className="max-md:max-w-full">ABS Restro</div>
      <div className="mt-2.5 text-sm font-light leading-5 text-neutral-400 max-md:max-w-full">
        Address: Lorem ipsum dolor sit amet consectetur.
      </div>
      <div className="shrink-0 mt-6 h-px border border-solid bg-stone-300 border-stone-300 max-md:max-w-full" />
      <div className="mt-5 max-md:max-w-full">Jar Bar </div>
      <div className="mt-3 text-base font-light leading-5 text-neutral-400 max-md:max-w-full">
        Address: Lorem ipsum dolor sit amet consectetur.
      </div>
    </div>
  )
}

export default Frame
