import React, { useState } from "react";
import CardsList from "../../components/CardsList";
import Input from "../../components/Input";

import styles from "./Home.module.scss";
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
const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.sneakersSearch}>
        <div className={styles.text}>Все кроссовки</div>
        <Input
          value={searchValue}
          onChange={setSearchValue}
          type={"text"}
          placeholder={"Поиск..."}
        />
      </div>
      <CardsList cardsList={MOKO_ARR} />
    </div>
  );
};

export default Home;
