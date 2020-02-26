import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [fruits, setFruits] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
      if (loading) {
          fetch("/fruit" + window.location.search)
          .then(result => result.json())
          .then(json => {
              setFruits(json);
              setLoading(false)
          });
      }
  });

  let formatFruits = () => {
      return fruits.map(fruit => (
          <div key={fruit.name} className="fruitItem">
            <div className="fruitName">
                {fruit.name}
            </div>
            <div className="fruitColors">
                {fruit.colors && fruit.colors.length && (
                    <ul>
                        {fruit.colors.map(color => <li key={color}>{color}</li>)}
                    </ul>
                )}
            </div>
            <div className="fruitInSeason">
                {fruit.in_season ? "Yes" : "No"}
            </div>
        </div>
    ));
  }

  return (
    <div className="App">
      <header className="App-header">
        Fruits listing
      </header>

    {loading ? (
        <div className="loading">Loading results...</div>
    ) : (
        <div className="listing">
            <div className="listHeader">
                <div className="colHeader">Fruit Name</div>
                <div className="colHeader">Colors</div>
                <div className="colHeader">In Season</div>
            </div>
            <div className="listBody">
                {formatFruits()}
            </div>
        </div>
    )}
    </div>
  );
}

export default App;
