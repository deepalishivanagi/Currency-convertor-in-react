import "./styles.css";
import React, { useState } from "react";
import FromDropdown from "./FromDropdowns";
import ToDropdown from "./ToDropdown";

export default function App() {
  var [ConvertFrom, setConvertFrom] = useState("");
  var [ConvertTo, setConvertTo] = useState("");
  var [Amount, setAmount] = useState("");
  var [Output, setOutput] = useState("");

  function fromCurrencyHandler(e) {
    setConvertFrom(e.target.value);
    // console.log(e.target.value);
  }

  function ToCurrencyHandler(e) {
    setConvertTo(e.target.value);
    // console.log(e.target.value);
  }

  function AmountValIs(e) {
    setAmount(e.target.value);
    // console.log(e.target.value);
  }

  function ClickHandler() {
    fetch(
      "https://api.getgeoapi.com/v2/currency/convert?api_key=" +
        "699f87bb76f07db49f51f8f3a13463285f374991" +
        "&from=" +
        ConvertFrom +
        "&to=" +
        ConvertTo +
        "&amount=" +
        Amount +
        "&format=json"
    )
      .then((res) => res.json())
      .then((rate) => setOutput(rate.rates[ConvertTo].rate_for_amount));
  }

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <br></br>
      <div id="currencyList">
        <span>
          <b>From:</b>
        </span>
        <FromDropdown
          fromCurrencyHandler={fromCurrencyHandler}
          ConvertFrom={ConvertFrom}
        />
        <span>
          <b>To:</b>
        </span>
        <ToDropdown
          ToCurrencyHandler={ToCurrencyHandler}
          ConvertTo={ConvertTo}
        />
      </div>
      <h2>Amount:</h2>
      <input type="number" onChange={AmountValIs}></input>
      <br />
      <button onClick={ClickHandler}>Convert</button>
      <h2 id="output">{Output}</h2>
    </div>
  );
}
