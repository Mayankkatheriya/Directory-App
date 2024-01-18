import React, { createContext, useContext, useReducer } from "react";

export const ReducerContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "newAdd":
      return {
        ...state,
        personData: [...state.personData, action.payload],
      };

    case "delete":
      let newPersonList = [];
      state.personData.forEach((item) => {
        if (item.id !== action.payload) {
          newPersonList.push(item);
        }
      });
      return {
        ...state,
        personData: newPersonList,
      };

    default:
      return state;
  }
};

const ReducerProvider = ({ children }) => {
  //*------Getting data drom local storage----->
  const storedData = localStorage.getItem("data");
  const initialState = storedData
    ? { personData: JSON.parse(storedData) }
    : { personData: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

//custom hook for geting state and dispatch function
export const useGlobalState = () => {
  const context = useContext(ReducerContext);
  if (!context) throw new Error("Cannot find Global State Context");
  return context;
};

export default ReducerProvider;
