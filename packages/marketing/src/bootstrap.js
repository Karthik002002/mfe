import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const Mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev_marketing");

  if (el) {
    Mount(el);
  }
}

export { Mount };
