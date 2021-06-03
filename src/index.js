import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import "./index.css";

const divRoot = document.querySelector("#root");

// ReactDOM.render(<Primer value={4} />, divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);
