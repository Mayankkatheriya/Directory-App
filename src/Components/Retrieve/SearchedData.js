import React from "react";
import { nanoid } from "nanoid";

const SearchedData = ({searchedData}) => {
  return (
    <div className="searched-data">
      {searchedData.length === 0 ? (
        <h2>No Data</h2>
      ) : (
        searchedData.map((item) => {
          return (
            <div key={nanoid()} className="data-card">
              <h2>{item.name}</h2>
              <p>
                Aadhar No.: <span>{item.aadhar}</span>
              </p>
              <p>
                D.O.B: <span>{item.dob}</span>
              </p>
              <p>
                Age: <span>{item.age}</span>
              </p>
              <p>
                Mob No.: <span>{item.mob}</span>
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SearchedData;
