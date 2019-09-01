import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">MYWEBSITE</div>
        <div className="navs">
          <ul className="nav-menu">
            <li className="item1">FuckedUp</li>
            <li className="item1">Happy</li>
            <li className="item3">Kill you</li>
          </ul>
        </div>
      </header>
      <div className="main-content">
        <div className="section1">I am the section one</div>
        <div className="section2">I am the section two</div>
      </div>
      <footer className="app-footer">
        <div className="footer-items">I am the beautiful footer</div>
      </footer>
    </div>
  );
}

export default App;
