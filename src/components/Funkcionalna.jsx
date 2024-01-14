import React from "react";

const Funkcionalna = (props) => {
  return (
    <div>
      <h2>Funkcionalna podkomponenta</h2>
      <p>Pozdrav iz funkcionalne podkomponente!</p>
      <p>{props.stringPrimjer}</p>
    </div>
  );
};

export default Funkcionalna;
