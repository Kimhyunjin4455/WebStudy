import {useEffect, useState} from "react";


function App(){
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); //초기값이 배열이 아닌 빈값이면 20행 에러남
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)=>response.json())
      .then((json)=>{
        setCoins(json);
        setLoading(false);
      });
  }, []);
  

  
  return (
    <div>
      <h1>The Coins! {coins.length}</h1>
      {loading ? <strong>Loading...</strong> : null} 
      <ul>
        {coins.map((coin) => (
           <li>
             {coin.name} ({coin.syobol}): ${coin.quotes.USD.price} USD
           </li>
        ))}
      </ul>
    </div>  
  );
} 

export default App;
