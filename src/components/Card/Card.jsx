import React, { useState } from "react";

import styles from "./Card.module.scss"

const Card = () => {

const [isOpened, setOpened] = useState(false)
const [isLiked, setLiked] = useState(false)

const onChangeOpened = () => {
    setOpened(!isOpened)
}

const onChangelike = () => {
    setLiked(!isLiked)
}

    return (
        <div className={styles.container}>
            <div className={styles.wrapperLike} onClick={onChangelike}>
                {isLiked ? <img className={styles.like} src="/img/Liked.svg"/> : <img className={styles.like} src="/img/LikeSneakers.svg"/> }
            </div>
            <img className={styles.card} src="/img/sneakers/sneakers-1.svg"/>
            <div className={styles.text}>Мужские Кроссовки Nike Blazer Mid Suede</div>
                <div className={styles.wrapperPrice}>
                    <div className={styles.wrapper}>
                        <div className={styles.price}>Цена:</div>
                        <div className={styles.sum}>12 999 руб.</div>
                    </div>
                    <div onClick={onChangeOpened}>
                        {isOpened ? <img src="/img/added.svg" /> : <img src="/img/add.svg" /> }
                    </div>
                </div>
        </div>
    )
}

export default Card