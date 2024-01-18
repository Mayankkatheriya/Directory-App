import React from "react";
import Input from "./Input";

const Tfoot = ({inputs, inputDispatch, addData}) => {
  return (
    <tfoot>
      {inputs.showForm && (
        <tr>
          <td>
            <Input type = "text" val = {inputs.name} placeholder="Enter Your Name" onChange={(e) => inputDispatch({ type: "name", payload: e.target.value })} />
          </td>
          <td>
            <Input type = "date" val = {inputs.dob} onChange={(e) => inputDispatch({ type: "dob", payload: e.target.value })} />
          </td>
          <td>
            <Input type = "Number" val = {inputs.aadhar} placeholder="Enter Aadhar No." min = {100000000000} max = {999999999999} onChange={(e) => inputDispatch({type: "aadhar", payload: e.target.value})} />
          </td>
          <td>
            <Input type = "Number" val = {inputs.mob} placeholder="Enter Mobile No." min = {1000000000} max = {9999999999} onChange={(e) => inputDispatch({ type: "mob", payload: e.target.value })} />
          </td>
          <td>
            <Input type = "text" val = {inputs.age} placeholder={"Calculate Automatically"} readonly = {true} />
          </td>
          <td>
            <button onClick={addData}>💾</button>
          </td>
        </tr>
      )}
    </tfoot>
  );
};

export default Tfoot;
