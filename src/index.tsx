import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <div>
      <Hello name="Sami" />
    </div>
    , document.getElementById("container")
);
