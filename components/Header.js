import React from "react";
import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="">
        <p>About</p>
        <p>Store</p>
      </div>
      <div>
        <p>Gmail</p>
        <p>Images</p>
        <User />
      </div>
    </header>
  );
};

export default Header;
