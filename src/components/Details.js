import '../App.css';
import React, { useEffect, useCallback } from 'react';
import {
  useParams,
} from "react-router-dom";
import { observer } from "mobx-react-lite"

import Loading from './Loading';
import Error from './Error';

const Details = observer(({store}) => {

  const {id} = useParams();

  const fetchData = useCallback(
    () => {
      store.elementLoad(id);
    },
    [id, store],
  )


  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <>
      {store.loading && !store.errorLog && <Loading />}
      {!store.loading && store.errorLog && <Error arg={id} store={store} />}
    </>
  );
})

export default Details;
