import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletTask from "./CompletTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className=" flex items-center justify-start gap-5 flex-nowrap
     h-[55%] py-5 w-full mt-10 overflow-x-auto"
    >
      {data.tasks.map((element) => {
        const inputDate = element.date; // Assume element.date is '2024-12-22'
        const dateObject = new Date(inputDate);

        const day = dateObject.getDate(); // Day of the month (22)
        const month = dateObject.toLocaleString("en-US", { month: "short" }); // Short month name ('Dec')
        const year = dateObject.getFullYear(); // Year (2024)

        const formattedDate = `${day} ${month} ${year}`; // '22 Dec 2024'

        const description = element.description;

        const task = {
          date: formattedDate,
          description: description,
          title: element.title,
          category: element.category,
        };
        if (element.status.active === true) {
          return <AcceptTask key={element.title} {...task} />;
        } else if (element.status.newTask === true) {
          return <NewTask key={element.title} {...task} />;
        } else if (element.status.completed === true) {
          return <CompletTask key={element.title} {...task} />;
        } else if (element.status.failed === true) {
          return <FailedTask key={element.title} {...task} />;
        }
      })}
    </div>
  );
};

export default TaskList;
