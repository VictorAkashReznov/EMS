import React from "react";
import Header from "../others/header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../taskList/TaskList";

const EmployeeDashBoard = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashBoard;
