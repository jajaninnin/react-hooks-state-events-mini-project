import React from "react";

function CategoryFilter({categories, activeCategory, handleClick}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return (
          <button 
            className={category === activeCategory ? 'selected' : ''} 
            onClick={() => handleClick(category)} 
            key={category}
          >
            {category}
          </button>
        );
      })}
      
    </div>
  );
}

export default CategoryFilter;
