import './App.css';
import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Details from './components/Details';
import List from './components/List';
import { observer } from "mobx-react-lite"

const App = observer(({ store }) => {

  return (
    <Switch>
      <Route path='/:id'>
        <Details store={store} />
      </Route>
      <Route path='/'>
        <List store={store} />
      </Route>
    </Switch>
  );
})

export default App;
