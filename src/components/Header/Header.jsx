import React from "react";
import "./header.css";
import { MdOutlineBookmarkAdd } from "react-icons/md";


const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
       <h2>LM</h2>
       <button className="apply-btn">
       <MdOutlineBookmarkAdd />
        Apply
        </button>
      </nav>
    </header>
  );
};

export default Header;
