import classNames from "classnames";
import React, { FC, useState } from "react";
import { CardSize, CardType } from "../../utils/@globalTypes.ts";

import styles from "./Card.module.scss";

type CardProps = {
  size?: CardSize;
  card: CardType;
};

const Card: FC<CardProps> = ({ card, size }) => {
  const { id, img, title, price } = card;
  const isSmall = size === CardSize.Small;
  const isLikedSize = size === CardSize.liked;

  const [isAdd, setAdd] = useState(false);
  const [isLiked, setLiked] = useState(false);

  const [saveToCart, setSaveToCart]: any = useState([]);

  const onChangeOpened = () => {
    setAdd(!isAdd);
    setSaveToCart((prev: any) => [...saveToCart, card]);
  };
  console.log(saveToCart);
  const onChangelike = () => {
    setLiked(!isLiked);
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.containerSmall]: isSmall,
      })}
    >
      <div
        className={classNames(styles.wrapperLike, {
          [styles.wrapperLikeSmall]: isSmall,
        })}
        onClick={onChangelike}
      >
        {isLikedSize && <img className={styles.like} src="/img/Liked.svg" />}
        {isLiked ? (
          <img className={styles.like} src="/img/Liked.svg" />
        ) : (
          <img
            className={classNames(styles.like, {
              [styles.likeSavedCard]: isLikedSize,
            })}
            src="/img/LikeSneakers.svg"
          />
        )}
      </div>
      <img
        className={classNames(styles.card, { [styles.cardSmall]: isSmall })}
        src={img}
      />
      <div className={classNames(styles.text, { [styles.textSmall]: isSmall })}>
        {title}
        {isSmall && <div className={styles.sumSmall}>{price} руб.</div>}
      </div>
      <div
        className={classNames(styles.wrapperPrice, {
          [styles.wrapperPriceSmall]: isSmall,
        })}
      >
        {isSmall && (
          <img
            className={styles.crossSmall}
            width="32"
            height="32"
            src="/img/cross.svg"
            alt="cross"
          />
        )}
        <div className={styles.wrapper}>
          <div
            className={classNames(styles.price, {
              [styles.priceSmall]: isSmall,
            })}
          >
            Цена:
          </div>
          <div
            className={classNames(styles.sum, { [styles.sumDelit]: isSmall })}
          >
            {price}руб.
          </div>
        </div>

        <div
          className={classNames(styles.wrapperLike, {
            [styles.wrapperLikeSmall]: isSmall,
          })}
          onClick={onChangeOpened}
        >
          {isAdd ? <img src="/img/added.svg" /> : <img src="/img/add.svg" />}
        </div>
      </div>
    </div>
  );
};

export default Card;
