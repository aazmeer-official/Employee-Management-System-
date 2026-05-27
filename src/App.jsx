import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashboard"
import Header from "./components/others/Header"
import TaskListNumbers from "./components/others/TaskListNumbers"
import TaskList from "./components/TaskList/TaskList"

function App() {

  return (
  <div >

  {/* <Login /> */}
  {/* <EmployeeDashBoard /> */}
  <AdminDashboard />
  </div>
  )
}

export default App
