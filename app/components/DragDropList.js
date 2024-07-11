import React, { useState } from "react";
import ListItem from "./ListItem";
import styles from "./DragDropList.module.css";

const DragDropList = ({ items, setItems }) => {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (index !== draggedIndex) {
      const newItems = [...items];
      const draggedItem = newItems[draggedIndex];
      newItems.splice(draggedIndex, 1);
      newItems.splice(index, 0, draggedItem);
      updatePositions(newItems);
      setDraggedIndex(index);
      setItems(newItems);
    }
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = () => {
    setDraggedIndex(null);
  };

  const updatePositions = (newItems) => {
    newItems.forEach((item, index) => {
      item.position = index + 1;
    });
  };

  const updateItem = (index, newItem) => {
    const newItems = [...items];
    newItems[index] = newItem;
    setItems(newItems);
  };

  return (
    <div className={styles["list-container"]}>
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          items={items}
          setItems={setItems}
          index={index}
          isDragging={index === draggedIndex}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
};

export default DragDropList;
