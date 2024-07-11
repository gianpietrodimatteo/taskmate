"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import DragDropList from "./components/DragDropList";
import ItemManager from "./components/ItemManager";
import ListTitle from "./components/ListTitle";

const PROJECT = {
  projectName: "Next.js Template",
  taskList: [
    {
      id: 1,
      position: 1,
      completed: false,
      name: "Update README.md",
      description:
        "Update the README.md file to reflect the project's current state",
    },
    {
      id: 2,
      position: 2,
      completed: false,
      name: "Test API endpoint",
      description:
        "Test the /api/data endpoint to ensure it returns the expected data",
    },
    {
      id: 3,
      position: 3,
      completed: false,
      name: "Add error handling to Login component",
      description:
        "Add error handling to the Login component to display helpful error messages to the user",
    },
  ],
};

function ViewFilter({ view, setView }) {
  const handleViewChange = () => {
    let newView;
    if (view === "all") {
      newView = "completed";
    } else if (view === "completed") {
      newView = "active";
    } else if (view === "active") {
      newView = "all";
    }
    if (newView) {
      setView(newView);
    }
  };

  return (
    <button className={styles["view-filter-button"]} onClick={handleViewChange}>
      {view === "all"
        ? "Show only completed tasks"
        : view === "completed"
        ? "Show only active tasks"
        : "Show all tasks"}
    </button>
  );
}

export default function Home() {
  const [tasks, setTasks] = useState(PROJECT.taskList);
  const [title, setTitle] = useState(PROJECT.projectName);
  const [view, setView] = useState("all"); // all, active, completed

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (view === "all") {
      return true;
    } else if (view === "active") {
      return !task.completed;
    } else {
      return task.completed;
    }
  });

  return (
    <main className={styles.main}>
      <ListTitle title={title} setTitle={setTitle} />
      <ViewFilter view={view} setView={setView} />
      <DragDropList items={filteredTasks} setItems={setTasks} />
      <ItemManager addItem={addTask} />
    </main>
  );
}
