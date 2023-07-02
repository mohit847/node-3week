import React, { useState } from 'react';
import './App.css';
import { FaSyncAlt } from 'react-icons/fa';

const App = () => {
  const [clicks, setClicks] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#BBBBBB');

  const handleIncrement = () => {
    setClicks(clicks + 1);
    setBackgroundColor(getRandomColor());
  };

  const handleDecrement = () => {
    if (clicks > 0) {
      setClicks(clicks - 1);
      setBackgroundColor(getRandomColor());
    }
  };

  const handleRefresh = () => {
    setClicks(0);
    setBackgroundColor('#BBBBBB');
  };

  const getRandomColor = () => {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#00FFFF', '#FFFF00'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="App">
      <div className='inside'>
        <div className="Card" style={{ backgroundColor }}>
          <h2>{clicks}</h2>
        </div>
        <div className="ButtonArea">
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleRefresh} className="RefreshButton">
            <FaSyncAlt />
          </button>
          <button onClick={handleDecrement} className="minus">-</button>
        </div>
      </div>
    </div>
  );
};

export default App;
