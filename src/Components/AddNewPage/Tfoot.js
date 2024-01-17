import React from "react";

const Tfoot = ({inputs, inputDispatch, addData}) => {
  return (
    <tfoot>
      {inputs.showForm && (
        <tr>
          <td>
            <input
              type="text"
              value={inputs.name}
              onChange={(e) =>
                inputDispatch({ type: "name", payload: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="date"
              value={inputs.dob}
              onChange={(e) =>
                inputDispatch({ type: "dob", payload: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="Number"
              value={inputs.aadhar}
              min={10000000000}
              max={999999999999}
              onChange={(e) =>
                inputDispatch({
                  type: "aadhar",
                  payload: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              type="Number"
              min={1000000000}
              value={inputs.mob}
              onChange={(e) =>
                inputDispatch({ type: "mob", payload: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="Number"
              value={inputs.age}
              onChange={(e) =>
                inputDispatch({ type: "age", payload: e.target.value })
              }
            />
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
