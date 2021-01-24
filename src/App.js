// import counter component
import React, { useState } from "react";
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import Votes from "./components/Votes";
import Weather from "./components/Weather";
import Quotes from "./components/Quotes";

import "./styles.css";

export default function App() {
  const [weatherList, setWeatherList] = useState([
    { time: "Today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
    { time: "Tomorrow", highF: 65, lowF: 53, conditions: "Partly Sunny" },
    { time: "Tuesday", highF: 66, lowF: 51, conditions: "Partly Sunny" }
  ]);

  return (
    <div className="App">
      <Quotes text="What's up, doc?" author="Bugs Bunny" />
      <Quotes
        text="Do. Or do not. There is no try."
        author="Yoda"
        date="A long time ago"
      />
      <Quotes
        text="It always seems impossoible until it's done"
        author="Nelson Mandela"
        date={2001}
      />
      {weatherList.map((wx) => (
        <Weather
          key={wx.time} //just needs a unique identifier
          time={wx.time}
          tempF={wx.highF}
          conditions={wx.conditions}
        />
      ))}
      {/*<Weather time="Today" conditions="Overcast" tempF={28} />
      <Weather time="Tomorrow" conditions="Sunny" tempF={78} />*/}
      {/* insert counter component */}
      <Counter />
      <Switch /> <Switch />
      <Votes />
    </div>
  );
}
