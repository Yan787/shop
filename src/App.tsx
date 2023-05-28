import React from "react";

import Card from "./components/Card/Card";
import Heder from "./components/Heder/Heder";

function App() {
  return (
    <div className="container">
      <Heder />
      <div className="wrapper">
        <div className="text">Все кроссовки</div>
        <Card />
      </div>
    </div>
  );
}

export default App;
