import React from 'react'
import { MdLocationPin, MdCall, MdEmail } from "react-icons/md";

export default function QuestionPart() {
  return (
    <div className='pb-16'>
      <h6 className="pb-6 text-white text-lg">Have a Question ?</h6>
      <div className="pb-4 flex items-start space-x-6 text-[#BFC0C2]">
        <MdLocationPin className="text-2xl text-white" />
        <p className="text-sm">
          203 Fake St.Mountain View, San Francisco, California, USA
        </p>
      </div>
      <div className="pb-4 flex items-start space-x-6 ">
        <MdCall className="text-lg text-white" />
        <p className="text-sm text-white">+2 392 3929 210</p>
      </div>
      <div className="pb-4 flex items-start space-x-6 ">
        <MdEmail className="text-lg text-white" />
        <p className="text-sm text-white">info@yourdomain.com</p>
      </div>
    </div>
  );
}
