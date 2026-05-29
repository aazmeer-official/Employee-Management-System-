const employees = [
  {
    id: 1,
    email: "ali.khan@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2024-10-12",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix login form",
        taskDescription: "Resolve validation issue in login page",
        taskDate: "2024-10-15",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    email: "sara.ahmed@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create task cards",
        taskDescription: "Build horizontal scrollable task cards UI",
        taskDate: "2024-10-18",
        category: "React",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design dashboard",
        taskDescription: "Create admin dashboard layout using Tailwind",
        taskDate: "2024-10-20",
        category: "Design",
      },
    ],
  },
  {
    id: 3,
    email: "hamza.malik@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Connect local storage",
        taskDescription: "Store employee and admin data in localStorage",
        taskDate: "2024-10-22",
        category: "JavaScript",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize task list",
        taskDescription: "Improve scrolling performance of task list",
        taskDate: "2024-10-25",
        category: "Frontend",
      },
    ],
  },
  {
    id: 4,
    email: "ayesha.noor@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write task validation",
        taskDescription: "Add empty field checks before creating task",
        taskDate: "2024-10-28",
        category: "JavaScript",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create employee page",
        taskDescription: "Build employee dashboard basic layout",
        taskDate: "2024-10-30",
        category: "React",
      },
    ],
  },
  {
    id: 5,
    email: "usman.raza@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add logout button",
        taskDescription: "Create logout button and clear logged-in user",
        taskDate: "2024-11-02",
        category: "Authentication",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix date input style",
        taskDescription: "Make date input match dark theme design",
        taskDate: "2024-11-05",
        category: "CSS",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStrorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))

}

export const getLocalStrorage = ()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return({employees,admin})
}

