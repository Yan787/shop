import React from "react";

import Card from "./components/Card/Card";
import Heder from "./components/Heder/Heder";
import Input from "./components/Input";

function App() {
  return (
    <div className="container">
      <Heder />
      <div className="wrapper">
        <div className="text">Все кроссовки</div>
        <Input placeholder="Поиск..." onChange={} />
        <Card />
      </div>
    </div>
  );
}

export default App;
