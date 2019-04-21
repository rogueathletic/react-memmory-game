import React from "react";
import "./style.css";
function Header() {
  return (
    <header className="header">
      <details className="rules"><summary alt="click Rules to open">T H E &nbsp;R U L E S</summary><p id="rules-copy" alt="click to view rules"> The objective is simple. You have twelve Avitars on screen. Click one to begin. 
                                                                             All you have to do now, is make sure not to select the same image again. If you 
                                                                             do ;it's, GAME OVER. dont worry, you can try as many times as youd like </p></details>
      
    </header>
  );
}

export default Header;
