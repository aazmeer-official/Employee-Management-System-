import React, { useState } from 'react';
import Header from '../others/Header';
import TaskList from '../TaskList/TaskList';
import TaskListNumbers from '../others/TaskListNumbers';
const EmployeeDashBoard = () => {
    return ( <div className="p-20 bg-[#1C1C1C] h-screen">
        <Header />
        <TaskListNumbers />
        <TaskList />
    </div> );
}
 
export default EmployeeDashBoard;