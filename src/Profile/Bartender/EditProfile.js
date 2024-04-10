import React from 'react'
import { Link } from 'react-router-dom'

function EditProfile() {
  return (
    <div className="absolute z-20 top-1 left-[320px] flex flex-col px-8 py-2 max-w-lg m-6 text-base text-black border-2 bg-white rounded-3xl w-[350px] max-md:px-5">
      <div className="flex gap-[65px] justify-between items-start self-end max-w-full text-lg text-red-500 ">
        <div className="flex flex-col items-center mt-3">
          <img
            loading="lazy"
            src="/images/profileChange.png"
            className="aspect-square w-[114px]"
          />
          <div className="mt-1">John Doe</div>
        </div>
        <span className='text-black text-2xl'>&#10005;</span>
      </div>
      <div className="flex gap-3 justify-between px-7 py-2 mt-5 bg-white rounded-xl border-2 border-amber-300 border-solid max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <Link to={"/basicInfo"}>Basic Info</Link>
        <span className='text-xl'>&#10095;</span>
      </div>
      <div className="flex gap-3 justify-between px-7 py-2 mt-5 whitespace-nowrap bg-white rounded-xl border-2 border-amber-300 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <Link to={"/designation"} className="my-auto">Designation</Link>
        <span className='text-xl'>&#10095;</span>

      </div>
      <div className="flex gap-3 px-7 py-2 mt-5 bg-white rounded-xl border-2 border-amber-300 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <Link to={"/SkillInterest"} className="flex-auto">Skills & Interest</Link>
        <span className='text-xl'>&#10095;</span>

      </div>
      <div className="flex gap-3 px-7 py-2 mt-5 bg-white rounded-xl border-2 border-amber-300 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <Link to={"/LinkDocument"} className="flex-auto">Links & Documents</Link>
        <span className='text-xl'>&#10095;</span>

      </div>
      <div className="flex gap-3 px-7 py-2 mt-5 bg-white rounded-xl border-2 border-amber-300 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <Link to={"/BackGroundCheck"} className="flex-auto my-auto">Background Check</Link>
        <span className='text-xl'>&#10095;</span>

      </div>
      <div className="flex gap-3 px-7 py-2 mt-5 bg-white rounded-xl border-2 border-amber-300 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <Link to={"/PaymentSetup"} className="flex-auto my-auto">Payment Setup</Link>
        <span className='text-xl'>&#10095;</span>

      </div>
    </div>
  )
}

export default EditProfile
