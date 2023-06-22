import React, { useState } from "react";
import { Context } from "./context/Context";

import Router from "./pages/Router";

function App() {
  const [saveToCart, setSaveToCart] = useState([]);
  const onAddSneakers = () => {};

  return (
    // <Context.Provider value={{ onAddSneakers }}>
    <Router />
    // </Context.Provider>
  );
}

export default App;
