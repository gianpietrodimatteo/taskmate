import React, { useState } from "react";
import {
  BsCheckLg,
  BsChevronDown,
  BsChevronLeft,
  BsPencilFill,
  BsTrashFill,
  BsXLg,
} from "react-icons/bs";
import styles from "./ListItem.module.css";

const ListItem = ({
  item,
  items,
  setItems,
  index,
  isDragging,
  handleDragStart,
  handleDragOver,
  handleDrop,
  updateItem,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [showDescription, setShowDescription] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateItem(index, { ...item, name, description });
    setIsEditing(false);
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setName(item.name); // Reset name to the original value
    setDescription(item.description); // Reset description to the original value
  };

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      className={`${styles["list-item"]} ${isDragging ? styles.dragging : ""}`}
      draggable={!isEditing}
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={(e) => handleDragOver(e, index)}
      onDrop={handleDrop}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleSave}>
            <BsCheckLg />
          </button>
          <button onClick={handleCancel}>
            <BsXLg />
          </button>
        </>
      ) : (
        <>
          <div className={styles["item-container"]}>
            <span className={styles.position}>{item.position}</span>
            <label className={styles["checkbox-container"]}>
              <input
                type="checkbox"
                name="completed"
                className={styles.checkbox}
                checked={item.completed}
                onChange={() =>
                  updateItem(index, { ...item, completed: !item.completed })
                }
              />
              <span className={styles.checkmark}></span>
            </label>
            <span className={styles["task-name"]}>{name}</span>
            <button className={styles["item-button"]} onClick={handleEdit}>
              <BsPencilFill />
            </button>
            <button
              className={styles["item-button"]}
              onClick={() => handleDelete(index)}
            >
              <BsTrashFill />
            </button>
            <button
              className={styles["item-button"]}
              onClick={handleShowDescription}
            >
              {showDescription ? <BsChevronLeft /> : <BsChevronDown />}
            </button>
          </div>
          {showDescription && (
            <div className={styles["description-container"]}>
              <p className={styles.description}>{description}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ListItem;
