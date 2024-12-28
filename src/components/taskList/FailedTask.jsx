import React from "react";

const FailedTask = ({ date, discription, title, category }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-orange-500 rounded-xl ">
      <div className=" flex justify-between items-center">
        <h3 className=" bg-red-600 px-3 py-1 rounded text-sm">{category}</h3>
        <h4 className="text-base"> {date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{title} </h2>
      <p className="text-sm mt-2">{discription}</p>
      <div className="mt-2">
        <button className="w-full py-1 px-2 text-xs bg-red-500 rounded-md">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
