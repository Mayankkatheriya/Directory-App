import React from "react";

const Tbody = ({ data, deleteFn }) => {
  return (
    <tbody>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.dob}</td>
              <td>{item.aadhar}</td>
              <td>{item.mob}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => deleteFn(item.id)}>❌</button>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default Tbody;
