import '../App.css';
import * as TYPES from 'prop-types';
import React from 'react';

Error.propTypes = {
  arg: TYPES.string,
};

function Error({ arg, store }) {

  const refresh = () => {
    store.elementLoad(arg)
  }

  return (
    <>
      <article className="errorContainer">
        <h1 className="errorHeader">Произошла ошибка!</h1>
        <button className="errorButton" onClick={refresh}>Повторить запрос</button>
      </article>
    </>
  );
}

export default Error;
