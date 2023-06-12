import React, { FC, useState } from "react";

import styles from "./Heder.module.scss";

type HederProps = {
  onClickOpenBasket: () => void;
};

const Heder: FC<HederProps> = ({ onClickOpenBasket }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img width={40} height={40} src="/img/logo.png" />
        <div className={styles.containerInfo}>
          <div className={styles.title}>REACT SNEAKERS</div>
          <div className={styles.text}>Магазин лучших кроссовок</div>
        </div>
      </div>
      <div className={styles.iconWrapper}>
        <div className={styles.priceWrapper}>
          <img
            onClick={onClickOpenBasket}
            className={styles.img}
            src="/img/basket.svg"
          />
          1000
          <div className={styles.price}>руб</div>
        </div>
        <img className={styles.imgBtn} src="/img/like.svg" />
        <img className={styles.imgBtn} src="/img/user.svg" />
      </div>
    </div>
  );
};

export default Heder;
