import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">M E M <span className="my-react-icon50">&nbsp;&nbsp;&nbsp;&nbsp;</span> R Y &nbsp; G A M E</a>
        </li>       
         <li className="score">
        All Time: {props.topScore} |  Score: {props.score} 
        </li>
        <NavMessage score={props.score} topScore={props.topScore} />

      </ul>
    </nav>
  );
}

export default Nav;
