import React, { useState } from "react";

function Navbar() {
  const [state, setState] = useState(true);
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <ul className="nav-left">
            <div className="nav-logo">
              <img src="/images/New-Project .png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="nav-right">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Blog</a>{" "}
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        H
      </div>
    </nav>
  );
}

export default Navbar;
