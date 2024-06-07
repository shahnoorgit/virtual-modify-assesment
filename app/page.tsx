"use client";
import Image from "next/image";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
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
        <div className="w-full h-1/2 overflow-hidden bg-[#265c4c] md:p-6">
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
              <div className="w-1/3 h-full bg-[#3c856f]">Div 2</div>
              <div className="w-1/3 h-full bg-[#3c856f]">Div 3</div>
              <div className="w-1/3 h-full bg-[#3c856f]">Div 4</div>
              <div className="w-1/6 h-full bg-[#3c856f]">Div 5</div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 overflow-hidden bg-white md:p-6">
          <div className="w-full h-full overflow-hidden bg-white">box-2</div>
        </div>
      </div>
    </main>
  );
}
