import React from "react";

export default function Header(props) {
  return (
    <header className="header">
      <form action="" className="header-form">
        <div className="form-select-container">
          <label htmlFor="flashcard-category" className="form-label">
            Select Flashcard Category
            <select
              className="form-select"
              onChange={props.handleCategoryChange}>
              {props.flashcardCategories.map((item) => (
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
}
