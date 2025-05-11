import Image from "next/image";
import React from "react";
import { insSerif } from "../fonts";

function heroCta() {
  return (
    <>
      <div className="w-full mx-[133px]">
        <div className="grid grid-cols-2">
          <div className="">
            <p className={`${insSerif.className} text-8xl`}>Anushk Kumar</p>
            <div className="my-4">
              <p className="text-3xl font-bold">
                Web Developer , Cybersec Analyst
              </p>
              <p className="text-3xl font-thin font-geist"> CSE | IIIT Delhi</p>
            </div>
            <div className="flex flex-wrap gap-6 w-full mt-4">
              <div className="flex items-center space-x-2">
                <a href="https://www.linkedin.com/in/anushk-kumar-a0b7b61ba" className="flex items-center space-x-2 text-3xl hover:text-gray-700">
                  <span>LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right hover:stroke-gray-700"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <a href="https://github.com/berserk-23115" className="flex items-center space-x-2 text-3xl hover:text-gray-700">
                  <span>Github</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right hover:stroke-gray-700"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <a href="https://x.com/AnushkKumar1" className="flex items-center space-x-2 text-3xl hover:text-gray-700">
                  <span>X</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right hover:stroke-gray-700"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <Image
              width={360}
              height={360}
              alt="memoji"
              src={"/anushk-memoji.svg"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default heroCta;
