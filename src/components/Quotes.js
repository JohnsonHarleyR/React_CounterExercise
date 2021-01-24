import React from "react";
import "./Quotes.css";

function Quotes({ text, author, date }) {
  return (
    <div className="Quotes">
      <h4>Quote by {author}</h4>
      <p>"{text}"</p>
      {date && <p>Date: {date}</p>}
    </div>
  );
}

export default Quotes;

// {date !== "" & <p>{date}</p>}
