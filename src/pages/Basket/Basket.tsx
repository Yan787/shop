import React, { FC } from "react";
import Card from "../../components/Card/Card";
import { CardSize } from "../../utils/@globalTypes.ts";

import styles from "./Basket.module.scss";

type BasketProps = {
  onClickCloseBasket: () => void;
};
const MOKO_ARR = [
  {
    id: 1,
    img: "",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    id: 1,
    img: "",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    id: 1,
    img: "",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    id: 1,
    img: "",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    id: 1,
    img: "",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    id: 1,
    img: "",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    id: 1,
    img: "",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
];

const Basket: FC<BasketProps> = ({ onClickCloseBasket }) => {
  return (
    <div onMouseDown={onClickCloseBasket} className={styles.container}>
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className={styles.containerInfo}
      >
        <div>
          <div className={styles.title}>Корзина</div>
          <div className={styles.cardList}>
            {MOKO_ARR.map((item, index) => {
              if (index < 10) {
                return <Card card={item} key={item.id} size={CardSize.Small} />;
              }
            })}
          </div>
        </div>

        <div>
          <div className={styles.wrappertotalPrice}>
            <div className={styles.totalPrice}>Итого: </div>
            <div className={styles.border}></div>
            <div className={styles.num}>
              20000 <div>руб.</div>
            </div>
          </div>
          <div className={styles.wrappertotalPrice}>
            <div className={styles.totalPrice}>Налог 5%:</div>
            <div className={styles.border}></div>
            <div className={styles.num}>
              1074 <div>руб.</div>
            </div>
          </div>
          <div className={styles.button}>
            Оформить заказ <img className={styles.arrow} src="/img/arrow.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basket;
