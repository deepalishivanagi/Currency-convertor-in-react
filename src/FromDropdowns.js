import select, { useEffect, useState } from "react";

export default function FromDropdown(param) {
  var [CurrencyListFrom, setCurrencyListFrom] = useState({});
  var [CurrencyArrayFrom, setCurrencyArrayFrom] = useState([]);

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

  function fetchCurrencyListFrom(e) {
    // fetch(
    //   "https://api.getgeoapi.com/v2/currency/list?api_key=699f87bb76f07db49f51f8f3a13463285f374991&format=json"
    // )
    //   .then((res) => res.json())
    //   .then((result) => setCurrencyList(result.currencies));
    // const TempArray = Object.keys(CurrencyList);
    // setCurrencyArray(TempArray);

    param.fromCurrencyHandler(e);
  }

  useEffect(() => {
    fetch(
      "https://api.getgeoapi.com/v2/currency/list?api_key=699f87bb76f07db49f51f8f3a13463285f374991&format=json"
    )
      .then((res) => res.json())
      .then((result) => {
        setCurrencyListFrom(result.currencies);
        const TempArray = Object.keys(result.currencies);
        setCurrencyArrayFrom(TempArray);
      });
  }, []);

  return (
    <div className="dropdown-main">
      <select onChange={fetchCurrencyListFrom}>
        {CurrencyArrayFrom.map((key) => {
          return <option value={key}>{CurrencyListFrom[key]}</option>;
        })}

        {/* <option value="Orange">Orange</option>
        <option value="Radish">Radish</option>
        <option value="Cherry">Cherry</option> */}
      </select>
      {/* <p>{param.ConvertFrom}</p> */}
    </div>
  );
}
