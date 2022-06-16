import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/header";
import Card from "./components/card/card";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Card />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
