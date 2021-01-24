import React, { useState } from "react";
import "./Switch.css";

function Switch() {
  const [on, setOn] = useState(false);

  const cssClass = on ? "Switch Switch--on" : "Switch Switch--off";

  // this is like if else
  //const text = on ? "ON" : "Off";

  // can also do this
  /*
  let additionalClass = "";
  if (!on) {
    additionalClass = "Switch--off";
  }
  */

  return (
    <div className={cssClass}>
      <h3>Switch</h3>
      <p>{on ? "ON" : "OFF"}</p>
      <p className="Switch__buttons">
        {!on && <button onClick={() => setOn(true)}>ON</button>}
        {on && <button onClick={() => setOn(false)}>OFF</button>}
      </p>
    </div>
  );
}

export default Switch;
