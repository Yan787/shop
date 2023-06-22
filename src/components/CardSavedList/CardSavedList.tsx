import React, { FC } from "react";
import { CardListType, CardSize } from "../../utils/@globalTypes.ts";
import Card from "../Card";

import styles from "./CardSavedList.module.scss";

type CardSavedListProps = {
  cardsList: CardListType;
};

const CardSavedList: FC<CardSavedListProps> = ({ cardsList }) => {
  return cardsList.length > 0 ? (
    <div className={styles.container}>
      {cardsList.map((item, index) => {
        if (index < 8) {
          return <Card card={item} size={CardSize.liked} key={item.id} />;
        }
      })}
    </div>
  ) : null;
};

export default CardSavedList;
