import React from "react";
import Funkcionalna from "./components/Funkcionalna";
import Klasna from "./components/Klasna";

const App = () => {
  const stringPrimjer = "Props vjezba";

  return (
    <div>
      <h1>Vjezba CukoicF</h1>
      <Funkcionalna stringPrimjer={stringPrimjer} />
      <Klasna stringPrimjer={stringPrimjer} />
    </div>
  );
};
export default App;
