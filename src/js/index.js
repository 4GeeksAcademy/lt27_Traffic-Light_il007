//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// include your styles into the webpack bundle
import "../styles/index.css";
import TrafficLight from "./component/TrafficLight";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));

