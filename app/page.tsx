"use client";
import Image from "next/image";
import { useState } from "react";
import { CiCirclePlus, CiImageOn } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { TbMusicStar } from "react-icons/tb";
import { VscBellDot } from "react-icons/vsc";

export default function Home() {
  const dashboardItem = [
    "Dashboard",
    "Storage",
    "Collections",
    "Collaborations",
    "Analytics",
    "Trash",
    "Settings",
  ];
  const [activeItem, setActiveItem] = useState("Dashboard");
  return (
    <main className="bg-[#d4d4d4] min-h-screen min-w-screen flex justify-center items-center">
      <div className="w-[95vw] h-[95vh] shadow-2xl bg-white flex flex-col">
        <div className="w-full h-1/2 overflow-hidden bg-[#265c4c] md:p-4">
          <div className="w-full h-full overflow-hidden bg-[#265c4c]">
            <div className="w-full min-h-10 flex items-center justify-between">
              <div className="flex-1 flex gap-2 justify-start items-center">
                <Image src={"/star.webp"} alt="logo" height={40} width={40} />
                <span className="text-4xl text-gray-200 font-[400]">
                  Creative Space{" "}
                </span>
              </div>
              <div className="flex-1 min-h-10 flex gap-5 justify-end items-center">
                <div className="flex gap-2 h-full justify-center items-center">
                  <span className="font-semibold text-gray-200">Maksym K.</span>
                  <Image
                    src={"/profile.webp"}
                    alt="user"
                    className="object-contain rounded-full"
                    height={45}
                    width={45}
                  />
                </div>
                <div className="flex justify-center items-center min-h-12 min-w-12 cursor-pointer bg-white rounded-full">
                  <VscBellDot className="text-2xl" />
                </div>
                <div className="flex min-h-12 min-w-24 rounded-full justify-center items-center gap-2 bg-[#3c856f]">
                  <CiCirclePlus className="text-2xl font-bold text-[#f0ea6f]" />
                  <span className="font-thin text-xl text-gray-200">Join</span>
                </div>
              </div>
            </div>
            <div className="w-full h-full gap-3 mt-5 flex">
              <div className="w-1/6 flex flex-col gap-4 h-full">
                {dashboardItem.map((item) => (
                  <span
                    key={item}
                    className={`${
                      item === activeItem
                        ? "text-yellow-300 opacity-100"
                        : "text-gray-400 opacity-50 font-semibold"
                    } cursor-pointer`}
                    onClick={() => setActiveItem(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="w-1/3 h-full bg-[#3c856f]">
                <div className="  w-full h-1/5">
                  <div className=" ml-3 mt-3 h-12 w-12 shadow-2xl  bg-[rgb(38,92,76)] rounded-full flex justify-center items-center">
                    <CiImageOn className=" text-2xl text-yellow-300" />
                  </div>
                </div>
                <div className=" ml-3 w-full h-1/4">
                  <div className=" flex flex-col gap-1   justify-start">
                    <span className=" text-gray-300 font-normal">Pictures</span>
                    <span className=" text-white font-bold text-5xl">6455</span>
                  </div>
                </div>
                <div className="border-t p-5 flex gap-2 justify-center items-center border-green-800 w-full h-1/3">
                  <div className=" h-full w-1/3 border-green-800  border-r">
                    <div className=" flex flex-col justify-center">
                      <span className=" font-medium text-gray-300">Total</span>
                      <span className=" text-white font-semibold text-2xl">
                        100GB
                      </span>
                    </div>
                  </div>
                  <div className=" h-full w-1/3 border-green-800  border-r">
                    <div className=" flex flex-col justify-center">
                      <span className=" font-medium text-gray-300">Used</span>
                      <span className=" text-white font-semibold text-2xl">
                        43GB
                      </span>
                    </div>
                  </div>
                  <div className=" h-full w-1/3">
                    <div className=" flex flex-col justify-center">
                      <span className=" font-medium text-gray-300">
                        Available
                      </span>
                      <span className=" text-white font-semibold text-2xl">
                        57GB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 h-full bg-[#3c856f]">
                <div className="  w-full h-1/5">
                  <div className=" ml-3 mt-3 h-12 w-12 shadow-2xl  bg-[#265c4c] rounded-full flex justify-center items-center">
                    <IoVideocamOutline className=" text-2xl text-yellow-300" />
                  </div>
                </div>
                <div className=" ml-3 w-full h-1/4">
                  <div className=" flex flex-col gap-1   justify-start">
                    <span className=" text-gray-300 font-normal">Videos</span>
                    <span className=" text-white font-bold text-5xl">3221</span>
                  </div>
                </div>
                <div className="border-t p-5 flex gap-2 justify-center items-center border-green-800 w-full h-1/3">
                  <div className=" h-full w-1/3 border-green-800  border-r">
                    <div className=" flex flex-col justify-center">
                      <span className=" font-medium text-gray-300">Total</span>
                      <span className=" text-white font-semibold text-2xl">
                        100GB
                      </span>
                    </div>
                  </div>
                  <div className=" h-full w-1/3 border-green-800  border-r">
                    <div className=" flex flex-col justify-center">
                      <span className=" font-medium text-gray-300">Used</span>
                      <span className=" text-white font-semibold text-2xl">
                        43GB
                      </span>
                    </div>
                  </div>
                  <div className=" h-full w-1/3">
                    <div className=" flex flex-col justify-center">
                      <span className=" font-medium text-gray-300">
                        Available
                      </span>
                      <span className=" text-white font-semibold text-2xl">
                        57GB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 h-full bg-[#3c856f]">
                <div className="  w-full h-1/5">
                  <div className=" ml-3 mt-3 h-12 w-12 shadow-2xl  bg-[#265c4c] rounded-full flex justify-center items-center">
                    <TbMusicStar className=" text-2xl text-yellow-300" />
                  </div>
                </div>
                <div className=" ml-3 w-full h-1/4">
                  <div className=" flex flex-col gap-1   justify-start">
                    <span className=" text-gray-300 font-normal">Sounds</span>
                    <span className=" text-white font-bold text-5xl">1443</span>
                  </div>
                </div>
                <div className="border-t p-5 flex gap-2 justify-center items-center border-green-800 w-full h-1/3">
                  <div className=" h-full w-1/3 border-green-800  border-r">
                    <div className=" flex flex-col justify-center">
                      <span className=" font-medium text-gray-300">Total</span>
                      <span className=" text-white font-semibold text-2xl">
                        100GB
                      </span>
                    </div>
                  </div>
                  <div className=" h-full w-1/3 border-green-800  border-r">
                    <div className=" flex flex-col justify-center">
                      <span className=" font-medium text-gray-300">Used</span>
                      <span className=" text-white font-semibold text-2xl">
                        43GB
                      </span>
                    </div>
                  </div>
                  <div className=" h-full w-1/3">
                    <div className=" flex flex-col justify-center">
                      <span className=" font-medium text-gray-300">
                        Available
                      </span>
                      <span className=" text-white font-semibold text-2xl">
                        57GB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/6 h-full bg-[rgb(60,133,111)]">
                <div className=" flex flex-col h-full gap-1">
                  <div className="flex mt-10 flex-col justify-center items-center h-1/4">
                    <span className="font-medium text-gray-300">
                      Used Space
                    </span>
                    <span className=" font-semibold text-5xl text-yellow-300">
                      64.2<span className=" text-sm absolute">%</span>
                    </span>
                  </div>
                  <div className=" h-full w-full flex flex-col">
                    <div className="w-full h-[15%] diagonal-lines"></div>
                    <div className="w-full h-[40%] diagonal-lines_B"></div>
                    <div className="w-full h-[40%] bg-black diagonal-lines"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 overflow-hidden bg-white md:p-6">
          <div className="w-full flex gap-10 h-full overflow-hidden bg-white">
            <div className="h-full flex flex-col gap-5 w-1/3">
              <div className=" w-full flex justify-between border-black h-[15%] border-b">
                <span className=" font-bold text-2xl">Team Activity</span>
                <div className=" flex gap-3 justify-center items-center">
                  hi
                </div>
              </div>
            </div>
            <div className="h-full w-2/3 bg-slate-100">2</div>
          </div>
        </div>
      </div>
    </main>
  );
}
