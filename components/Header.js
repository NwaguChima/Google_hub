import React from "react";
import User from "./User";

const Header = () => {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4  items-center">
        <p>About</p>
        <p>Store</p>
      </div>
      <div className="flex space-x-4  items-center">
        <p>Gmail</p>
        <p>Images</p>
        <User />
      </div>
    </header>
  );
};

export default Header;
