import React from 'react'

function Block() {
  return (
    <div className=" fixed right-[400px] flex flex-col px-8 py-5 text-center bg-white rounded-3xl border-2 max-w-[393px]">
    <div className="self-center text-xl font-medium leading-7 text-black">
      Are you sure you want to
      <br />
      block Josephine Arden?
    </div>
    <div className="flex gap-2.5 mt-8 text-lg capitalize whitespace-nowrap">
      <button className="justify-center px-12 py-4 text-black bg-white border border-amber-300 border-solid rounded-[110px]">
        Cancel
      </button>
      <button className="justify-center px-14 py-4 text-white bg-red-500 rounded-[110px]">
        block
      </button>
    </div>
  </div>
  )
}

export default Block
