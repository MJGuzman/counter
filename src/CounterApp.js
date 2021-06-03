import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const Increase = (e) => setCounter(counter + 1);

  const Decrease = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const Reset = () => setCounter(0);

  return (
    <div>
      <h1>Contador</h1>
      <h2>{counter}</h2>
      <div>
        <button type="button" onClick={Increase}>
          Incrementar
        </button>
        <button type="button" onClick={Reset}>
          Reset
        </button>
        <button type="button" onClick={Decrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
