import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newDetails, setDetails] = useState("");
  const [newCategory, setCategory] = useState("Code");
  const newTask = {
    text: newDetails,
    category: newCategory
  };
  function onSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(newTask);
  }
  return (
    <form onSubmit={onSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={(e) => setDetails(e.target.value)} value={newDetails} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={(e) => setCategory(e.target.value)} value={newCategory} name="category">
        {categories.map(category => {
          if (category !== 'All') {
            return (
              <option key={category}>{category}</option>
            );
          }
          return null;
          
        })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
