import React from 'react'

export default function CardClientAbout({urlImg, nameClient, job, desc, style}) {
  return (
    <div className={`border md:flex max-w-lg border-gray-100 shadow-md px-4 py-6 mb-10 flex flex-col justify-between ${style}`}>
      <p className="text-xs text-gray-500 font-light leading-6 pb-2">{desc}</p>
      <div className="flex">
        <img
          src={urlImg}
          alt={nameClient}
          className="w-[90px] h-[90px] rounded-full p-4 object-cover"
        />
        <div className="flex flex-col justify-center">
          <h5 className="text-black text-sm pb-2">{nameClient}</h5>
          <h6 className="text-[#FFD368] text-xs font-light">{job}</h6>
        </div>
      </div>
    </div>
  );
}
