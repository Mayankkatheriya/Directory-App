import React from "react";

const Input = ({type, val, placeholder, onChange, min, max, readonly , id}) => {
  return (
    <input
      type={type}
      value={val}
      placeholder= {placeholder}
      min = {min}
      max = {max}
      readOnly ={readonly ? "readonly" : "" }
      className= {readonly ? "readonlyInput" : ""}
      onChange={onChange}
      id = {id}
    />
  );
};

export default Input;
