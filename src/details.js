import './App.css';
import React, { useEffect, useState } from 'react';
import {Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function HHH() {

  const params = useParams();

  // const [state, setstate] = useState([])

  // const fetchData = () => fetch('http://localhost:7070/api/services').then((data) => data.json()).then((data) => setstate(data));

  // useEffect(() => {
  //   fetchData();
  // }, [])

// console.log(state)
console.log(params)

  return (
    <>
      <h1>loxebanui</h1>
    </>
  );
}

export default HHH;
