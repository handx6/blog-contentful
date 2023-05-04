import Link from "next/link";
import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Hero({ page }) {
  if (page === "Home") {
    return (
      <>
        <div className="h-[calc(100vh_-_68px)] md:h-[60vh] bg-cover bg-center bg-hero flex flex-col justify-center text-white p-4 sm:px-20 md:px-32 sm:py-6">
          <h4 className="text-md pb-4">Hello! Welcome to</h4>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold pb-6">
            Readit blog
          </h1>
          <p className="text-md pb-6 md:max-w-lg">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <a href="/#posts">
            <BsArrowDown className="text-3xl" />
          </a>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="h-[calc(100vh_-_68px)] md:h-[60vh] bg-cover bg-center bg-hero flex flex-col justify-end">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl text-white font-bold text-center pb-8">
            {page[page.length - 1]}
          </h1>
          <div className="flex items-center justify-center space-x-4 pb-8">
            {page.map((item, index) => {
              return (
                <div key={index} className="flex">
                  {index < page.length - 1 ? (
                    <>
                      <Link key={index} href="/">
                        <p
                          className={`text-sm ${
                            index === page.length - 1
                              ? "text-[#F9B4D5]"
                              : "text-white"
                          } `}
                        >
                          {item}
                        </p>
                      </Link>
                      <RiArrowRightSLine className="text-[#F9B4D5] text-xl" />
                    </>
                  ) : (
                    <p
                      className={`text-sm ${
                        index === page.length - 1
                          ? "text-[#F9B4D5]"
                          : "text-white"
                      } `}
                    >
                      {item}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
