import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouterList } from "../../pages/Router";

import styles from "./Heder.module.scss";

type HederProps = {
  onClickOpenBasket: () => void;
};

const Heder: FC<HederProps> = ({ onClickOpenBasket }) => {
  const navigate = useNavigate();

  const onNavigateLike = () => {
    navigate(RouterList.Saved);
  };

  const onNavigateHome = () => {
    navigate(RouterList.Home);
  };

  return (
    <div className={styles.container}>
      <div onMouseDown={onNavigateHome} className={styles.wrapper}>
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
        <img
          onMouseDown={onNavigateLike}
          className={styles.imgBtn}
          src="/img/like.svg"
        />
        <img className={styles.imgBtn} src="/img/user.svg" />
      </div>
    </div>
  );
};

export default Heder;
