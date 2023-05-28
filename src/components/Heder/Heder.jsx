import React from "react";

import styles from "./Heder.module.scss";

const Heder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img width={40} height={40} src="/img/logo.png"/>
        <div className={styles.containerInfo}>
          <div className={styles.title}>REACT SNEAKERS</div>
          <div className={styles.text}>Магазин лучших кроссовок</div>
        </div>
      </div>
      <div className={styles.iconWrapper}>
        <div className={styles.priceWrapper}>
          <img className={styles.img} src="/img/basket.svg"/>1000
          <div className={styles.price}>руб</div>
        </div>
        <img src="/img/like.svg"/>
        <img src="/img/user.svg"/>
      </div>
    </div>
  );
};

export default Heder;
