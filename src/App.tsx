import React, { useState } from "react";

import Card from "./components/Card";
import CardsList from "./components/CardsList";
import Heder from "./components/Heder";
import Input from "./components/Input";
import Basket from "./pages/Basket";

const MOKO_ARR = [
  {
    id: 1,
    img: "/img/sneakers/sneakers-7.svg",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    id: 2,
    img: "/img/sneakers/sneakers-1.svg",
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "12 999",
  },
  {
    id: 3,
    img: "/img/sneakers/sneakers-2.svg",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8 499",
  },
  {
    id: 4,
    img: "/img/sneakers/sneakers-3.svg",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/sneakers/sneakers-3.svg",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },

  {
    id: 4,
    img: "/img/sneakers/sneakers-5.svg",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/sneakers/sneakers-6.svg",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/sneakers/sneakers-7.svg",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
  {
    id: 4,
    img: "/img/",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
];

function App() {
  const [searchValue, setSearchValue] = useState("");

  const [isOpened, setIsOpened] = useState(false);

  const onClickOpenBasket = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <div className="container">
        {isOpened && <Basket onClickCloseBasket={onClickOpenBasket} />}
        <Heder onClickOpenBasket={onClickOpenBasket} />
        <div className="wrapper">
          <div className="sneakersSearch">
            <div className="text">Все кроссовки</div>
            <Input
              value={searchValue}
              onChange={setSearchValue}
              type={"text"}
              placeholder={"Поиск..."}
            />
          </div>
          <CardsList cardsList={MOKO_ARR} />
        </div>
      </div>
    </>
  );
}

export default App;
