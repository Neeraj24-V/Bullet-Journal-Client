import React from "react";
import { Link } from "react-router-dom";
import List from "./listComponent";

function DisplayItem({ value }) {
  // console.log(value);
  return (
    <>
      {Object.entries(value).map(([key, val]) => {
        let href = `/journal/test/${key}}`;
        return (
          <Link to={href} key={key}>
            <div className="h-[400px] flex flex-col p-4 border-black bg-white shadow-lg rounded-md">
              <h2 className="mb-4 font-Recursive text-xl text-center text-black font-semibold p-2">
                {key}
              </h2>
              <ul>
                <List val={val} />
              </ul>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default DisplayItem;
