import React from "react";

const CompletTask = ({ date, description, title, category }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl ">
      <div className=" flex justify-between items-center">
        <h3 className=" bg-red-600 px-3 py-1 rounded text-sm">{category}</h3>
        <h4 className="text-base"> {date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{title} </h2>
      <p className="text-sm mt-2">{description}</p>
      <div className="mt-2">
        <button className="text-xs w-full rounded-md py-1 px-2">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompletTask;
