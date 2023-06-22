import React, { FC, useContext } from "react";
import Card from "../../components/Card/Card";
// import { Context } from "../../context/Context";
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
  // const { saveToCart }: any = useContext(Context);
  return (
    <div onMouseDown={onClickCloseBasket} className={styles.container}>
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className={styles.containerInfo}
      >
        <div>
          <div className={styles.title}>Корзина</div>
          {MOKO_ARR.length > 0 ? (
            <div className={styles.cardList}>
              {MOKO_ARR.map((item: any, index: number) => {
                if (index < 10) {
                  return (
                    <Card card={item} key={item.id} size={CardSize.Small} />
                  );
                }
              })}
            </div>
          ) : (
            <div className={styles.ontainerBasket}>
              <img
                className={styles.EmptyStateImg}
                src="/img/basketImg/EmptyState.svg"
                alt="пусто"
              />
              <div className={styles.titleBasket}>Корзина пустая</div>
              <div className={styles.textBasket}>
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </div>
              <div onClick={onClickCloseBasket} className={styles.btnBasket}>
                <img className={styles.arrowBasket} src="/img/arrow<-.svg" />{" "}
                Вернуться назад
              </div>
            </div>
          )}
        </div>

        {MOKO_ARR.length > 0 ? (
          <div>
            <div className={styles.wrappertotalPrice}>
              <div className={styles.totalPrice}>Итого: </div>
              <div className={styles.border}></div>
              <div className={styles.num}>
                {1221}
                <div>руб.</div>
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
              Оформить заказ{" "}
              <img className={styles.arrow} src="/img/arrow.svg" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Basket;
