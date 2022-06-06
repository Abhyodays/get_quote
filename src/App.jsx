import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState([]);
  const fetchAdvice = async () => {
    const response = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
    const data = await response.json();
    setAdvice(data.quotes[0]);
    console.log(data);
  }
  useEffect(() => {
    setAdvice(fetchAdvice);
  }, []);


  return (
    <div className="container">
      <div className="quoteCard">
        <p className="quote">{advice.text}</p>
        <span className="author">{'— '+advice.author}</span>
        <button onClick={fetchAdvice}>Another Quote</button>
      </div>
    </div>
  );
}

export default App;