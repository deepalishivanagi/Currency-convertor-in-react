import select, { useState, useEffect } from "react";

export default function ToDropdown(param) {
  var [CurrencyListTo, setCurrencyListTo] = useState({});
  var [CurrencyArrayTo, setCurrencyArrayTo] = useState([]);

  // const CurrencyList = [
  //   { key: "STN", value: "São Tomé and Príncipe dobra" },
  //   { key: "XAG", value: "Silver (troy ounce)" },
  //   { key: "XAU", value: "Gold (troy ounce)" },
  //   { key: "PLN", value: "Polish złoty" },
  //   { key: "UGX", value: "Ugandan shilling" },
  //   { key: "GGP", value: "Guernsey pound" },
  //   { key: "MWK", value: "Malawian kwacha" },
  //   { key: "NAD", value: "Namibian dollar" },
  //   { key: "ALL", value: "Albanian lek" },
  //   { key: "BHD", value: "Bahraini dinar" },
  //   { key: "JEP", value: "Jersey pound" },
  //   { key: "BWP", value: "Botswana pula" },
  //   { key: "MRU", value: "Mauritanian ouguiya" },
  //   { key: "BMD", value: "Bermudian dollar" },
  //   { key: "INR", value: "Indian rupee" },
  //   { key: "AUD", value: "Australian dollar" },
  //   { key: "USD", value: "United States dollar" },
  //   { key: "PEN", value: "Peruvian sol" }
  // ];

  function fetchCurrencyListTo(e) {
    // fetch(
    //   "https://api.getgeoapi.com/v2/currency/list?api_key=699f87bb76f07db49f51f8f3a13463285f374991&format=json"
    // )
    //   .then((res) => res.json())
    //   .then((result) => setCurrencyList(result.currencies));
    // const TempArray = Object.keys(CurrencyList);
    // setCurrencyArray(TempArray);

    param.ToCurrencyHandler(e);
  }

  useEffect(() => {
    fetch(
      "https://api.getgeoapi.com/v2/currency/list?api_key=699f87bb76f07db49f51f8f3a13463285f374991&format=json"
    )
      .then((res) => res.json())
      .then((result) => {
        setCurrencyListTo(result.currencies);
        const TempArray = Object.keys(result.currencies);
        setCurrencyArrayTo(TempArray);
      });
  }, []);

  return (
    <div className="dropdown-main">
      <select onChange={fetchCurrencyListTo}>
        {CurrencyArrayTo.map((key) => {
          return <option value={key}>{CurrencyListTo[key]}</option>;
        })}

        {/* <option value="Orange">Orange</option>
        <option value="Radish">Radish</option>
        <option value="Cherry">Cherry</option> */}
      </select>
      {/* <p>{param.ConvertTo}</p> */}
    </div>
  );
}
