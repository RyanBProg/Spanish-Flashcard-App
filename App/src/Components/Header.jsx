import React from "react";

const Header = ({ flashcardCategories, handleCategoryChange }) => {
  return (
    <header className="header">
      <form action="" className="header-form">
        <div className="form-select-container">
          <label htmlFor="flashcard-category" className="form-label">
            Select Flashcard Category
            <select className="form-select" onChange={handleCategoryChange}>
              {flashcardCategories.map((item) => (
                <option value={item.name} key={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>
    </header>
  );
};

export default Header;
