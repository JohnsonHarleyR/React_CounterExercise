// uses capital casing for name

import React, { useState } from "react";
import "./Counter.css";

// primary way to make a component is a function
function Counter() {
  // press cntrl...
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount(0);
  }

  // return the html that will be displayed
  return (
    // good idea to give a classname that matches file
    <div className="Counter">
      <h3>Counter</h3>
      <p>{count}</p>
      <p className="Counter__buttons">
        <button onClick={() => setCount(count - 1)}>Down</button>
        {count !== 0 && <button onClick={resetCount}>Reset</button>}
        <button onClick={countUp}>Up</button>
      </p>
    </div>
  );
}

// allows you to use in other files
export default Counter;
