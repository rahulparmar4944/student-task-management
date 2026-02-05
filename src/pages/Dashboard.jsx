import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    console.log("click from dashboard");
    localStorage.removeItem("loginData");
    localStorage.removeItem("authData");
    // localStorage.clear()
    navigate("/login");
  };

  const handleAddTask = async (newTask) => {
    const tasktoAdd = { ...newTask, comleted: false };
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "applicaltion/json" },
        body: JSON.stringify(tasktoAdd),
      });
      console.log(tasktoAdd);
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout} />
      <TaskForm addTask={handleAddTask} />
      <h1> My Task </h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
