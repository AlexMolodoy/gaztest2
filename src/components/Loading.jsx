import '../App.css';
import React from 'react';

function Loading() {

  const loadingArray = [];

  let i=1;
  while(i <= 20) {
    loadingArray.push(i);
    i+=1;
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          {loadingArray.map((element, index) => <span key={index} className={`delay${element}`} style={{transform:`rotate(${element * 18}deg)`}}></span>)}
        </div>
      </div>
    </>
  );
}

export default Loading;
