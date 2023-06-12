import React, { FC } from "react";

import styles from "./CardsList.module.scss";
import { CardListType } from "../../utils/@globalTypes.ts";
import Card from "../Card";

type CardsListProps = {
  cardsList: CardListType;
};

const CardsList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList.length > 0 ? (
    <div className={styles.container}>
      {cardsList.map((item, index) => {
        if (index < 12) {
          return <Card card={item} key={item.id} />;
        }
      })}
    </div>
  ) : null;
};

export default CardsList;
