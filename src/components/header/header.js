import React, { Component } from "react";
import "./styles.css";
class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="nav_title">CounterApp</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Increment</a>
              </li>
              <li>
                <a href="#">Decrement</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
export default Header;
