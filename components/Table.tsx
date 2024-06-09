import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

// ProjectTable component
const ProjectTable = () => {
  return (
    <table className="w-full h-full ">
      <thead>
        <tr>
          <th className="px-4 text-gray-400 text-sm py-2 text-left">
            Project Name
          </th>
          <th className="px-4 text-gray-400 text-sm py-2 text-left">Size</th>
          <th className="px-4 text-gray-400 text-sm py-2 text-left">
            Time Due
          </th>
          <th className="px-4 text-gray-400 text-sm py-2 text-left">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className=" flex items-center gap-2 text-gray-900 text-sm font-semibold border-t border-gray-300 px-4 py-2">
            <div className=" flex justify-center items-center h-8 w-8 bg-gray-200 rounded-full">
              <FaStarOfLife className=" text-green-600" />
            </div>{" "}
            <span>WimpsyWork</span>
          </td>
          <td className=" text-gray-900 text-sm font-semibold border-t border-gray-300 px-4 py-2">
            14.2gb
          </td>
          <td className=" text-gray-900 text-sm font-semibold border-t border-gray-300 px-4 py-2">
            23/12/2023
          </td>
          <td className=" text-gray-900 text-sm font-semibold border-t border-gray-300 px-4 py-2">
            $223.000.00
          </td>
        </tr>
        <tr>
          <td className=" flex items-center gap-2 text-gray-900 text-sm font-semibold border-t border-gray-300 px-4 py-2">
            <div className=" flex justify-center items-center h-8 w-8 bg-gray-200 rounded-full">
              <IoMdSunny className=" text-xl text-yellow-400" />
            </div>{" "}
            <span>DoodleVerse</span>
          </td>
          <td className=" text-gray-900 text-sm font-semibold   px-4 py-2">
            123.5gb
          </td>
          <td className=" text-gray-900 text-sm font-semibold   px-4 py-2">
            01/09/2024
          </td>
          <td className=" text-gray-900 text-sm font-semibold  px-4 py-2">
            $13.000.00
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProjectTable;
