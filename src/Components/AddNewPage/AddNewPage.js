import React, { useReducer } from "react";
import PageTitle from "../PageTitle";
import { useGlobalState } from "../../Context/ReducerContext";
import { nanoid } from "nanoid";
import Thead from "./Thead";
import Tbody from "./Tbody";
import Tfoot from "./Tfoot";

const AddNewPage = () => {
  const { state, dispatch } = useGlobalState();

  //*Changes in Inputs and show Form button function----------------->
  const onInputChange = (init, action) => {
    switch (action.type) {
      case "clear":
        return action.payload;
      case "showForm":
        return {
          ...init,
          showForm: !init.showForm,
        };
      default:
        return {
          ...init,
          [action.type]: action.payload,
        };
    }
  };

  //*Initial values for reducer---------------->
  const initInputState = {
    name: "",
    age: "",
    dob: "",
    aadhar: "",
    mob: "",
    showForm: false,
  };

  //*UseReducer---------------->
  const [inputs, inputDispatch] = useReducer(onInputChange, initInputState);

  //*Function for calculating Age according to dob-------------------->
  const calculateAge = (dob) => {
    let today = new Date();
    let birthDate = new Date(dob);
    let calculatedAge = +today.getFullYear() - +birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    let d = today.getDate() - birthDate.getDate();
    if (m < 0 || (m === 0 && d < 0)) {
      calculatedAge--;
    }
    return calculatedAge;
  };

  const addData = () => {
    if (
      !inputs.name ||
      !inputs.dob ||
      inputs.aadhar === "" ||
      inputs.mob === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    //*------Checking Aadhar number is valid or not----->
    var aadharRegex = /^[0-9]{12}$/;
    if (!aadharRegex.test(inputs.aadhar)) {
      alert("Aadhaar Number should be exactly 12 digits");
      return;
    }

    //*------Checking mobile number is valid or not----->
    var mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(inputs.mob)) {
      alert("Mobile Number should be exactly 10 digits");
      return;
    }

    //*------Calculating Age----->
    let calculatedAge = calculateAge(inputs.dob);

    const newData = { ...inputs, id: nanoid(), age: calculatedAge };

    // Update the global state using dispatch
    dispatch({ type: "newAdd", payload: newData });

    // Retrieve the existing data from local storage
    const storedData = JSON.parse(localStorage.getItem("data")) || [];

    // Update the local storage with the new data
    localStorage.setItem("data", JSON.stringify([...storedData, newData]));

    // Clear the form inputs
    inputDispatch({ type: "clear", payload: initInputState });
  };

  const deleteitem = (id) => {
    // Retrieve the existing data from local storage
    const storedData = JSON.parse(localStorage.getItem("data")).filter(
      (ele) => ele.id !== id
    );
    // Update the local storage with the filtered data and set it to our variable
    localStorage.setItem("data", JSON.stringify(storedData));
    dispatch({ type: "delete", payload: id });
  };

  return (
    <>
      <PageTitle title="Add New Person" />
      <div className="data-container">
        <div className="table-container">
          <table frame="box" rules="all">
            <Thead />
            <Tbody data={state.personData} deleteFn={deleteitem} />
            <Tfoot
              inputs={inputs}
              inputDispatch={inputDispatch}
              addData={addData}
            />
          </table>
        </div>
      </div>
      <button
        className="add-btn"
        onClick={() => inputDispatch({ type: "showForm" })}
      >
        {inputs.showForm ? "Cancel" : "ADD"}
      </button>
    </>
  );
};

export default AddNewPage;
