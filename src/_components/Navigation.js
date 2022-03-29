import React from "react";

const Navigation = () => {
  return (
    <div className="top-nav">
      <nav className="top-nav_nav">
        <ul className="top-nav_list">
          <li className="top-nav_list-item">HOME</li>
          <li className="top-nav_list-item">
            NEWS
            {/* <ul className="top-nav_sub-list">
              <li className="top-nav_list-item">LATEST</li>
              <li className="top-nav_list-item">USA</li>
              <li className="top-nav_list-item">WORLD</li>
              <li className="top-nav_list-item">ARCHIVE</li>
              <li className="top-nav_list-item">UNDER-C</li>
              <li className="top-nav_list-item">UNDER-C</li>
              <li className="top-nav_list-item">UNDER-C</li>
              <li className="top-nav_list-item">UNDER-C</li>
            </ul> */}
          </li>
          <li>FACT-CHECK</li>
          <li>ACCOUNT</li>
          <li>FOLLOW US</li>
          <li>CONTACT</li>
          <li>DONATE</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
