"use client"
import React from "react";
import Image from "next/image";
import Navbar from "./navbar";
import { insSerif ,geist} from "../fonts";
function maincta() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div
          style={{
            backgroundImage: "url(/backdrop.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            width: "100%", 
            height: "100vh",
            overflow: "hidden",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full z-10 mt-[33px]">
          <Navbar />
          <div className="pt-[175px]">
            <p
              className={`${insSerif.className} text-9xl text-right mr-[48px]`}
            >
              Developer
            </p>
            <p
              className={`${insSerif.className} text-6xl text-right mr-[48px]`}
            >
              Designer
            </p>
          </div>
          <div className="grid grid-cols-2 pt-[200px]">
                <div className="mx-10 mb-5 self-end flex items-center space-x-4">
                    <div>
                        <Image className="" alt="star" src="/star.svg" height={48} width={48} />
                    </div>
                    <div>
                        <p className={`text-3xl font-geist font-bold ${geist.className}`}>
                            {(() => {
                                const [currentTimeIST, setCurrentTimeIST] = React.useState(
                                    new Date().toLocaleString("en-US", {
                                        timeZone: "Asia/Kolkata",
                                        hour12: true,
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })
                                );

                                React.useEffect(() => {
                                    const interval = setInterval(() => {
                                        setCurrentTimeIST(
                                            new Date().toLocaleString("en-US", {
                                                timeZone: "Asia/Kolkata",
                                                hour12: true,
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })
                                        );
                                    }, 1000);

                                    return () => clearInterval(interval);
                                }, []);

                                return currentTimeIST;
                            })()}
                        </p>
                        <p className={`font-regular text-sm ${geist.className}`}>
                            (UTC: {(() => {
                                const [currentTimeUTC, setCurrentTimeUTC] = React.useState(
                                    new Date().toLocaleString("en-US", {
                                        timeZone: "UTC",
                                        hour12: true,
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })
                                );

                                React.useEffect(() => {
                                    const interval = setInterval(() => {
                                        setCurrentTimeUTC(
                                            new Date().toLocaleString("en-US", {
                                                timeZone: "UTC",
                                                hour12: true,
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })
                                        );
                                    }, 1000);

                                    return () => clearInterval(interval);
                                }, []);

                                return currentTimeUTC;
                            })()})
                        </p>
                        
                        <p className={`font-regular text-lg ${geist.className}`}>New Delhi, India</p>
                    </div>
                </div>
                <div className="mb-5 self-end justify-end flex mr-[44px]">
                    <p className={`${geist.className}`}> Hi, I am <br /><b>Anushk Kumar</b><br/>Driven by Cool Stuff Engine</p>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default maincta;
