import React from "react";

function baseFooter() {
  return (

    // NEED TO ADD RESPONSIVENESS
    <div>
      <div className="w-auto mx-10 my-10 bg-brand-secondary rounded-2xl h-[98px]">
        <div className="grid grid-cols-3">
          <div className="flex justify-left items-center py-5 px-10">
            <div>
              <p className="font-bold italic text-gray-400">anushk3984@gmail.com</p>
              <p className="font-bold italic">+91-9205450379</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-5 px-10">
            <p className="text-4xl font-bold font-inter italic text-center">
              BERSERK
            </p>
          </div>
          <div className="flex items-center justify-end py-5 pr-10">
            <div className="text-right">
              <p className="font-bold italic text-gray-400">@berserk-23115</p>
              <p className="font-bold">© 2025 All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default baseFooter;
