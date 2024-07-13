import React from "react";
import styles from "./SearchAndFilter.module.css";

const SearchAndFilter = ({ filter, onFilterChange, onSearchChange }) => {
  const toggleFilter = () => {
    const nextFilter =
      filter === "all" ? "active" : filter === "active" ? "completed" : "all";
    onFilterChange(nextFilter);
  };

  const handleSearchChange = (e) => {
    if (e.target.value.length <= 20) {
      onSearchChange(e.target.value);
    }
  };

  return (
    <div className={styles["container"]}>
      <input
        type="text"
        placeholder="Search tasks..."
        className={styles["input"]}
        onChange={handleSearchChange}
      />
      <button className={styles["button"]} onClick={toggleFilter}>
        {filter === "all"
          ? "Show Active"
          : filter === "active"
          ? "Show Completed"
          : "Show All"}
      </button>
    </div>
  );
};

export default SearchAndFilter;
