import React from "react";
import { nanoid } from 'nanoid'

const Tbody = ({ data, deleteFn }) => {
  return (
    <tbody>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <tr key={nanoid()}>
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
