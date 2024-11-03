import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredTasks, setFilteredTasks] = useState(TASKS);
  function handleDelete(taskToDelete) {
    const tasksWithTaskDeleted = filteredTasks.filter(task => {
      if (task.text === taskToDelete.text) {
        return false;
      } else {
        return true;
      }
    });
    setFilteredTasks(tasksWithTaskDeleted);
  }

  function filterTasks(category) {
    setActiveCategory(category);
    const newlyFilteredTasks = TASKS.filter(task => {
      if (category === 'All') {
        return true;
      } else if (task.category === category) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredTasks(newlyFilteredTasks);
  }

  function onTaskFormSubmit(newTask) {
    filteredTasks.push(newTask)
    setFilteredTasks([...filteredTasks]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter activeCategory={activeCategory} categories={CATEGORIES} handleClick={filterTasks} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
