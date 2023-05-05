import React from 'react'
import Input from './Input'

export default function Form() {
  return (
    <form className="p-4 pb-20 sm:w-1/2 pt-8">
      <Input type={"text"} placeholder={"Your Name"} name="fullName" />
      <Input type={"email"} placeholder={"Your Email"} name="email" />
      <Input type={"text"} placeholder={"Subject"} name="subject" />
      <Input type={"textarea"} placeholder={"Message"} name="message" />
      <input type="submit" className='bg-[#FFD368] text-xs text-white px-8 py-3 rounded-sm' value="Send Message"/>
    </form>
  );
}
