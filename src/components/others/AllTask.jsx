import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setuserData] = useContext(AuthContext);

  return (
    <div id="AllTask" className=" bg-[#1C1C1C] rounded p-5 mt-5 h-48 ">
      <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2 className=" text-lg font-medium w1/5 ">Employee Name</h2>
        <h5 className=" text-lg font-medium w1/5 ">New Task </h5>
        <h5 className=" text-lg font-medium w1/5 ">Active Task</h5>
        <h5 className=" text-lg font-medium w1/5 ">Completed</h5>
        <h5 className=" text-lg font-medium w1/5 ">Falied</h5>
      </div>
      <div className="h-[80%] overflow-auto  ">
        {userData.employees.map((element, idx) => {
          return (
            <div
              className=" text-lg font-medium bg-transparent py-2 px-4 mb-2 flex justify-between rounded"
              key={idx}
            >
              <h2 className="text-lg font-medium w1/5">{element.name}</h2>
              <h5 className="text-lg font-medium w1/5 text-blue-600">
                {element.taskCount.newTask}{" "}
              </h5>
              <h5 className="text-lg font-medium w1/5 text-red-900">
                {element.taskCount.active}
              </h5>
              <h5 className="text-lg font-medium w1/5 text-yellow-500">
                {element.taskCount.completed}
              </h5>
              <h5 className="w1/5 text-red-600">{element.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
