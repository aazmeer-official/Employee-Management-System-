import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

function AdminDashboard() {
    return(
    <div className="p-10">
    <Header />
    <CreateTask />
    <AllTask />
    </div>
)
    
}

export default AdminDashboard;