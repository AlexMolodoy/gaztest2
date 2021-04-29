import './App.css';
import React, { useEffect, useState } from 'react';
import {Switch,
  Route,
  Link,
} from "react-router-dom";

import HHH from './details';

function App() {

  const [state, setstate] = useState([])

  const fetchData = () => fetch('http://localhost:7070/api/services').then((data) => data.json()).then((data) => setstate(data));

  useEffect(() => {
    fetchData();
  }, [])

console.log(state)

  return (
    <>
    <Switch>
      <Route path='/test/:id'>
        <HHH />
      </Route>
    </Switch>
      <ul>
        {state.map((element) =>  <li key={element.id} ><Link to={'/test/'+element.id}>{element.name}</Link></li>)}
      </ul>
    </>
  );
}

export default App;
