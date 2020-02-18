import React from "react";
import ReactDOM from "react-dom";

import Editor from "./Editor";
import Reset from "./Reset";

ReactDOM.render(
  <>
    <Reset />
    <Editor />
  </>,
  document.getElementById("root")
);
