import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState();

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

  const handleUpdateTask = async (updateTask) => {
    try {
      await fetch(`http://localhost:3000/tasks/${updateTask.id}`, {
        method: "PUT",
        headers: { "Contemt-type": "application/json" },
        body: JSON.stringify(updateTask),
      });
      setTasks(
        tasks.map((task) =>
          task.id === updateTask.id ? { ...updateTask } : task,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editingTask = (editingTask) => {
    console.log(editTask);
    setEditTask(editingTask);
  };

  const handleDeleteTask = async (id) => {
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout} />
      <TaskForm
        addTask={handleAddTask}
        updateTask={handleUpdateTask}
        editingTask={editTask}
      />
      <h1> My Task </h1>
      <TaskList
        tasks={tasks}
        editingTask={editingTask}
        deletingTask={handleDeleteTask}
      />
    </div>
  );
};

export default Dashboard;
