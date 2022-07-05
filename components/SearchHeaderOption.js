import React from "react";

const SearchHeaderOption = ({ title, Icon }) => {
  return (
    <div>
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
};

export default SearchHeaderOption;
