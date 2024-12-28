import React from "react";

const AcceptTask = ({ date, description, title, category }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl ">
      <div className=" flex justify-between items-center">
        <h3 className=" bg-red-600 px-3 py-1 rounded text-sm">{category}</h3>
        <h4 className="text-base"> {date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{title} </h2>
      <p className="text-sm mt-2">{description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 rounded-md py-1 px-2 text-xs">
          Mark as Completed
        </button>
        <button className="bg-red-500 rounded-md py-1 px-2 text-xs">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
