import React, { useState } from "react";
import "./Votes.css";

function Votes() {
  /* There is probably an easier way but I'm too new to JS to know it*/
  const [choc, setChoc] = useState(0);
  const [van, setVan] = useState(0);
  const [straw, setStraw] = useState(0);

  const [chocPerc, setChocPerc] = useState(0);
  const [vanPerc, setVanPerc] = useState(0);
  const [strawPerc, setStrawPerc] = useState(0);

  function chocUp() {
    setChoc(choc + 1);
    setPerc();
  }

  function vanUp() {
    setVan(van + 1);
    setPerc();
  }

  function strawUp() {
    setStraw(straw + 1);
    setPerc();
  }

  function setPerc() {
    setChocPerc(((choc / (choc + van + straw)) * 100).toFixed(1));
    setVanPerc(((van / (choc + van + straw)) * 100).toFixed(1));
    setStrawPerc(((straw / (choc + van + straw)) * 100).toFixed(1));
  }

  return (
    <div className="Votes">
      <p>
        <span className="Text">
          <span className="Names">Chocolate: </span>
          <span className="Numbers">
            {choc} ({chocPerc}%)
          </span>
        </span>
        <br></br>
        <progress className="Prog" value={chocPerc} max="100"></progress>
      </p>
      <p>
        <span className="Text">
          <span className="Names">Vanilla: </span>
          <span className="Numbers">
            {van} ({vanPerc}%)
          </span>
        </span>
        <br></br>
        <progress className="Prog" value={vanPerc} max="100"></progress>
      </p>
      <p>
        <span className="Text">
          <span className="Names">Strawberry: </span>
          <span className="Numbers">
            {straw} ({strawPerc}%)
          </span>
        </span>
        <br></br>
        <progress className="Prog" value={strawPerc} max="100"></progress>
      </p>
      <p ClassName="HitVote">
        <button type="button" onClick={chocUp}>
          Chocolate
        </button>
        <button type="button" onClick={vanUp}>
          Vanilla
        </button>
        <button type="button" onClick={strawUp}>
          Strawberry
        </button>
      </p>
    </div>
  );
}
export default Votes;
