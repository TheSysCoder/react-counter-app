import React, { Component } from "react";
import Card from "../card/card";
import "./styles.css";

class Header extends Component {
  state = {
    value: 0,
  };

  increment = () => {
    this.setState((state, props) => ({
      value: state.value + 1,
    }));
  };
  render() {
    return (
      <div>
        <header>
          <h1 className="nav_title">CounterApp</h1>
          <nav>
            <ul>
              <li>
                <a href="#" onClick={this.increment}>
                  Increment
                </a>
              </li>
              <li>
                <a href="#">Decrement</a>
              </li>
            </ul>
          </nav>
        </header>
        <Card value={this.state.value} />
      </div>
    );
  }
}
export default Header;
