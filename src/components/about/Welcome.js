import React, { useState } from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import { dataTabs } from '@/data/dataAbout';

export default function Welcome() {
  const [isSelected, setisSelected] = useState(0);
  return (
    <section className="sm:px-20 px-4 md:px-32 sm:pb-6 sm">
      <div className="relative md:grid md:grid-cols-2 md:gap-10">
        <div className="relative">
          <img
            src="img/about.jpg"
            alt="Femme portant des lunettes de soleil"
            className="w-full"
          />
          <div className="centered-element-small p-4 bg-[#FFD368] rounded-full md:hidden">
            <AiFillCaretRight className="text-white text-xl" />
          </div>
          <div className="centered-element-big hidden p-4 bg-[#FFD368] rounded-full md:block">
            <AiFillCaretRight className="text-white text-xl" />
          </div>
        </div>

        <div className="pt-8 md:flex md:flex-col md:justify-center md:-w-1/2">
          <h5 className="text-xs font-semibold text-gray-300 pb-1">
            Welcome to Readit
          </h5>
          <h2 className="text-xl font-bold text-black pb-4">
            We give you the best articles you want.
          </h2>
          <p className="text-xs font-light text-gray-500 pb-5">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
          <div className="sm:flex sm:space-x-2 md:w-full">
            {dataTabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  className={`w-full  text-center  py-2 rounded-md hover:bg-[#FFD368] ${
                    isSelected === index
                      ? "bg-[#FFD368] text-white border-none"
                      : "bg-white text-black border border-gray-200"
                  } hover:text-white  mb-1`}
                  onClick={() => {
                    setisSelected(index);
                  }}
                >
                  <p className="text-xs font-semibold">{tab.title}</p>
                </div>
              );
            })}
          </div>

          {dataTabs.map(
            (tab, index) =>
              isSelected === index && (
                <div
                  key={index}
                  className={`px-4 py-6 bg-gray-100 border border-gray-200 text-xs font-light text-gray-500 mb-20 md:mb-10`}
                >
                  <p>{tab.content}</p>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
