import '../App.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite"

const List = observer(({ store }) => {

  useEffect(() => store.download(), [store]);

  return (
    <>
      <ul className="list">
        {store.array.map(element => <li key={element.id} className="listElement" ><Link className="listElementLink" to={'/' + element.id}>{element.name}</Link></li>)}
      </ul>
    </>
  );
})

export default List;
