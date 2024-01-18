import React from "react";
import Input from "../AddNewPage/Input";

const SearchForm = ({ onFormSubmit, inputText, setText }) => {
  return (
    <form onSubmit={onFormSubmit} className="retrieve-form">
      <Input
        type="search"
        val={inputText}
        placeholder="Search by Name or Aadhar Card or Mobile Number"
        onChange={(e) => setText(e.target.value)}
        id="searchInput"
      />
      <button type="submit" className="search-btn">
        Find
      </button>
    </form>
  );
};

export default SearchForm;
