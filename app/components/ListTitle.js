import React, { useState } from "react";
import { BsCheckLg, BsPencilFill, BsXLg } from "react-icons/bs";
import styles from "./ListTitle.module.css";

export default function ListTitle({ title, setTitle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleEnter = () => {
    setIsEditing(false);
    setTitle(newTitle);
  };

  return (
    <div className={styles["title-container"]}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className={styles["title-input"]}
          />
          <button
            onClick={handleEnter}
            className={`${styles.button} ${styles["save-button"]}`}
          >
            <BsCheckLg />
          </button>
          <button
            onClick={handleCancel}
            className={`${styles.button} ${styles["cancel-button"]}`}
          >
            <BsXLg />
          </button>
        </>
      ) : (
        <>
          <h1 className={styles["title-text"]}>{title}</h1>
          <button
            onClick={handleEdit}
            className={`${styles.button} ${styles["edit-button"]}`}
          >
            <BsPencilFill />
          </button>
        </>
      )}
    </div>
  );
}
