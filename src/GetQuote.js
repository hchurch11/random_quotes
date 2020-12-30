import React, { useState } from "react";

export default function GetQuote() {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getRandomQuote = () =>
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        let randomNumber = Math.floor(Math.random() * data.length);
        console.log(randomNumber);

        setQuote(data[randomNumber].text);
        setAuthor(data[randomNumber].author);
      });

  if (loaded === false) {
    getRandomQuote();
    setLoaded(true);
  } else {
    return (
      <div className="GetQuote card">
        <h2 className="text">"{quote}"</h2>
        <p className="author">{author}</p>
        <button className="btn btn-info" onClick={getRandomQuote} target="_blank">
          New Quote
        </button>
      </div>
    );
  }
}
