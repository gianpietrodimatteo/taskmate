import React, { useState } from "react";
import { BsCheckLg, BsPlusCircle, BsXLg } from "react-icons/bs";
import styles from "./ItemManager.module.css";

const ItemManager = ({ addItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showManager, setShowManager] = useState(false);

  const handleAddItem = () => {
    if (name && description) {
      const newItem = {
        id: Date.now(),
        name,
        description,
      };
      addItem(newItem);
      setName("");
      setDescription("");
    }
  };

  return (
    <div className={styles["item-manager-container"]}>
      {showManager ? (
        <div className={styles["item-manager"]}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleAddItem}>
            <BsCheckLg />
          </button>
          <button onClick={() => setShowManager(!showManager)}>
            <BsXLg />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowManager(!showManager)}
          className={styles["add-item-button"]}
        >
          <BsPlusCircle />
        </button>
      )}
    </div>
  );
};

export default ItemManager;
