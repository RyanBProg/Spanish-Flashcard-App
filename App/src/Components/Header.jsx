import React from "react";

const Header = ({ categoryData, dispatch }) => {
  return (
    <header className="header">
      <form action="" className="header__form">
        <div className="form__select--cont">
          <label htmlFor="flashcard-category" className="form__label">
            Select Flashcard Category
            <select
              className="form__select"
              onChange={(e) => {
                dispatch({
                  type: "category_chosen",
                  deckIndex: e.target.selectedIndex,
                });
              }}>
              {categoryData.map((item) => (
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
