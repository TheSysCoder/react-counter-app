import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  render() {
    return (
      <>
        <div className="card">
          <h3>Counter Card</h3>
          <p>{this.props.value}</p>
        </div>
      </>
    );
  }
}

export default Card;
