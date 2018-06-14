import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

import Card from "./Card";

ReactDOM.render(<Card />, document.getElementById("root"));
registerServiceWorker();
