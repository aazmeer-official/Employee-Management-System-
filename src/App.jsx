import { useContext } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashboard"
import Header from "./components/others/Header"
import TaskListNumbers from "./components/others/TaskListNumbers"
import TaskList from "./components/TaskList/TaskList"
import { getLocalStrorage, setLocalStrorage } from "./utils/localStorage"
import { useEffect,useState } from "react"
import { authContext } from "./context/AuthProvider"
function App() {

  const [user, setUser] = useState(null)
  const authData = useContext(authContext)
  console.log(authData)

  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if (loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  
  }, [authData])
  

  const handleLogin = (email,password)=>{
    if(email == "admin@example.com" && password == "123"){
      setUser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }else if(authData && authData.employees.find((e)=>e.email == email && e.password == password)) {
      setUser("employee")
      localStorage.setItem("loggedInUser",JSON.stringify({role:"employee"}))
    }
    else{
      alert("Invalid Login")
    }
  }

 
  

  return (
  <div >
    {!user ? <Login handleLogin = {handleLogin}/> : ""}
  {/* <EmployeeDashBoard /> */}
    {user== "admin" ? <AdminDashboard /> : <EmployeeDashBoard />}
  </div>
  )
}

export default App
