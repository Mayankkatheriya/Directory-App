import React, { useReducer } from "react";
import PageTitle from "../PageTitle";
import { useGlobalState } from "../../Context/ReducerContext";
import { nanoid } from "nanoid";
import Thead from "./Thead";
import Tbody from "./Tbody";
import Tfoot from "./Tfoot";

const AddNewPage = () => {
  const { state, dispatch } = useGlobalState();

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
  const initState = {
    name: "",
    age: "",
    dob: "",
    aadhar: "",
    mob: "",
    showForm: false,
  };

  const [inputs, inputDispatch] = useReducer(onInputChange, initState);

  const addData = () => {
    if (
      !inputs.name ||
      !inputs.age ||
      !inputs.dob ||
      inputs.aadhar === "" ||
      inputs.mob === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    // Checking Aadhar number is valid or not
    var aadharRegex = /^[0-9]{12}$/;
    if (!aadharRegex.test(inputs.aadhar)) {
      alert("Aadhaar Number should be exactly 12 digits");
      return;
    }

    // Checking mobile number is valid or not
    var mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(inputs.mob)) {
      alert("Mobile Number should be exactly 10 digits");
      return;
    }
    dispatch({ type: "newAdd", payload: { ...inputs, id: nanoid() } });
    inputDispatch({ type: "clear", payload: initState });
  };

  const deleteitem = (id) => {
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
