import React from "react";

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 ba bg-lightest-blue"
        type="search"
        placeholder="humans"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
