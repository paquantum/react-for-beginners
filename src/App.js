import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [select, setSelect] = useState(1);
  
  const onSelect = (event) => {
    setSelect(event.target.value);
  };
  const onChange = (event) => {
    setDollar(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
        <select onChange={onSelect}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price} key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price}</option>))
          }
        </select>}
      <hr />
      <div><label htmlFor="dollars">Dollars</label>
        <input value={dollar} 
          id="dollars" 
          onChange={onChange} 
          type="number" 
          placeholder="달러를 입력해주세요." />
      </div>
      <div>
        <h3>구매 가능 수량 : {dollar / select}</h3>
      </div>
    </div>
  );
}

export default App;