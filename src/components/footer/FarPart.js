import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function FarPart() {
  return (
    <div className=''>
      <p className="text-3xl font-black pb-6 text-white">
        Read<span className="text-[#FED267]">it</span>.
      </p>
      <p className="text-sm text-[#BFC0C2] pb-6 ">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div className="flex space-x-2 text-xl pb-5">
        <div className="rounded-full text-white bg-[#282E37] p-3">
          <FaTwitter className="" />
        </div>
        <div className="rounded-full text-white bg-[#282E37] p-3">
          <FaFacebookF className="rounded-full  text-white" />
        </div>
        <div className="rounded-full text-white bg-[#282E37] p-3">
          <AiOutlineInstagram className="rounded-full bg-[#282E37] text-white" />
        </div>
      </div>
    </div>
  );
}
