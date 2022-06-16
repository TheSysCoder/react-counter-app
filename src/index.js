import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/header";
class App extends Component {
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
