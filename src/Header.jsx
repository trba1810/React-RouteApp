import React from "react";
import logo from "./images/react.png";

function Header() {
  return (
    <div>
      <img
        src={logo}
        alt=""
        style={{ height: "35px", verticalAlign: "top" }}
      ></img>
      Header
    </div>
  );
}

export default Header;
