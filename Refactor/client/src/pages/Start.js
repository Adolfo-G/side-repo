import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="centerDiv">
      <div className="center">
        <button className="flowButton" type='submit'>
          <Link to="/chat">START</Link>
        </button>
      </div>
    </div>
  );
}

export default Nav;
