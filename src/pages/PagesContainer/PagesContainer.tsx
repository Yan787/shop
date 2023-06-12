import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Heder from "../../components/Heder";
import Basket from "../Basket";

import styles from "./PagesContainer.module.scss";

const PagesContainer = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onClickOpenBasket = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className={styles.mainInfo}>
      <Heder onClickOpenBasket={onClickOpenBasket} />
      {isOpened && <Basket onClickCloseBasket={onClickOpenBasket} />}
      <Outlet />
    </div>
  );
};

export default PagesContainer;
