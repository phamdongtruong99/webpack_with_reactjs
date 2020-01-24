import React from "react";
import { render } from "react-dom";

const root = document.getElementById("root");

const App = () => {
  return (
    <React.Fragment>
      <h1> hello world!</h1>
    </React.Fragment>
  );
};

render(<App />, root);
