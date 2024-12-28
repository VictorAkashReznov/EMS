import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setuserData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");
  // const [newTask, setnewTask] = useState(null);
  const submitHandler = (event) => {
    event.preventDefault();
    // setnewTask({
    //   title: taskTitle,
    //   description: taskDescription,
    //   date: taskDate,
    //   category: category,
    //   status: {
    //     active: false,
    //     newTask: true,
    //     completed: false,
    //     failed: false,
    //   },
    // });
    const currTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: category,
      status: {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    };

    const employees = userData.employees;

    employees.forEach((element) => {
      if (assignTo == element.name) {
        element.tasks.push(currTask);
        element.taskCount.active++;
      }
    });
    setuserData({ employees });
    localStorage.setItem("employees", JSON.stringify(employees));

    settaskDate("");
    settaskTitle("");
    settaskDescription("");
    setassignTo("");
    setcategory("");
  };

  return (
    <div className="p-5 rounded mt-7 bg-[#1C1C1C]">
      <form
        onSubmit={(event) => {
          submitHandler(event);
        }}
        className=" w-full flex flex-wrap items-start justify-between"
      >
        <div className=" w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              type="text"
              className="text-sm px-1 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Make a UI design"
            ></input>
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              className="text-sm px-1 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            ></input>
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setassignTo(e.target.value);
              }}
              className="text-sm px-1 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee nmae"
            ></input>
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              className="text-sm px-1 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder=" design, dev, etc."
            ></input>
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start ">
          <h3 className="text-sm text-gray-300 mb-0.5">Discription</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDescription(e.target.value);
            }}
            className="text-sm w-full h-44 px-1 py-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            cols="30"
            rows="10"
          ></textarea>
          <button className="py-3 bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
