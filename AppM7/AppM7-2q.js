
import {useEffect, useState} from "react";


function App(){
  const [loading, setLoading] = useState(true);//31행 위해 true 초기화
  const [coins, setCoins] = useState([]); //초기값이 배열이 아닌 빈값이면 20행 에러남
  const [chooseCoin, setChoose] = useState("");
  const [money, setMoney] = useState("")
  const onChange = (event) => {
    setChoose(event.target.value);
    setMoney("");
  }
  const handleInput = (event) => {
    setMoney(event.target.value);
  }
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)=>response.json())
      .then((json)=>{
        setCoins(json);
        setLoading(false);
      });
  }, []);
  

  // 31행 select통해 선택된 코인의 종류의 value를 11통해 전달
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : <select onChange={onChange}>
        <option>Select Coin</option>
        {coins.map((coin, index) => 
        <option
          key = {index}
          value = {coin.quotes.USD.price}
          id = {coin.symbol}
          symbol = {coin.symbol}>
          {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD  
        </option>)}
      </select>} 
      <input type ="number"value={money} onChange={handleInput} placeholder="inpur your dollor"/>$
      <h2> get {money/chooseCoin}</h2>
    </div>  
  );
} 

export default App;
