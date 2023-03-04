import React from 'react';
import './style.css';
import { useState } from 'react';


const SamosaApp = () => {

  const [count, setCount] = useState(0);

  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier( multiplier * 10);
      setCount(count - 1000);
    }
  }

  return (
    <div className = "SamusaSelector">
      <h1 className='pageTitle'>Samosa Selector</h1>
      <div className='count'>
        <h3 className='clickCount'>Count: {count}</h3>
      </div>
      <button className='imageButton'>
        <img className="image" src='/Public/images/samosa.jpg' onClick={updateCount}></img>
      </button>
      <div className='container'>
        <div className='upgrade'>
          <h3 className='upgradeTitle'>Double Stuffed 👯‍♀️</h3>
            <p className='upgradeBy'>2x per click</p>
            <button className='imcreaseNumber' onClick={buyDoubleStuffed}>10 Samusas</button>
        </div>

        <div className='upgrade'>
          <h3 className='upgradeTitle'>Party Pack 🎉</h3>
            <p className='upgradeBy'>5x per click</p>
            <button className='imcreaseNumber' onClick={buyPartyPack}>100 Samusas</button>
        </div>

        <div className='upgrade'>
          <h3 className='upgradeTitle'>Full Feast 👩🏽‍🍳</h3>
            <p className='upgradeBy'>10x per click</p>
            <button className='imcreaseNumber' onClick = {buyFullFeast}>1000 Samusas</button>
        </div>
      </div>
    </div>
  )
}

export default SamosaApp