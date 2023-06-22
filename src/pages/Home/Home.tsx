import React, { useEffect, useState } from "react";
import CardsList from "../../components/CardsList";
import Input from "../../components/Input";

import styles from "./Home.module.scss";

const Home = () => {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://64865e31a795d24810b7e00b.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sneakersSearch}>
        <div className={styles.text}>
          {searchValue ? `поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </div>
        <Input
          value={searchValue}
          onChange={setSearchValue}
          type={"text"}
          placeholder={"Поиск..."}
        />
        {searchValue.length > 0 && (
          <img
            onMouseDown={() => setSearchValue("")}
            className={styles.close}
            src="/img/close.svg"
            alt="close"
          />
        )}
      </div>
      <CardsList
        cardsList={items.filter((item: any) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )}
      />
    </div>
  );
};

export default Home;
