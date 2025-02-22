import React from "react";
import Header from "../others/header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashBoard = (props) => {
  // console.log(data.id);
  return (
    <div className=" h-screen w-full p-7">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashBoard;
