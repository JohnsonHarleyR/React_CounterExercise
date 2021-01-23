// uses capital casing for name
import React from "react";

// primary way to make a component is a function
function Counter() {
  // return the html that will be displayed
  return (
    // good idea to give a classname that matches file
    <div className="Counter">
      <h3>Counter</h3>
      <p>0</p>
      <p>
        <button>Down</button>
        <button>Reset</button>
        <button>Up</button>
      </p>
    </div>
  );
}

// allows you to use in other files
export default Counter;
