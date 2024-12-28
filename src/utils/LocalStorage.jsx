// localStorage.clear();
const admin = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    password: "123",
  },
];

const employees = [
  {
    id: 101,
    name: "Arjun",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Complete project report.",
        date: "2024-12-22",
        category: "Work",
        status: {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Task 2",
        description: "Prepare presentation slides.",
        date: "2024-12-23",
        category: "Work",
        status: {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 102,
    name: "Sneha",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 3",
        description: "Update client database.",
        date: "2024-12-22",
        category: "Work",
        status: {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Task 4",
        description: "Organize team meeting.",
        date: "2024-12-24",
        category: "Management",
        status: {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 103,
    name: "Mohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 5",
        description: "Review code for bugs.",
        date: "2024-12-22",
        category: "Development",
        status: {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      },
      {
        title: "Task 6",
        description: "Deploy application.",
        date: "2024-12-25",
        category: "Development",
        status: {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      },
    ],
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 104,
    name: "Employee Four",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 7",
        description: "Prepare financial summary.",
        date: "2024-12-22",
        category: "Finance",
        status: {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      },
      {
        title: "Task 8",
        description: "Verify budget allocation.",
        date: "2024-12-26",
        category: "Finance",
        status: {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      },
    ],
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 105,
    name: "Employee Five",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 9",
        description: "Analyze market trends.",
        date: "2024-12-22",
        category: "Research",
        status: {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Task 10",
        description: "Draft white paper.",
        date: "2024-12-27",
        category: "Research",
        status: {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
