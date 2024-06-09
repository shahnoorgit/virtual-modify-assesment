import React from "react";

const LineChart = () => {
  return (
    <div className="flex justify-start -mt-12 items-center h-full">
      <div className="relative w-[90%] h-full">
        {/* Line */}
        <div className="absolute left-0 bottom-0 w-full h-2 bg-black"></div>

        {/* Vertical lines */}
        <div className="absolute bottom-0" style={{ left: "0%" }}>
          <div className="absolute w-0.5 h-12 bg-black top-0 transform -translate-x-1/2 -translate-y-full"></div>
          <p className="absolute -mt-16 -ml-0 text-sm  font-bold text-gray-900">
            33trb
          </p>
          <p className="absolute text-xs -mt-0 text-gray-400 font-normal -ml-0">
            Jun
          </p>
        </div>
        <div className="absolute bottom-0" style={{ left: "33.33%" }}>
          <div className="absolute w-0.5 h-20 bg-black top-0 transform -translate-x-1/2 -translate-y-full"></div>
          <p className="absolute -mt-24 -ml-0 text-sm font-bold text-gray-900">
            51trb
          </p>
          <p className="absolute text-xs -mt-0 text-gray-400 font-normal -ml-0">
            Jul
          </p>
        </div>
        <div className="absolute bottom-0" style={{ left: "66.66%" }}>
          <div className="absolute w-0.5 h-10 bg-black top-0 transform -translate-x-1/2 -translate-y-full"></div>
          <p className="absolute -mt-16 -ml-0 text-sm font-bold text-gray-900">
            36trp
          </p>
          <p className="absolute text-xs -mt-0 text-gray-400 font-normal -ml-0">
            Apr
          </p>
        </div>
        <div className="absolute bottom-0" style={{ left: "83.33%" }}>
          <div className="absolute w-0.5 h-8 bg-black top-0 transform -translate-x-1/2 -translate-y-full"></div>
          <p className="absolute -mt-14 -ml-0 text-sm font-bold text-gray-900">
            27trp
          </p>
          <p className="absolute text-xs -mt-0 text-gray-400 font-normal -ml-0">
            Sep
          </p>
        </div>

        {/* Change color to red after the last vertical line */}
        <div
          className="absolute bottom-0"
          style={{ left: "83.33%", width: "16.67%", zIndex: "1" }}
        >
          <div className="absolute w-full -top-2 h-2 bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
