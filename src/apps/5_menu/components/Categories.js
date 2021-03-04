import React from 'react';

const Categories = ({ filterItems, categories }) => {

  return (
    <div className="btn-container">
      {categories.map((cat, index) => {
        return (
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => filterItems(cat)}>
            {cat}
          </button>
        )
      })}
    </div>
  )
};

export default Categories;
