import React, { useState } from "react";
//

//import React from "react";

const TrafficLight = () => {
  const [color, setColor] = useState();

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div className="d-flex flex-column">
        <div id="trafficTop">
            <div id="container flex-column">
                <div class ="light" id="red" onClick={() => changeColor("red")}></div>
                <div class ="light" id="yellow" onClick={() => changeColor("yellow")}></div>
                <div class ="light" id="green" onClick={() => changeColor("green")}></div>
            </div>
        </div>
    </div>   
        
  );

export default TrafficLight;
