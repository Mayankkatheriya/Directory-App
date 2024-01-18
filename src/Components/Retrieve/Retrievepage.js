import React, { useState } from "react";
import PageTitle from "../PageTitle";
import { useGlobalState } from "../../Context/ReducerContext";
import SearchForm from "./SearchForm";
import SearchedData from "./SearchedData";

const Retrievepage = () => {
  const { state } = useGlobalState();

  const [inputText, setText] = useState("");
  const [searchedData, setData] = useState([]);

  //*------------On submit function--------------->
  const onFormSubmit = (e) => {
    e.preventDefault();
    //* -----------search data from global state--------------->
    let searchVal = inputText.trim().toLowerCase();
    if (!searchVal) return alert("Please enter a value");
    let foundData = state.personData.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchVal) ||
        item.aadhar.toLowerCase().includes(searchVal) ||
        item.mob.toLowerCase().includes(searchVal)
      );
    });
    setData(foundData);
  };

  return (
    <>
      <PageTitle title="Retrieve Information" />
      <SearchForm onFormSubmit={onFormSubmit} inputText = {inputText} setText={setText}/>
      <div className="data-container">
        <SearchedData searchedData={searchedData} />
      </div>
    </>
  );
};

export default Retrievepage;
