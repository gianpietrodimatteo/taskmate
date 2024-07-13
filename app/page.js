"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import DragDropList from "./components/DragDropList";
import ItemManager from "./components/ItemManager";
import ListTitle from "./components/ListTitle";
import SearchAndFilter from "./components/SearchAndFilter";

const PROJECT = {
  projectName: "Sprint 1: Task List Development",
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
    {
      id: 4,
      position: 4,
      completed: false,
      name: "Add unit tests to Login component",
      description:
        "Add unit tests to the Login component using a testing library like Jest",
    },
  ],
};

export default function Home() {
  const [tasks, setTasks] = useState(PROJECT.taskList);
  const [title, setTitle] = useState(PROJECT.projectName);
  const [view, setView] = useState("all"); // all, active, completed
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (view === "all") {
        return true;
      } else if (view === "active") {
        return !task.completed;
      } else {
        return task.completed;
      }
    })
    .filter((task) => task.name.includes(searchTerm));

  // <ViewFilter view={view} setView={setView} />
  return (
    <main className={styles.main}>
      <div className={styles["task-list-container"]}>
        <ListTitle title={title} setTitle={setTitle} />
        <SearchAndFilter
          filter={view}
          onFilterChange={setView}
          onSearchChange={setSearchTerm}
        />
        <DragDropList items={filteredTasks} setItems={setTasks} />
        <ItemManager addItem={addTask} />
      </div>
    </main>
  );
}
